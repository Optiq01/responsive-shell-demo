import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseHInputComponent } from './edge-chase-h-input.component';
import { BoxSizeInputModule } from 'src/app/fields/inputs/box-size-input/box-size-input.module';
import { SrcryFieldModule } from '../../srcry-field/srcry-field.module';



@NgModule({
  declarations: [
    EdgeChaseHInputComponent
  ],
  imports: [
    CommonModule,
    SrcryFieldModule,
    BoxSizeInputModule
  ],
  exports: [
    CommonModule,
    EdgeChaseHInputComponent
  ],
  bootstrap: [EdgeChaseHInputComponent]
})
export class EdgeChaseHInputModule { }
