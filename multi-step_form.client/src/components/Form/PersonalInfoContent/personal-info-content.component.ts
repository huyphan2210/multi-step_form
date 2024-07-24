import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  FormStateService,
  PersonalInfoFormControls,
} from 'src/state-service/form.state-service';

@Component({
  selector: 'personal-info-content',
  templateUrl: './personal-info-content.component.html',
  styleUrls: ['./personal-info-content.component.scss'],
})
export class PersonalInfoContentComponent {
  @Input() form!: FormGroup<PersonalInfoFormControls>;

  requiredText = 'This field is required';
  isEmailFetching = false;

  constructor(private formStateService: FormStateService) {
    this.formStateService
      .getEmailFetchingState()
      .subscribe((isEmailFetching) => {
        this.isEmailFetching = isEmailFetching;
      });
  }

  validatePhoneInput(e: KeyboardEvent) {
    const validKeys = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '+',
      'Backspace',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
      'Delete',
      'Tab',
      'Enter',
      'Escape',
    ];
    if (!validKeys.includes(e.key)) {
      e.preventDefault();
      return;
    }
  }
}
