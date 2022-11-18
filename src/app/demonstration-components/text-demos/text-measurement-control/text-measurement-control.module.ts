import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMeasurementControlComponent } from './text-measurement-control.component';



@NgModule({
  declarations: [
    TextMeasurementControlComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    TextMeasurementControlComponent
  ],
  bootstrap: [ TextMeasurementControlComponent ]
})
export class TextMeasurementControlModule { }
