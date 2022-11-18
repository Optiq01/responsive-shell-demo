import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseWInputComponent } from './edge-chase-w-input.component';
import { BoxSizeInputModule } from 'src/app/fields/inputs/box-size-input/box-size-input.module';



@NgModule({
  declarations: [
    EdgeChaseWInputComponent
  ],
  imports: [
    CommonModule,
    BoxSizeInputModule
  ],
  exports: [
    CommonModule,
    EdgeChaseWInputComponent
  ],
  bootstrap: [EdgeChaseWInputComponent]
})
export class EdgeChaseWInputModule { }
