import axios from 'axios';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { serviceOptions } from 'src/swagger/api';

import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { FormComponent } from 'src/components/Form/form.component';
import { StepperComponent } from 'src/components/Stepper/stepper.component';
import { StepBarModule } from 'src/components/StepBar/step-bar.module';
import { StepStateService } from 'src/state-service/step-state.service';

@NgModule({
  declarations: [AppComponent, FormComponent, StepperComponent],
  imports: [BrowserModule, HttpClientModule, StepBarModule],
  providers: [StepStateService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    serviceOptions.axios = axios.create({
      baseURL: environment.baseUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
}
