import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeAnalyzerComponent } from './base-size-analyzer.component';
import { SizeOutputModule } from '../size-output/size-output.module';
import { ElementSizeAnalyzerModule } from '../element-size-analyzer/element-size-analyzer.module';



@NgModule({
  declarations: [
    BaseSizeAnalyzerComponent
  ],
  imports: [
    CommonModule,
    SizeOutputModule,
    ElementSizeAnalyzerModule
  ],
  exports: [
    CommonModule,
    BaseSizeAnalyzerComponent
  ],
  bootstrap: [BaseSizeAnalyzerComponent]
})
export class BaseSizeAnalyzerModule { }
