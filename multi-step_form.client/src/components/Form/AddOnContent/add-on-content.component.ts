import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import AddOnAPI from 'src/api/add-on.api';
import { AddOnsStateService } from 'src/state-service/add-ons.state-service';
import {
  PersonalInfoFormControls,
  personalInfoKeys,
} from 'src/state-service/form.state-service';
import { PlanStateService } from 'src/state-service/plan.state-service';
import { AddOn, PriceType } from 'src/swagger/api';

@Component({
  selector: 'add-on-content',
  templateUrl: './add-on-content.component.html',
  styleUrls: ['./add-on-content.component.scss'],
})
export class AddOnContentComponent implements OnInit {
  @Input() form!: FormGroup<PersonalInfoFormControls>;

  addOns: AddOn[] = [];
  isLoadingContent = false;
  currentPriceType: PriceType = 0;

  constructor(
    private addOnsStateService: AddOnsStateService,
    private planStateService: PlanStateService
  ) {
    this.addOnsStateService.getAddOnsState().subscribe((addOns) => {
      this.addOns = addOns;
    });
    this.planStateService.getPriceTypeState().subscribe((priceType) => {
      this.currentPriceType = priceType;
    });
  }

  ngOnInit() {
    if (this.addOns.length === 0) {
      this.isLoadingContent = true;
      this.addOnsStateService
        .getAddOns()
        .finally(() => (this.isLoadingContent = false));
    }
  }

  isAddOnActive(id: string) {
    const addOns = this.form.get(personalInfoKeys.addOnIds)?.value as string[];
    const isAddOnActive = addOns.includes(id);
    return isAddOnActive;
  }
}
