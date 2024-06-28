import { NgModule } from '@angular/core';
import { StepBarComponent } from './step-bar.component';
import { StepComponent } from './Step/step.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [StepBarComponent, StepComponent],
  imports: [CommonModule],
  exports: [StepBarComponent],
})
export class StepBarModule {}
