import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  PlanStateService,
  PriceType,
} from 'src/state-service/plan-state.service';
import { Plan } from 'src/swagger/api';
import { PersonalInfoFormControls } from 'src/state-service/form-state.service';

@Component({
  selector: 'plan-content',
  templateUrl: './plan-content.component.html',
  styleUrls: ['./plan-content.component.scss'],
})
export class PlanContentComponent implements OnInit {
  @Input() form!: FormGroup<PersonalInfoFormControls>;

  plans: Plan[] = [];
  currentPriceType: PriceType = 'month';

  constructor(private planStateService: PlanStateService) {
    this.planStateService
      .getPlanState()
      .subscribe((plans) => (this.plans = plans));

    this.planStateService
      .getPriceTypeState()
      .subscribe((priceType) => (this.currentPriceType = priceType));
  }

  ngOnInit() {
    if (this.plans.length === 0) {
      this.planStateService.getPlans();
    }
  }
}
