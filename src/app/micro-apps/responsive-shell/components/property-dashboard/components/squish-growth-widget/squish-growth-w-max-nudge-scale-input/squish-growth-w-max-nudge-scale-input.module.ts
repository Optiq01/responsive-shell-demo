import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthWMaxNudgeScaleInputComponent } from './squish-growth-w-max-nudge-scale-input.component';
import { MtSizeModule } from 'src/app/fields/inputs/primatives/mt-size/mt-size.module';



@NgModule({
  declarations: [
    SquishGrowthWMaxNudgeScaleInputComponent
  ],
  imports: [
    CommonModule,
    MtSizeModule
  ],
  exports: [
    CommonModule,
    SquishGrowthWMaxNudgeScaleInputComponent
  ],
  bootstrap: [SquishGrowthWMaxNudgeScaleInputComponent]
})
export class SquishGrowthWMaxNudgeScaleInputModule { }
