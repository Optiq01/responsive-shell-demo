import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkWMinNudgeAmountInputComponent } from './stretch-shrink-w-min-nudge-amount-input.component';
import { NudgeAmountModule } from 'src/app/fields/inputs/primatives/nudge-amount/nudge-amount.module';



@NgModule({
  declarations: [
    StretchShrinkWMinNudgeAmountInputComponent
  ],
  imports: [
    CommonModule,
    NudgeAmountModule
  ],
  exports: [
    CommonModule,
    StretchShrinkWMinNudgeAmountInputComponent
  ],
  bootstrap: [StretchShrinkWMinNudgeAmountInputComponent]
})
export class StretchShrinkWMinNudgeAmountInputModule { }
