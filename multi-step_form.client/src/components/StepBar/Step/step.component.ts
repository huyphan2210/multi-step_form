import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent implements AfterViewInit, OnChanges {
  @Input() stepCount: number = 0;
  @Input() stepName: string = '';
  @Input() isCurrentStep: boolean = false;
  @ViewChild('stepCountRef') stepCountRef?: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.updateStepClass();
  }

  ngOnChanges(): void {
    this.updateStepClass();
  }

  private updateStepClass(): void {
    if (this.stepCountRef) {
      if (this.isCurrentStep) {
        this.stepCountRef.nativeElement.className = 'step__count current';
      } else {
        this.stepCountRef.nativeElement.className = 'step__count';
      }
    }
  }
}
