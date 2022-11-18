import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxScaleComponent } from './box-scale.component';



@NgModule({
  declarations: [
    BoxScaleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    BoxScaleComponent
  ],
  bootstrap : [BoxScaleComponent]
})
export class BoxScaleModule { }
