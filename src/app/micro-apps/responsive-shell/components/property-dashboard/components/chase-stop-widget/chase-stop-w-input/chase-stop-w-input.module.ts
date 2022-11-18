import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaseStopWInputComponent } from './chase-stop-w-input.component';
import { BoxSizeInputModule } from 'src/app/fields/inputs/box-size-input/box-size-input.module';



@NgModule({
  declarations: [
    ChaseStopWInputComponent
  ],
  imports: [
    CommonModule,
    BoxSizeInputModule
  ],
  exports: [
    CommonModule,
    ChaseStopWInputComponent
  ],
  bootstrap: [ChaseStopWInputComponent]
})
export class ChaseStopWInputModule { }
