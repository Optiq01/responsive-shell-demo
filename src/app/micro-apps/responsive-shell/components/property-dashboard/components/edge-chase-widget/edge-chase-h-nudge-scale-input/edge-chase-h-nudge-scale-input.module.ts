import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseHNudgeScaleInputComponent } from './edge-chase-h-nudge-scale-input.component';
import { MtSizeModule } from 'src/app/fields/inputs/primatives/mt-size/mt-size.module';



@NgModule({
  declarations: [
    EdgeChaseHNudgeScaleInputComponent
  ],
  imports: [
    CommonModule,
    MtSizeModule
  ],
  exports: [
    CommonModule,
    EdgeChaseHNudgeScaleInputComponent
  ],
  bootstrap: [EdgeChaseHNudgeScaleInputComponent]
})
export class EdgeChaseHNudgeScaleInputModule { }
