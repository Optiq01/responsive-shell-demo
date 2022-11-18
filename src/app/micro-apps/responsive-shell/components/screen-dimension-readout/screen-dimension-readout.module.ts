import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenDimensionReadoutComponent } from './screen-dimension-readout.component';



@NgModule({
  declarations: [
    ScreenDimensionReadoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ScreenDimensionReadoutComponent
  ],
  bootstrap: [ ScreenDimensionReadoutComponent ]
})
export class ScreenDimensionReadoutModule { }
