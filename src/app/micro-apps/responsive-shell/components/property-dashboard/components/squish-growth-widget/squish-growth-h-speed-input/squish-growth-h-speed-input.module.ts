import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthHSpeedInputComponent } from './squish-growth-h-speed-input.component';



@NgModule({
  declarations: [
    SquishGrowthHSpeedInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SquishGrowthHSpeedInputComponent
  ]
})
export class SquishGrowthHSpeedInputModule { }
