import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  PersonalInfoFormControls,
  personalInfoKeys,
} from 'src/state-service/form.state-service';
import { AddOn, PriceType } from 'src/swagger/api';

@Component({
  selector: 'add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.scss'],
})
export class AddOnComponent implements OnInit {
  @Input() form!: FormGroup<PersonalInfoFormControls>;
  @Input() addOn!: AddOn;
  @Input() isActive: boolean = false;

  currentPriceType: PriceType = 0;

  ngOnInit(): void {
    this.currentPriceType = this.form.get('currentPriceType')?.value ?? 0;
  }

  handleAddOn(e: Event) {
    const checkBox = e.currentTarget as HTMLInputElement;
    const addOnControl = this.form.get(personalInfoKeys.addOnIds);
    if (checkBox.checked && addOnControl?.value) {
      addOnControl?.patchValue([...addOnControl.value, this.addOn.id]);
    } else if (!checkBox.checked && addOnControl?.value) {
      const addOnIds = addOnControl.value as string[];
      const index = addOnIds.indexOf(this.addOn.id!);
      if (index > -1) {
        addOnIds.slice(index);
      }
    }
  }
}
