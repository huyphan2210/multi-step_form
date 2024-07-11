import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  FormStateService,
  PersonalInfoFormControls,
  personalInfoKeys,
} from 'src/state-service/form.state-service';
import { Step, StepStateService } from 'src/state-service/step.state-service';

@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  constructor(
    private stepStateService: StepStateService,
    private formStateService: FormStateService
  ) {}
  currentStep: Step = Step.FillInPersonalInfo;
  step = Step;
  isNextButtonDisabled = false;
  form!: FormGroup<PersonalInfoFormControls>;

  ngOnInit() {
    this.stepStateService.getStepState().subscribe((stepState) => {
      this.currentStep = stepState.step;
    });

    this.formStateService
      .getFormState()
      .subscribe((formState: FormGroup<PersonalInfoFormControls>) => {
        this.form = formState;
      });
  }

  previousStep() {
    this.stepStateService.setPreviousStepState();
  }

  nextStep() {
    this.stepStateService.setNextStepState();
  }

  checkIfNextButtonIsDisabled = () => {
    const isNameValid = this.form.get(personalInfoKeys.name)?.valid;
    const isEmailValid = this.form.get(personalInfoKeys.email)?.valid;
    const isPhoneValid = this.form.get(personalInfoKeys.phone)?.valid;
    const isPlanValid = this.form.get(personalInfoKeys.planId)?.valid;
    switch (this.currentStep) {
      case Step.FillInPersonalInfo:
        return !isNameValid || !isEmailValid || !isPhoneValid;
      case Step.SelectPlan:
        return !isPlanValid;
      default:
        return false;
    }
  };
}
