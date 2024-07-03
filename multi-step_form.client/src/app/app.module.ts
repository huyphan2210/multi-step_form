import axios from 'axios';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { serviceOptions } from 'src/swagger/api';

import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { StepperComponent } from 'src/components/Stepper/stepper.component';
import { StepBarModule } from 'src/components/StepBar/step-bar.module';
import { StepStateService } from 'src/state-service/step-state.service';
import { FormModule } from 'src/components/Form/form.module';

@NgModule({
  declarations: [AppComponent, StepperComponent],
  imports: [BrowserModule, HttpClientModule, StepBarModule, FormModule],
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
