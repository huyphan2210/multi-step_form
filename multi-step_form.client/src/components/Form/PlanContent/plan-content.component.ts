import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlanStateService } from 'src/state-service/plan.state-service';
import { Plan, PriceType } from 'src/swagger/api';
import { PersonalInfoFormControls } from 'src/state-service/form.state-service';

@Component({
  selector: 'plan-content',
  templateUrl: './plan-content.component.html',
  styleUrls: ['./plan-content.component.scss'],
})
export class PlanContentComponent implements OnInit {
  @Input() form!: FormGroup<PersonalInfoFormControls>;

  isLoadingContent = false;
  plans: Plan[] = [];
  currentPriceType: PriceType = 0;

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
    this.planStateService.changePriceType();
    this.form.patchValue({ currentPriceType: this.currentPriceType });
  }
}
