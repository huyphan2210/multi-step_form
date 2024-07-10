import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlanStateService } from 'src/state-service/plan-state.service';
import { Plan } from 'src/swagger/api';
import {
  PersonalInfoFormControls,
  PriceType,
} from 'src/state-service/form-state.service';

@Component({
  selector: 'plan-content',
  templateUrl: './plan-content.component.html',
  styleUrls: ['./plan-content.component.scss'],
})
export class PlanContentComponent implements OnInit {
  @Input() form!: FormGroup<PersonalInfoFormControls>;

  isLoadingContent = false;
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
      this.isLoadingContent = true;
      this.planStateService
        .getPlans()
        .finally(() => (this.isLoadingContent = false));
    }

    const currentPriceTypeValue = this.form.get('currentPriceType')?.value;
    if (currentPriceTypeValue) {
      this.currentPriceType = currentPriceTypeValue as PriceType;
    }
  }

  changePlanType() {
    if (this.currentPriceType === 'month') {
      this.currentPriceType = 'year';
    } else {
      this.currentPriceType = 'month';
    }
    this.form.patchValue({ currentPriceType: this.currentPriceType });
  }
}
