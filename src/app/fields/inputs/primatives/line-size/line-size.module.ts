import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineSizeComponent } from './line-size.component';



@NgModule({
  declarations: [
    LineSizeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    LineSizeComponent
  ],
  bootstrap: [LineSizeComponent]
})
export class LineSizeModule { }
