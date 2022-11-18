import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeWNudgeAmountInputComponent } from './base-size-w-nudge-amount-input.component';
import { NudgeAmountModule } from 'src/app/fields/inputs/primatives/nudge-amount/nudge-amount.module';



@NgModule({
  declarations: [
    BaseSizeWNudgeAmountInputComponent
  ],
  imports: [
    CommonModule,
    NudgeAmountModule,
  ],
  exports: [
    CommonModule,
    NudgeAmountModule,
    BaseSizeWNudgeAmountInputComponent
  ],
  bootstrap:[BaseSizeWNudgeAmountInputComponent]
})
export class BaseSizeWNudgeAmountInputModule { }
