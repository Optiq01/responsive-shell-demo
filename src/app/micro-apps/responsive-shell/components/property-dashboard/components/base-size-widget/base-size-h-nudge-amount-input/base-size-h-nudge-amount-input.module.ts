import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeHNudgeAmountInputComponent } from './base-size-h-nudge-amount-input.component';
import { NudgeAmountModule } from 'src/app/fields/inputs/primatives/nudge-amount/nudge-amount.module';



@NgModule({
  declarations: [
    BaseSizeHNudgeAmountInputComponent
  ],
  imports: [
    CommonModule,
    NudgeAmountModule,
  ],
  exports: [
    CommonModule,
    BaseSizeHNudgeAmountInputComponent
  ],
  bootstrap: [ BaseSizeHNudgeAmountInputComponent]
})
export class BaseSizeHNudgeAmountInputModule { }
