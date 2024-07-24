import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddOnsStateService } from 'src/state-service/add-ons.state-service';
import {
  PersonalInfoFormControls,
  personalInfoKeys,
} from 'src/state-service/form.state-service';
import { PlanStateService } from 'src/state-service/plan.state-service';
import { Step, StepStateService } from 'src/state-service/step.state-service';
import { AddOn, Plan, PriceType } from 'src/swagger/api';

@Component({
  selector: 'confirm-content',
  templateUrl: './confirm-content.component.html',
  styleUrls: ['./confirm-content.component.scss'],
})
export class ConfirmContentComponent implements OnInit {
  constructor(
    private planStateService: PlanStateService,
    private addOnsStateService: AddOnsStateService,
    private stepStateService: StepStateService
  ) {}

  @Input() form!: FormGroup<PersonalInfoFormControls>;

  currentPlan!: Plan;
  currentAddOns: AddOn[] = [];
  currentPriceType: PriceType = 0;
  currentTotalPrice = 0;

  updateTotalPrice() {
    let addOnsPrice = 0;
    switch (this.currentPriceType) {
      case 0:
        addOnsPrice = this.currentAddOns
          .map((addOn) => addOn.monthlyPrice!)
          .reduce((prevPrice, nextPrice) => prevPrice + nextPrice);
        this.currentTotalPrice = this.currentPlan.monthlyPrice! + addOnsPrice;
        break;
      case 1:
        addOnsPrice = this.currentAddOns
          .map((addOn) => addOn.yearlyPrice!)
          .reduce((prevPrice, nextPrice) => prevPrice + nextPrice);
        this.currentTotalPrice = this.currentPlan.yearlyPrice! + addOnsPrice;
        break;
    }
  }

  returnToPlanPage() {
    this.stepStateService.setStepState(Step.SelectPlan);
  }

  ngOnInit() {
    this.currentPriceType = this.form.get(
      personalInfoKeys.currentPriceType
    )?.value;
    this.planStateService.getPlanState().subscribe((plans) => {
      const planIdControl = this.form.get(personalInfoKeys.planId);
      this.currentPlan =
        plans.find((plan) => plan.id === planIdControl!.value) ?? plans[0];
    });

    this.addOnsStateService.getAddOnsState().subscribe((addOns) => {
      const addOnsIdControl = this.form.get(personalInfoKeys.addOnIds);
      this.currentAddOns = addOns.filter((addOn) => {
        const addOnIds = addOnsIdControl?.value as string[];
        return addOnIds.includes(addOn.id!);
      });
    });

    this.updateTotalPrice();
  }
}
