import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeComponent } from './box-size.component';



@NgModule({
  declarations: [
    BoxSizeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    BoxSizeComponent
  ],
  bootstrap: [BoxSizeComponent]
})
export class BoxSizeModule { }
