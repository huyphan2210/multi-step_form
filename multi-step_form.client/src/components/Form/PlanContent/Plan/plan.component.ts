import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonalInfoFormControls } from 'src/state-service/form-state.service';
import { PriceType } from 'src/state-service/plan-state.service';
import { Plan } from 'src/swagger/api';

@Component({
  selector: 'plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent {
  @Input() form!: FormGroup<PersonalInfoFormControls>;
  @Input() plan!: Plan;
  @Input() priceType: PriceType = 'month';

  setPlan() {
    console.log(this.form.get('planId')?.value);
  }
}
