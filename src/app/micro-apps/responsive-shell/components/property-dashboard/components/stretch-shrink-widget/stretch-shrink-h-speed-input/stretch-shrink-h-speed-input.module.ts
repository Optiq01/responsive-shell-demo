import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkHSpeedInputComponent } from './stretch-shrink-h-speed-input.component';



@NgModule({
  declarations: [
    StretchShrinkHSpeedInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    StretchShrinkHSpeedInputComponent
  ],
  bootstrap:[StretchShrinkHSpeedInputComponent]
})
export class StretchShrinkHSpeedInputModule { }
