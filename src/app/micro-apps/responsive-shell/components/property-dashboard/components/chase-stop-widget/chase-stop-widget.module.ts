import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaseStopWidgetComponent } from './chase-stop-widget.component';
import { ChaseStopWInputModule } from './chase-stop-w-input/chase-stop-w-input.module';
import { ChaseStopWNudgeScaleInputModule } from './chase-stop-w-nudge-scale-input/chase-stop-w-nudge-scale-input.module';
import { ChaseStopWNudgeAmountInputModule } from './chase-stop-w-nudge-amount-input/chase-stop-w-nudge-amount-input.module';
import { ChaseStopHInputModule } from './chase-stop-h-input/chase-stop-h-input.module';
import { ChaseStopHNudgeScaleInputModule } from './chase-stop-h-nudge-scale-input/chase-stop-h-nudge-scale-input.module';
import { ChaseStopHNudgeAmountInputModule } from './chase-stop-h-nudge-amount-input/chase-stop-h-nudge-amount-input.module';
import { SrcryFieldModule } from '../srcry-field/srcry-field.module';



@NgModule({
  declarations: [
    ChaseStopWidgetComponent
  ],
  imports: [
    CommonModule,
    SrcryFieldModule,
    ChaseStopWInputModule,
    ChaseStopWNudgeScaleInputModule,
    ChaseStopWNudgeAmountInputModule,
    ChaseStopHInputModule,
    ChaseStopHNudgeScaleInputModule,
    ChaseStopHNudgeAmountInputModule
  ],
  exports: [
    CommonModule,
    ChaseStopWidgetComponent
  ],
  bootstrap:[ChaseStopWidgetComponent]
})
export class ChaseStopWidgetModule { }
