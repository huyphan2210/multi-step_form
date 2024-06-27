import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from 'src/components/Form/form.component';
import { StepBarComponent } from 'src/components/StepBar/step-bar.component';
import { StepperComponent } from 'src/components/Stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    StepBarComponent,
    FormComponent,
    StepperComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
