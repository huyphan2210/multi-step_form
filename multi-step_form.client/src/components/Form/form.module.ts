import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { CommonModule } from '@angular/common';
import { PersonalInfoContentComponent } from './PersonalInfoContent/personal-info-content.component';
import { PlanContentComponent } from './PlanContent/plan-content.component';
import { AddOnContentComponent } from './AddOnContent/add-on-content.component';
import { ThankYouContentComponent } from './ThankYouContent/thank-you-content.component';

@NgModule({
  declarations: [
    FormComponent,
    PersonalInfoContentComponent,
    PlanContentComponent,
    AddOnContentComponent,
    ThankYouContentComponent,
  ],
  imports: [CommonModule],
  exports: [FormComponent],
})
export class FormModule {}
