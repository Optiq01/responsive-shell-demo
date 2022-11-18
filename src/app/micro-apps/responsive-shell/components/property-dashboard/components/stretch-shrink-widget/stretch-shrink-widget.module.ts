import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkWidgetComponent } from './stretch-shrink-widget.component';
import { StretchShrinkWStartInputModule } from './stretch-shrink-w-start-input/stretch-shrink-w-start-input.module';
import { StretchShrinkWSpeedInputModule } from './stretch-shrink-w-speed-input/stretch-shrink-w-speed-input.module';
import { StretchShrinkWMinInputModule } from './stretch-shrink-w-min-input/stretch-shrink-w-min-input.module';
import { StretchShrinkWMinNudgeAmountInputModule } from './stretch-shrink-w-min-nudge-amount-input/stretch-shrink-w-min-nudge-amount-input.module';
import { StretchShrinkWMinNudgeScaleInputModule } from './stretch-shrink-w-min-nudge-scale-input/stretch-shrink-w-min-nudge-scale-input.module';
import { StretchShrinkHStartInputModule } from './stretch-shrink-h-start-input/stretch-shrink-h-start-input.module';
import { StretchShrinkHSpeedInputModule } from './stretch-shrink-h-speed-input/stretch-shrink-h-speed-input.module';
import { StretchShrinkHMinInputModule } from './stretch-shrink-h-min-input/stretch-shrink-h-min-input.module';
import { StretchShrinkHMinNudgeAmountInputModule } from './stretch-shrink-h-min-nudge-amount-input/stretch-shrink-h-min-nudge-amount-input.module';
import { StretchShrinkHMinNudgeScaleInputModule } from './stretch-shrink-h-min-nudge-scale-input/stretch-shrink-h-min-nudge-scale-input.module';
import { SrcryFieldModule } from '../srcry-field/srcry-field.module';



@NgModule({
  declarations: [
    StretchShrinkWidgetComponent
  ],
  imports: [
    CommonModule,
    SrcryFieldModule,
    StretchShrinkWStartInputModule,
    StretchShrinkWSpeedInputModule,
    StretchShrinkWMinInputModule,
    StretchShrinkWMinNudgeAmountInputModule,
    StretchShrinkWMinNudgeScaleInputModule,
    StretchShrinkHStartInputModule,
    StretchShrinkHSpeedInputModule,
    StretchShrinkHMinInputModule,
    StretchShrinkHMinNudgeAmountInputModule,
    StretchShrinkHMinNudgeScaleInputModule
  ],
  exports: [
    CommonModule,
    StretchShrinkWidgetComponent
  ],
  bootstrap: [StretchShrinkWidgetComponent]
})
export class StretchShrinkWidgetModule { }
