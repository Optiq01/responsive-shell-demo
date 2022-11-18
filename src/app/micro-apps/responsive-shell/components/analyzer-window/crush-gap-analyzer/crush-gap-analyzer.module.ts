import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrushGapAnalyzerComponent } from './crush-gap-analyzer.component';
import { SizeOutputModule } from '../size-output/size-output.module';
import { ElementSizeAnalyzerModule } from '../element-size-analyzer/element-size-analyzer.module';



@NgModule({
  declarations: [
    CrushGapAnalyzerComponent
  ],
  imports: [
    CommonModule,
    SizeOutputModule,
    ElementSizeAnalyzerModule
  ],
  exports: [
    CommonModule,
    CrushGapAnalyzerComponent
  ]
})
export class CrushGapAnalyzerModule { }
