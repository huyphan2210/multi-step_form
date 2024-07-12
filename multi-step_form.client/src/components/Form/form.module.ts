import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PlanContentModule } from './PlanContent/plan-content.module';

import { PersonalInfoContentComponent } from './PersonalInfoContent/personal-info-content.component';
import { ThankYouContentComponent } from './ThankYouContent/thank-you-content.component';
import { ConfirmContentComponent } from './ConfirmContent/confirm-content.component';
import { FormComponent } from './form.component';
import { AddOnContentModule } from './AddOnContent/add-on-content.module';

@NgModule({
  declarations: [
    FormComponent,
    PersonalInfoContentComponent,
    ConfirmContentComponent,
    ThankYouContentComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlanContentModule,
    AddOnContentModule,
  ],
  exports: [FormComponent],
})
export class FormModule {}
