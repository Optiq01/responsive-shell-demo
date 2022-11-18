import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineSizeInputComponent } from './line-size-input.component';
import { LineSizeModule } from '../primatives/line-size/line-size.module';
import { LineSpeedModule } from '../primatives/line-speed/line-speed.module';



@NgModule({
  declarations: [
    LineSizeInputComponent
  ],
  imports: [
    CommonModule,
    LineSizeModule,
    LineSpeedModule
  ],
  exports: [
    CommonModule,
    LineSizeModule,
    LineSpeedModule,
    LineSizeInputComponent
  ],
  bootstrap: [LineSizeInputComponent]
})
export class LineSizeInputModule { }
