import { NgModule } from '@angular/core';
import { PersonalInfoContentComponent } from './personal-info-content.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from '../Loading/loading.module';

@NgModule({
  declarations: [PersonalInfoContentComponent],
  imports: [CommonModule, ReactiveFormsModule, LoadingModule],
  exports: [PersonalInfoContentComponent],
})
export class PersonalInfoContentModule {}
