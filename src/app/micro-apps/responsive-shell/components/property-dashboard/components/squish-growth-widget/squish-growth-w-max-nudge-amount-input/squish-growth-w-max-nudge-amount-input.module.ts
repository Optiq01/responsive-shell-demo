import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthWMaxNudgeAmountInputComponent } from './squish-growth-w-max-nudge-amount-input.component';
import { NudgeAmountModule } from 'src/app/fields/inputs/primatives/nudge-amount/nudge-amount.module';



@NgModule({
  declarations: [
    SquishGrowthWMaxNudgeAmountInputComponent
  ],
  imports: [
    CommonModule,
    NudgeAmountModule
  ],
  exports: [
    CommonModule,
    SquishGrowthWMaxNudgeAmountInputComponent
  ],
  bootstrap: [SquishGrowthWMaxNudgeAmountInputComponent]
})
export class SquishGrowthWMaxNudgeAmountInputModule { }
