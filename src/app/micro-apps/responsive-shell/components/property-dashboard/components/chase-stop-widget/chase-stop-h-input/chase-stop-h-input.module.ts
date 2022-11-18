import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaseStopHInputComponent } from './chase-stop-h-input.component';
import { BoxSizeInputModule } from 'src/app/fields/inputs/box-size-input/box-size-input.module';



@NgModule({
  declarations: [
    ChaseStopHInputComponent
  ],
  imports: [
    CommonModule,
    BoxSizeInputModule
  ],
  exports: [
    CommonModule,
    ChaseStopHInputComponent
  ],
  bootstrap: [ChaseStopHInputComponent]
})
export class ChaseStopHInputModule { }
