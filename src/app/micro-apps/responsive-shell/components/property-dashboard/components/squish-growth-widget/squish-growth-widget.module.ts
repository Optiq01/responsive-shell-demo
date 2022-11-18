import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthWidgetComponent } from './squish-growth-widget.component';
import { SquishGrowthWStartInputModule } from './squish-growth-w-start-input/squish-growth-w-start-input.module';
import { SquishGrowthHStartInputModule } from './squish-growth-h-start-input/squish-growth-h-start-input.module';
import { SquishGrowthWSpeedInputModule } from './squish-growth-w-speed-input/squish-growth-w-speed-input.module';
import { SquishGrowthHSpeedInputModule } from './squish-growth-h-speed-input/squish-growth-h-speed-input.module';
import { SquishGrowthWMaxInputModule } from './squish-growth-w-max-input/squish-growth-w-max-input.module';
import { SquishGrowthHMaxInputModule } from './squish-growth-h-max-input/squish-growth-h-max-input.module';
import { SquishGrowthWMaxNudgeScaleInputModule } from './squish-growth-w-max-nudge-scale-input/squish-growth-w-max-nudge-scale-input.module';
import { SquishGrowthHMaxNudgeScaleInputModule } from './squish-growth-h-max-nudge-scale-input/squish-growth-h-max-nudge-scale-input.module';
import { SquishGrowthWMaxNudgeAmountInputModule } from './squish-growth-w-max-nudge-amount-input/squish-growth-w-max-nudge-amount-input.module';
import { SquishGrowthHMaxNudgeAmountInputModule } from './squish-growth-h-max-nudge-amount-input/squish-growth-h-max-nudge-amount-input.module';
import { SrcryFieldModule } from '../srcry-field/srcry-field.module';



@NgModule({
  declarations: [
    SquishGrowthWidgetComponent
  ],
  imports: [
    CommonModule,
    SrcryFieldModule,
    SquishGrowthWStartInputModule,
    SquishGrowthHStartInputModule,
    SquishGrowthWSpeedInputModule,
    SquishGrowthHSpeedInputModule,
    SquishGrowthWMaxInputModule,
    SquishGrowthHMaxInputModule,
    SquishGrowthWMaxNudgeScaleInputModule,
    SquishGrowthHMaxNudgeScaleInputModule,
    SquishGrowthWMaxNudgeAmountInputModule,
    SquishGrowthHMaxNudgeAmountInputModule
  ],
  exports: [
    CommonModule,
    SquishGrowthWidgetComponent
  ],
  bootstrap: [SquishGrowthWidgetComponent]
})
export class SquishGrowthWidgetModule { }
