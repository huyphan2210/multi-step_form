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
export class AddOnComponent {
  @Input() form!: FormGroup<PersonalInfoFormControls>;
  @Input() addOn!: AddOn;
  @Input() isActive: boolean = false;
  @Input() currentPriceType!: PriceType;

  handleAddOn(e: MouseEvent) {
    const checkBox = e.currentTarget as HTMLInputElement;
    const addOnControl = this.form.get(personalInfoKeys.addOnIds);
    const addOnIds = addOnControl?.value as string[];
    const index = addOnIds.indexOf(this.addOn.id!);

    if (addOnControl?.value && index === -1) {
      addOnControl?.patchValue([...addOnControl.value, this.addOn.id]);
    } else if (addOnControl?.value && index > -1) {
      addOnIds.splice(index, 1);
      addOnControl?.patchValue(addOnIds);
      checkBox.checked = false;
    }
  }
}
