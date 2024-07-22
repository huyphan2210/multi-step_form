import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs';
import PersonalInfoAPI from 'src/api/personal-info.api';
import { PersonalInfoRequest, PriceType } from 'src/swagger/api';

export interface PersonalInfoFormControls {
  name: AbstractControl<string | null>;
  email: AbstractControl<string | null>;
  phone: AbstractControl<string | null>;
  addOnIds: AbstractControl<string[] | null>;
  planId: AbstractControl<string | null>;
  currentPriceType: AbstractControl<PriceType | null>;
  isUpdatingExistedPersonalInfo: AbstractControl<boolean | null>;
}

export const personalInfoKeys: Record<keyof PersonalInfoRequest, string> = {
  name: 'name',
  email: 'email',
  phone: 'phone',
  addOnIds: 'addOnIds',
  planId: 'planId',
  currentPriceType: 'currentPriceType',
};

@Injectable({
  providedIn: 'root',
})
export class FormStateService {
  private formState$: BehaviorSubject<FormGroup>;
  private emailFetchingState$: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  form: FormGroup<PersonalInfoFormControls>;

  validateEmailIfExisted(personalInfoApi: PersonalInfoAPI) {
    const emailControl = this.form.get('email');
    emailControl?.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      const nameControl = this.form.get('name');
      const phoneControl = this.form.get('phone');
      const isUpdatingControl = this.form.get('isUpdatingExistedPersonalInfo');
      if (emailControl.valid && emailControl.value) {
        nameControl?.disable();
        phoneControl?.disable();
        this.emailFetchingState$.next(true);
        personalInfoApi
          .getPersonalInfo(emailControl.value)
          .then((personalInfo) => {
            this.form.patchValue({
              name: personalInfo.name!,
              phone: personalInfo.phone!,
              planId: personalInfo.planId!,
              addOnIds: [],
              currentPriceType: personalInfo.currentPriceType,
              isUpdatingExistedPersonalInfo: true,
            });
          })
          .catch(() => {
            isUpdatingControl?.setValue(false);
          })
          .finally(() => {
            nameControl?.enable();
            phoneControl?.enable();
            this.emailFetchingState$.next(false);
          });
      } else {
        nameControl?.disable();
        phoneControl?.disable();
      }
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private personalInfoApi: PersonalInfoAPI
  ) {
    this.form = formBuilder.group<PersonalInfoFormControls>({
      email: new FormControl<string | null>(null, [
        Validators.required,
        Validators.email,
      ]),
      name: new FormControl<string | null>(
        { value: null, disabled: true },
        Validators.required
      ),
      phone: new FormControl<string | null>(
        { value: null, disabled: true },
        Validators.required
      ),
      planId: new FormControl<string | null>(null, Validators.required),
      addOnIds: new FormControl<string[] | null>([]),
      currentPriceType: new FormControl<PriceType>(0),
      isUpdatingExistedPersonalInfo: new FormControl<boolean>(false),
    });
    this.validateEmailIfExisted(personalInfoApi);
    this.formState$ = new BehaviorSubject<FormGroup>(this.form);
  }

  getFormState() {
    return this.formState$.asObservable();
  }

  getEmailFetchingState() {
    return this.emailFetchingState$.asObservable();
  }
}
