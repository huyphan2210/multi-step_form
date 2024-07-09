import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  PersonalInfoFormControls,
  PriceType,
} from 'src/state-service/form-state.service';
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
  @Input() isCurrentPlan: boolean = false;
}
