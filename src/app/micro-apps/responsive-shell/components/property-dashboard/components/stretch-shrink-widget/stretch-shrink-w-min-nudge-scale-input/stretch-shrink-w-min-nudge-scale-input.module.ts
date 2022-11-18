import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkWMinNudgeScaleInputComponent } from './stretch-shrink-w-min-nudge-scale-input.component';
import { MtSizeModule } from 'src/app/fields/inputs/primatives/mt-size/mt-size.module';



@NgModule({
  declarations: [
    StretchShrinkWMinNudgeScaleInputComponent
  ],
  imports: [
    CommonModule,
    MtSizeModule
  ],
  exports: [
    CommonModule,
    StretchShrinkWMinNudgeScaleInputComponent
  ],
  bootstrap: [StretchShrinkWMinNudgeScaleInputComponent]
})
export class StretchShrinkWMinNudgeScaleInputModule { }
