import { NgModule } from '@angular/core';
import { PlanComponent } from './Plan/plan.component';
import { PlanContentComponent } from './plan-content.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from '../Loading/loading.module';

@NgModule({
  declarations: [PlanComponent, PlanContentComponent],
  imports: [CommonModule, ReactiveFormsModule, LoadingModule],
  exports: [PlanContentComponent],
})
export class PlanContentModule {}
