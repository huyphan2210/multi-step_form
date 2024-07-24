import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Step {
  FillInPersonalInfo,
  SelectPlan,
  SelectAddOn,
  Confirm,
  ThankYou,
}

interface StepState {
  step: Step;
}

@Injectable({
  providedIn: 'root',
})
export class StepStateService {
  private stepState$: BehaviorSubject<StepState>;

  constructor() {
    this.stepState$ = new BehaviorSubject<StepState>({
      step: Step.FillInPersonalInfo,
    });
  }

  getStepState() {
    return this.stepState$.asObservable();
  }

  setNextStepState() {
    let nextStep = Step.FillInPersonalInfo;
    switch (this.stepState$.getValue().step) {
      case Step.FillInPersonalInfo:
        nextStep = Step.SelectPlan;
        break;
      case Step.SelectPlan:
        nextStep = Step.SelectAddOn;
        break;
      case Step.SelectAddOn:
        nextStep = Step.Confirm;
        break;
      case Step.Confirm:
        nextStep = Step.ThankYou;
        break;
      default:
        return;
    }
    this.stepState$.next({ step: nextStep });
  }

  setPreviousStepState() {
    let prevStep: Step | null = null;
    switch (this.stepState$.getValue().step) {
      case Step.SelectPlan:
        prevStep = Step.FillInPersonalInfo;
        break;
      case Step.SelectAddOn:
        prevStep = Step.SelectPlan;
        break;
      case Step.Confirm:
        prevStep = Step.SelectAddOn;
        break;
      default:
        return;
    }
    this.stepState$.next({ step: prevStep });
  }

  setStepState(step: Step) {
    this.stepState$.next({ step });
  }
}
