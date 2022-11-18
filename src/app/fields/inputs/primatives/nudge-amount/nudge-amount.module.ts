import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NudgeAmountComponent } from './nudge-amount.component';



@NgModule({
  declarations: [
    NudgeAmountComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    NudgeAmountComponent
  ]
})
export class NudgeAmountModule { }
