import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaseStopHNudgeScaleInputComponent } from './chase-stop-h-nudge-scale-input.component';
import { MtSizeModule } from 'src/app/fields/inputs/primatives/mt-size/mt-size.module';



@NgModule({
  declarations: [
    ChaseStopHNudgeScaleInputComponent
  ],
  imports: [
    CommonModule,
    MtSizeModule
  ],
  exports: [
    CommonModule,
    ChaseStopHNudgeScaleInputComponent
  ],
  bootstrap: [ChaseStopHNudgeScaleInputComponent]
})
export class ChaseStopHNudgeScaleInputModule { }
