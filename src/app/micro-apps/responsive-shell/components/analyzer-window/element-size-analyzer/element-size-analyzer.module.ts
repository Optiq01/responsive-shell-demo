import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementSizeAnalyzerComponent } from './element-size-analyzer.component';



@NgModule({
  declarations: [
    ElementSizeAnalyzerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ElementSizeAnalyzerComponent
  ]
})
export class ElementSizeAnalyzerModule { }
