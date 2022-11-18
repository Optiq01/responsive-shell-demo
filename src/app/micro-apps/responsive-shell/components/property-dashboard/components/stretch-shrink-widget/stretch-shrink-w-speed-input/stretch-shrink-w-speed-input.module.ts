import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkWSpeedInputComponent } from './stretch-shrink-w-speed-input.component';



@NgModule({
  declarations: [
    StretchShrinkWSpeedInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    StretchShrinkWSpeedInputComponent
  ],
  bootstrap: [StretchShrinkWSpeedInputComponent]
})
export class StretchShrinkWSpeedInputModule { }
