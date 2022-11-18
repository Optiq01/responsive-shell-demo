import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineSizeDisplayComponent } from './line-size-display.component';



@NgModule({
  declarations: [
    LineSizeDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    LineSizeDisplayComponent
  ],
  bootstrap: [ LineSizeDisplayComponent ]
})
export class LineSizeDisplayModule { }
