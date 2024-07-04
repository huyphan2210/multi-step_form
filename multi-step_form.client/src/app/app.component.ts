import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Step, StepStateService } from 'src/state-service/step-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private stepStateService: StepStateService) {}
  isStepperHasOneButton = false;
  isStepperShown = false;
  ngOnInit() {
    this.stepStateService.getStepState().subscribe((stepState) => {
      this.isStepperHasOneButton = stepState.step === Step.FillInPersonalInfo;
      this.isStepperShown = stepState.step !== Step.ThankYou;
    });
  }
}
