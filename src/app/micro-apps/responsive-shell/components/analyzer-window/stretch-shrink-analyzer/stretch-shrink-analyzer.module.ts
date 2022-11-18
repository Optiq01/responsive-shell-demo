import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StretchShrinkAnalyzerComponent } from './stretch-shrink-analyzer.component';
import { SizeOutputModule } from '../size-output/size-output.module';
import { ElementSizeAnalyzerModule } from '../element-size-analyzer/element-size-analyzer.module';



@NgModule({
  declarations: [
    StretchShrinkAnalyzerComponent
  ],
  imports: [
    CommonModule,
    SizeOutputModule,
    ElementSizeAnalyzerModule
  ],
  exports: [
    CommonModule,
    StretchShrinkAnalyzerComponent
  ]
})
export class StretchShrinkAnalyzerModule { }
