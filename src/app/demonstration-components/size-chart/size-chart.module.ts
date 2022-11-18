import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeChartComponent } from './size-chart.component';



@NgModule({
  declarations: [
    SizeChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SizeChartComponent
  ]
})
export class SizeChartModule { }
