import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthHMaxNudgeAmountInputComponent } from './squish-growth-h-max-nudge-amount-input.component';
import { NudgeAmountModule } from 'src/app/fields/inputs/primatives/nudge-amount/nudge-amount.module';



@NgModule({
  declarations: [
    SquishGrowthHMaxNudgeAmountInputComponent
  ],
  imports: [
    CommonModule,
    NudgeAmountModule
  ],
  exports: [
    CommonModule,
    SquishGrowthHMaxNudgeAmountInputComponent
  ],
  bootstrap: [SquishGrowthHMaxNudgeAmountInputComponent]
})
export class SquishGrowthHMaxNudgeAmountInputModule { }
