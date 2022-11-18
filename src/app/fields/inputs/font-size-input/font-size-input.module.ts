import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizeInputComponent } from './font-size-input.component';
import { FontSpeedModule } from '../primatives/font-speed/font-speed.module';
import { FontSizeModule } from '../primatives/font-size/font-size.module';



@NgModule({
  declarations: [
    FontSizeInputComponent
  ],
  imports: [
    CommonModule,
    FontSizeModule,
    FontSpeedModule
  ],
  exports: [
    CommonModule,
    FontSizeModule,
    FontSpeedModule,
    FontSizeInputComponent
  ],
  bootstrap:[FontSizeInputComponent]
})
export class FontSizeInputModule { }
