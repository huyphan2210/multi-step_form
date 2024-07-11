import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import AddOnAPI from 'src/api/add-on.api';
import { AddOnsStateService } from 'src/state-service/add-ons.state-service';
import { PersonalInfoFormControls } from 'src/state-service/form.state-service';
import { AddOn } from 'src/swagger/api';

@Component({
  selector: 'add-on-content',
  templateUrl: './add-on-content.component.html',
  styleUrls: ['./add-on-content.component.scss'],
})
export class AddOnContentComponent implements OnInit {
  @Input() form!: FormGroup<PersonalInfoFormControls>;

  addOns: AddOn[] = [];

  constructor(private addOnsStateService: AddOnsStateService) {
    this.addOnsStateService.getAddOnsState().subscribe((addOns) => {
      this.addOns = addOns;
    });
  }

  ngOnInit() {
    if (this.addOns.length === 0) {
      this.addOnsStateService.getAddOns();
    }
  }
}
