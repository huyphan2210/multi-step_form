import { NgModule } from '@angular/core';
import { PlanComponent } from './Plan/plan.component';
import { PlanContentComponent } from './plan-content.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from '../Loading/loading.component';

@NgModule({
  declarations: [PlanComponent, PlanContentComponent, LoadingComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PlanContentComponent],
})
export class PlanContentModule {}
