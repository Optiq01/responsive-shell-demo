import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineSpeedComponent } from './line-speed.component';



@NgModule({
  declarations: [
    LineSpeedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    LineSpeedComponent
  ],
  bootstrap: [LineSpeedComponent]
})
export class LineSpeedModule { }
