import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeInputComponent } from './box-size-input.component';
import { BoxSizeModule } from '../primatives/box-size/box-size.module';
import { BoxScaleModule } from '../primatives/box-scale/box-scale.module';
import { BoxSpeedModule } from '../primatives/box-speed/box-speed.module';



@NgModule({
  declarations: [
    BoxSizeInputComponent
  ],
  imports: [
    CommonModule,
    BoxSizeModule,
    BoxScaleModule,
    BoxSpeedModule,
  ],
  exports: [
    CommonModule,
    BoxSizeModule,
    BoxScaleModule,
    BoxSpeedModule,
    BoxSizeInputComponent
  ],
  bootstrap: [BoxSizeInputComponent]
})
export class BoxSizeInputModule { }
