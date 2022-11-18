import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseWNudgeScaleInputComponent } from './edge-chase-w-nudge-scale-input.component';
import { MtSizeModule } from 'src/app/fields/inputs/primatives/mt-size/mt-size.module';



@NgModule({
  declarations: [
    EdgeChaseWNudgeScaleInputComponent
  ],
  imports: [
    CommonModule,
    MtSizeModule
  ],
  exports: [
    CommonModule,
    EdgeChaseWNudgeScaleInputComponent
  ],
  bootstrap: [EdgeChaseWNudgeScaleInputComponent]
})
export class EdgeChaseWNudgeScaleInputModule { }
