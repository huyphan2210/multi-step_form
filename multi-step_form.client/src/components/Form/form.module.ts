import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PlanContentModule } from './PlanContent/plan-content.module';

import { PersonalInfoContentComponent } from './PersonalInfoContent/personal-info-content.component';
import { AddOnContentComponent } from './AddOnContent/add-on-content.component';
import { ThankYouContentComponent } from './ThankYouContent/thank-you-content.component';
import { ConfirmContentComponent } from './ConfirmContent/confirm-content.component';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [
    FormComponent,
    PersonalInfoContentComponent,
    AddOnContentComponent,
    ConfirmContentComponent,
    ThankYouContentComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, PlanContentModule],
  exports: [FormComponent],
})
export class FormModule {}
