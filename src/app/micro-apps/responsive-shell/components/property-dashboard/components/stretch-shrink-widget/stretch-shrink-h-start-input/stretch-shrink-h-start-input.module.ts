import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkHStartInputComponent } from './stretch-shrink-h-start-input.component';



@NgModule({
  declarations: [
    StretchShrinkHStartInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    StretchShrinkHStartInputComponent
  ],
  bootstrap:[StretchShrinkHStartInputComponent]
})
export class StretchShrinkHStartInputModule { }
