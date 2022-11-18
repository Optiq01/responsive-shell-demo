import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseWidgetComponent } from './edge-chase-widget.component';
import { EdgeChaseWInputModule } from './edge-chase-w-input/edge-chase-w-input.module';
import { EdgeChaseWNudgeScaleInputModule } from './edge-chase-w-nudge-scale-input/edge-chase-w-nudge-scale-input.module';
import { EdgeChaseWNudgeAmountInputModule } from './edge-chase-w-nudge-amount-input/edge-chase-w-nudge-amount-input.module';
import { EdgeChaseHInputModule } from './edge-chase-h-input/edge-chase-h-input.module';
import { EdgeChaseHNudgeScaleInputModule } from './edge-chase-h-nudge-scale-input/edge-chase-h-nudge-scale-input.module';
import { EdgeChaseHNudgeAmountInputModule } from './edge-chase-h-nudge-amount-input/edge-chase-h-nudge-amount-input.module';
import { SrcryFieldModule } from '../srcry-field/srcry-field.module';



@NgModule({
  declarations: [
    EdgeChaseWidgetComponent
  ],
  imports: [
    CommonModule,
    SrcryFieldModule,
    EdgeChaseWInputModule,
    EdgeChaseWNudgeScaleInputModule,
    EdgeChaseWNudgeAmountInputModule,
    EdgeChaseHInputModule,
    EdgeChaseHNudgeScaleInputModule,
    EdgeChaseHNudgeAmountInputModule
  ],
  exports: [
    CommonModule,
    EdgeChaseWidgetComponent
  ],
  bootstrap:[EdgeChaseWidgetComponent]
})
export class EdgeChaseWidgetModule { }
