import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaseStopHNudgeAmountInputComponent } from './chase-stop-h-nudge-amount-input.component';
import { NudgeAmountModule } from 'src/app/fields/inputs/primatives/nudge-amount/nudge-amount.module';



@NgModule({
  declarations: [
    ChaseStopHNudgeAmountInputComponent
  ],
  imports: [
    CommonModule,
    NudgeAmountModule
  ],
  exports: [
    CommonModule,
    ChaseStopHNudgeAmountInputComponent
  ],
  bootstrap: [ChaseStopHNudgeAmountInputComponent]
})
export class ChaseStopHNudgeAmountInputModule { }
