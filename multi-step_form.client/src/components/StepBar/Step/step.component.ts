import { Component, Input } from '@angular/core';

@Component({
  selector: 'step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent {
  @Input() stepCount: number = 0;
  @Input() stepName: string = '';
  @Input() isCurrentStep: boolean = false;
}
