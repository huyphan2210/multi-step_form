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

  setStepState(newStep: Step) {
    this.stepState$.next({ step: newStep });
  }
}
