import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaseStopWNudgeAmountInputComponent } from './chase-stop-w-nudge-amount-input.component';
import { NudgeAmountModule } from 'src/app/fields/inputs/primatives/nudge-amount/nudge-amount.module';



@NgModule({
  declarations: [
    ChaseStopWNudgeAmountInputComponent
  ],
  imports: [
    CommonModule,
    NudgeAmountModule
  ],
  exports: [
    CommonModule,
    ChaseStopWNudgeAmountInputComponent
  ],
  bootstrap: [ChaseStopWNudgeAmountInputComponent]
})
export class ChaseStopWNudgeAmountInputModule { }
