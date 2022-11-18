import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeHInputComponent } from './base-size-h-input.component';
import { BoxSizeInputModule } from 'src/app/fields/inputs/box-size-input/box-size-input.module';



@NgModule({
  declarations: [
    BaseSizeHInputComponent
  ],
  imports: [
    CommonModule,
    BoxSizeInputModule
  ],
  exports: [
    CommonModule,
    BaseSizeHInputComponent
  ],
  bootstrap: [BaseSizeHInputComponent]
})
export class BaseSizeHInputModule { }
