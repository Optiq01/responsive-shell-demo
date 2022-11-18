import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaseStopWNudgeScaleInputComponent } from './chase-stop-w-nudge-scale-input.component';
import { MtSizeModule } from 'src/app/fields/inputs/primatives/mt-size/mt-size.module';



@NgModule({
  declarations: [
    ChaseStopWNudgeScaleInputComponent
  ],
  imports: [
    CommonModule,
    MtSizeModule
  ],
  exports: [
    CommonModule,
    ChaseStopWNudgeScaleInputComponent
  ],
  bootstrap: [ChaseStopWNudgeScaleInputComponent]
})
export class ChaseStopWNudgeScaleInputModule { }
