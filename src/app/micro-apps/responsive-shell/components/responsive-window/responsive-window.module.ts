import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveWindowComponent } from './responsive-window.component';



@NgModule({
  declarations: [
    ResponsiveWindowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResponsiveWindowComponent
  ]
})
export class ResponsiveWindowModule { }
