import { Component, OnInit } from '@angular/core';
import { Step, StepStateService } from 'src/state-service/step-state.service';

@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  constructor(private stepStateService: StepStateService) {}

  currentStep: Step = Step.FillInPersonalInfo;
  step = Step;
  ngOnInit() {
    this.stepStateService.getStepState().subscribe((stepState) => {
      this.currentStep = stepState.step;
    });
  }
}
