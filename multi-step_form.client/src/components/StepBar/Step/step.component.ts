import {
  Component,
  Input,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent implements AfterViewInit {
  @Input() stepCount: number = 0;
  @Input() stepName: string = '';
  @Input() isCurrentStep: boolean = false;
  @ViewChild('stepCountRef') stepCountRef?: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    if (this.isCurrentStep && this.stepCountRef) {
      this.stepCountRef.nativeElement.className += ' current';
    }
  }
}
