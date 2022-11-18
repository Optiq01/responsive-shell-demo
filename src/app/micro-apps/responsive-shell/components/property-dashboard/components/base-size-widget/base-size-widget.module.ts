import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeWidgetComponent } from './base-size-widget.component';
import { SrcryFieldModule } from '../srcry-field/srcry-field.module';
import { ParamOutputModule } from '../param-output/param-output.module';
import { BaseSizeOutputModule } from './base-size-output/base-size-output.module';
import { BaseSizeWInputModule } from './base-size-w-input/base-size-w-input.module';
import { BaseSizeWNudgeScaleInputModule } from './base-size-w-nudge-scale-input/base-size-w-nudge-scale-input.module';
import { BaseSizeWNudgeAmountInputModule } from './base-size-w-nudge-amount-input/base-size-w-nudge-amount-input.module';
import { BaseSizeHInputModule } from './base-size-h-input/base-size-h-input.module';
import { BaseSizeHNudgeScaleInputModule } from './base-size-h-nudge-scale-input/base-size-h-nudge-scale-input.module';
import { BaseSizeHNudgeAmountInputModule } from './base-size-h-nudge-amount-input/base-size-h-nudge-amount-input.module';



@NgModule({
  declarations: [
    BaseSizeWidgetComponent
  ],
  imports: [
    CommonModule,
    SrcryFieldModule,
    ParamOutputModule,
    BaseSizeOutputModule,
    BaseSizeWInputModule,
    BaseSizeWNudgeScaleInputModule,
    BaseSizeWNudgeAmountInputModule,
    BaseSizeHInputModule,
    BaseSizeHNudgeScaleInputModule,
    BaseSizeHNudgeAmountInputModule
  ],
  exports: [
    CommonModule,
    BaseSizeWidgetComponent
  ],
  bootstrap: [BaseSizeWidgetComponent]
})
export class BaseSizeWidgetModule { }
