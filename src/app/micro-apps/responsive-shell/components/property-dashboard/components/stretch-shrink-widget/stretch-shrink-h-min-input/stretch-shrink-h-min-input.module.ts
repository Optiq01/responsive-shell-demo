import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkHMinInputComponent } from './stretch-shrink-h-min-input.component';
import { MtSizeModule } from 'src/app/fields/inputs/primatives/mt-size/mt-size.module';



@NgModule({
  declarations: [
  
    StretchShrinkHMinInputComponent
  ],
  imports: [
    CommonModule,
    MtSizeModule
  ],
  exports: [
    CommonModule,
    StretchShrinkHMinInputComponent
  ],
  bootstrap:[StretchShrinkHMinInputComponent]
})
export class StretchShrinkHMinInputModule { }
