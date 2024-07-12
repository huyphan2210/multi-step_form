import { NgModule } from '@angular/core';
import { AddOnContentComponent } from './add-on-content.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from '../Loading/loading.module';
import { AddOnComponent } from './AddOn/add-on.component';

@NgModule({
  declarations: [AddOnContentComponent, AddOnComponent],
  imports: [CommonModule, ReactiveFormsModule, LoadingModule],
  exports: [AddOnContentComponent],
})
export class AddOnContentModule {}
