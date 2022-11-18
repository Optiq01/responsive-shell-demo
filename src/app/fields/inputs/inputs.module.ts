import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimativesModule } from './primatives/primatives.module';
import { BoxSizeInputModule } from './box-size-input/box-size-input.module';
import { FontSizeInputModule } from './font-size-input/font-size-input.module';
import { LineSizeInputModule } from './line-size-input/line-size-input.module';



@NgModule({
  imports: [
    CommonModule,
    PrimativesModule,
    BoxSizeInputModule,
    FontSizeInputModule,
    LineSizeInputModule
  ],
  exports:[
    CommonModule,
    PrimativesModule,
    BoxSizeInputModule,
    FontSizeInputModule,
    LineSizeInputModule
  ]
})
export class InputsModule { }
