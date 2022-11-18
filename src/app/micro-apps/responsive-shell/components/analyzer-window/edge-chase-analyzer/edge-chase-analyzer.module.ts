import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdgeChaseAnalyzerComponent } from './edge-chase-analyzer.component';
import { SizeOutputModule } from '../size-output/size-output.module';
import { ElementSizeAnalyzerModule } from '../element-size-analyzer/element-size-analyzer.module';



@NgModule({
  declarations: [
    EdgeChaseAnalyzerComponent
  ],
  imports: [
    CommonModule,
    SizeOutputModule,
    ElementSizeAnalyzerModule
  ],
  exports: [
    CommonModule,
    EdgeChaseAnalyzerComponent
  ]
})
export class EdgeChaseAnalyzerModule { }
