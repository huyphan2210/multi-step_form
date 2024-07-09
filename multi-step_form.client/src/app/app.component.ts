import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Step, StepStateService } from 'src/state-service/step-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private stepStateService: StepStateService,
    private cdr: ChangeDetectorRef
  ) {}

  @ViewChild('formWrapper') formWrapperRef!: ElementRef<HTMLDivElement>;

  isStepperHasOneButton = false;
  isStepperShown = false;
  isStepperSticky = false;

  ngOnInit() {
    this.stepStateService.getStepState().subscribe((stepState) => {
      this.isStepperHasOneButton = stepState.step === Step.FillInPersonalInfo;
      this.isStepperShown = stepState.step !== Step.ThankYou;
    });
  }

  handleFormSizeChange(formDom: DOMRectReadOnly) {
    if (
      formDom.height >
      window.innerHeight - (window.innerHeight * 25) / 100 - 111
    ) {
      this.isStepperSticky = true;
    } else {
      this.isStepperSticky = false;
    }
    this.cdr.detectChanges();
  }
}
