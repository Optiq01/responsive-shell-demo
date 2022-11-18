import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkHMinNudgeAmountInputComponent } from './stretch-shrink-h-min-nudge-amount-input.component';
import { NudgeAmountModule } from 'src/app/fields/inputs/primatives/nudge-amount/nudge-amount.module';



@NgModule({
  declarations: [
    StretchShrinkHMinNudgeAmountInputComponent
  ],
  imports: [
    CommonModule,
    NudgeAmountModule
  ],
  exports: [
    CommonModule,
    StretchShrinkHMinNudgeAmountInputComponent
  ],
  bootstrap:[StretchShrinkHMinNudgeAmountInputComponent]
})
export class StretchShrinkHMinNudgeAmountInputModule { }
