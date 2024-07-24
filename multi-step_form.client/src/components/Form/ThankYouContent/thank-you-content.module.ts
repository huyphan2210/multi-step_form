import { NgModule } from '@angular/core';
import { ThankYouContentComponent } from './thank-you-content.component';
import { CommonModule } from '@angular/common';
import { LoadingModule } from '../Loading/loading.module';
@NgModule({
  declarations: [ThankYouContentComponent],
  imports: [CommonModule, LoadingModule],
  exports: [ThankYouContentComponent],
})
export class ThankYouContentModule {}
