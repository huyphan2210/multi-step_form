import { Component, OnInit } from '@angular/core';
import { FormStateService } from 'src/state-service/form.state-service';

@Component({
  selector: 'thank-you-content',
  templateUrl: './thank-you-content.component.html',
  styleUrls: ['./thank-you-content.component.scss'],
})
export class ThankYouContentComponent implements OnInit {
  constructor(private formStateService: FormStateService) {}
  isSubmitingForm = false;
  ngOnInit() {
    this.isSubmitingForm = true;
    this.formStateService.submitForm().finally(() => {
      this.isSubmitingForm = false;
    });
  }
}
