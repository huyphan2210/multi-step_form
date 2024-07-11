import { Component, OnInit } from '@angular/core';
import { Step, StepStateService } from 'src/state-service/step.state-service';

interface StepInfo {
  step: Step;
  stepCount: number;
  stepName: string;
}

@Component({
  selector: 'step-bar',
  templateUrl: './step-bar.component.html',
  styleUrls: ['./step-bar.component.scss'],
})
export class StepBarComponent implements OnInit {
  constructor(private stepStateService: StepStateService) {}

  currentStep: Step = Step.FillInPersonalInfo;
  stepList: StepInfo[] = [
    {
      step: Step.FillInPersonalInfo,
      stepCount: 1,
      stepName: 'Your Info',
    },
    {
      step: Step.SelectPlan,
      stepCount: 2,
      stepName: 'Select Plan',
    },
    {
      step: Step.SelectAddOn,
      stepCount: 3,
      stepName: 'Add-ons',
    },
    {
      step: Step.Confirm,
      stepCount: 4,
      stepName: 'Summary',
    },
  ];

  ngOnInit() {
    this.stepStateService.getStepState().subscribe((stepState) => {
      this.currentStep = stepState.step;
    });
  }
}
