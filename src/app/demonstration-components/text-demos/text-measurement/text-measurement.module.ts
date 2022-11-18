import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMeasurementComponent } from './text-measurement.component';
import { TextDisplayModule } from './text-display/text-display.module';



@NgModule({
  declarations: [
    TextMeasurementComponent
  ],
  imports: [
    CommonModule,
    TextDisplayModule
  ],
  exports: [
    CommonModule,
    TextMeasurementComponent
  ],
  bootstrap: [ TextMeasurementComponent ]
})
export class TextMeasurementModule { }
