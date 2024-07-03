import { Component, OnInit } from '@angular/core';
import { Step, StepStateService } from 'src/state-service/step-state.service';

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  currentStep: Step = Step.FillInPersonalInfo;
  constructor(private stepStateService: StepStateService) {}
  ngOnInit() {
    this.stepStateService.getStepState().subscribe((stepState) => {
      this.currentStep = stepState.step;
    });
  }
}
