import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthHMaxNudgeScaleInputComponent } from './squish-growth-h-max-nudge-scale-input.component';
import { MtSizeModule } from 'src/app/fields/inputs/primatives/mt-size/mt-size.module';



@NgModule({
  declarations: [
    SquishGrowthHMaxNudgeScaleInputComponent
  ],
  imports: [
    CommonModule,
    MtSizeModule
  ],
  exports: [
    CommonModule,
    SquishGrowthHMaxNudgeScaleInputComponent
  ],
  bootstrap: [SquishGrowthHMaxNudgeScaleInputComponent]
})
export class SquishGrowthHMaxNudgeScaleInputModule { }
