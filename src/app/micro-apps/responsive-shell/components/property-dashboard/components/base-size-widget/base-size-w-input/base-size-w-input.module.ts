import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeWInputComponent } from './base-size-w-input.component';
import { BoxSizeInputModule } from 'src/app/fields/inputs/box-size-input/box-size-input.module';



@NgModule({
  declarations: [
    BaseSizeWInputComponent
  ],
  imports: [
    CommonModule,
    BoxSizeInputModule
  ],
  exports: [
    CommonModule,
    BoxSizeInputModule,
    BaseSizeWInputComponent
  ],
  bootstrap:[BaseSizeWInputComponent]
})
export class BaseSizeWInputModule { }
