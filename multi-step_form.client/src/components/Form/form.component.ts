import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  FormStateService,
  PersonalInfoFormControls,
} from 'src/state-service/form.state-service';
import { Step, StepStateService } from 'src/state-service/step.state-service';

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(
    private stepStateService: StepStateService,
    private formStateService: FormStateService
  ) {}

  currentStep: Step = Step.FillInPersonalInfo;
  step = Step;
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
}
