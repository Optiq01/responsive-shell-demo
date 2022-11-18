import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkWStartInputComponent } from './stretch-shrink-w-start-input.component';



@NgModule({
  declarations: [
    StretchShrinkWStartInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    StretchShrinkWStartInputComponent
  ],
  bootstrap:[StretchShrinkWStartInputComponent]
})
export class StretchShrinkWStartInputModule { }
