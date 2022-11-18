import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeWNudgeScaleInputComponent } from './base-size-w-nudge-scale-input.component';
import { MtSizeModule } from 'src/app/fields/inputs/primatives/mt-size/mt-size.module';



@NgModule({
  declarations: [
    BaseSizeWNudgeScaleInputComponent
  ],
  imports: [
    CommonModule,
    MtSizeModule
  ],
  exports: [
    CommonModule,
    BaseSizeWNudgeScaleInputComponent
  ],
  bootstrap: [BaseSizeWNudgeScaleInputComponent]
})
export class BaseSizeWNudgeScaleInputModule { }
