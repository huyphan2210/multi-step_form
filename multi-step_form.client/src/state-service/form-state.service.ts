import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { PersonalInfoRequest } from 'src/swagger/api';

export interface PersonalInfoFormControls {
  name: AbstractControl<string | null>;
  email: AbstractControl<string | null>;
  phone: AbstractControl<string | null>;
  addOnIds: AbstractControl<string[] | null>;
  planId: AbstractControl<string | null>;
}

export const personalInfoKeys: Record<keyof PersonalInfoRequest, string> = {
  name: 'name',
  email: 'email',
  phone: 'phone',
  addOnIds: 'addOnIds',
  planId: 'planId',
};

@Injectable({
  providedIn: 'root',
})
export class FormStateService {
  private formState$: BehaviorSubject<FormGroup>;
  form: FormGroup<PersonalInfoFormControls>;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group<PersonalInfoFormControls>({
      name: new FormControl<string | null>('', Validators.required),
      email: new FormControl<string | null>('', [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl<string | null>('', Validators.required),
      planId: new FormControl<string | null>('', Validators.required),
      addOnIds: new FormControl<string[] | null>([]),
    });
    this.formState$ = new BehaviorSubject<FormGroup>(this.form);
  }

  getFormStateState() {
    return this.formState$.asObservable();
  }
}
