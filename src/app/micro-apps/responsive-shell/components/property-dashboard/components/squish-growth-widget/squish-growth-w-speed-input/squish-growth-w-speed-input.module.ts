import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthWSpeedInputComponent } from './squish-growth-w-speed-input.component';



@NgModule({
  declarations: [
    SquishGrowthWSpeedInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SquishGrowthWSpeedInputComponent
  ]
})
export class SquishGrowthWSpeedInputModule { }
