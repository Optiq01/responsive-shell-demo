import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSpeedComponent } from './box-speed.component';



@NgModule({
  declarations: [
    BoxSpeedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    BoxSpeedComponent
  ]
})
export class BoxSpeedModule { }
