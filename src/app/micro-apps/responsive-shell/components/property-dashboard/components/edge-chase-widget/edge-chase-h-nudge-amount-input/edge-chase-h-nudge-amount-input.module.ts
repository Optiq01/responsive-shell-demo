import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseHNudgeAmountInputComponent } from './edge-chase-h-nudge-amount-input.component';
import { NudgeAmountModule } from 'src/app/fields/inputs/primatives/nudge-amount/nudge-amount.module';



@NgModule({
  declarations: [
    EdgeChaseHNudgeAmountInputComponent
  ],
  imports: [
    CommonModule,
    NudgeAmountModule
  ],
  exports: [
    CommonModule,
    EdgeChaseHNudgeAmountInputComponent
  ],
  bootstrap: [EdgeChaseHNudgeAmountInputComponent]
})
export class EdgeChaseHNudgeAmountInputModule { }
