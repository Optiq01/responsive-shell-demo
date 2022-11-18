import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseWNudgeAmountInputComponent } from './edge-chase-w-nudge-amount-input.component';
import { NudgeAmountModule } from 'src/app/fields/inputs/primatives/nudge-amount/nudge-amount.module';



@NgModule({
  declarations: [
    EdgeChaseWNudgeAmountInputComponent
  ],
  imports: [
    CommonModule,
    NudgeAmountModule
  ],
  exports: [
    CommonModule,
    EdgeChaseWNudgeAmountInputComponent
  ],
  bootstrap: [EdgeChaseWNudgeAmountInputComponent]
})
export class EdgeChaseWNudgeAmountInputModule { }
