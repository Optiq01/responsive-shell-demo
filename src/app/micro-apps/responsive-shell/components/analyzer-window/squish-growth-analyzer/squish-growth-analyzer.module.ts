import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthAnalyzerComponent } from './squish-growth-analyzer.component';
import { SizeOutputModule } from '../size-output/size-output.module';
import { ElementSizeAnalyzerModule } from '../element-size-analyzer/element-size-analyzer.module';



@NgModule({
  declarations: [
    SquishGrowthAnalyzerComponent
  ],
  imports: [
    CommonModule,
    SizeOutputModule,
    ElementSizeAnalyzerModule
  ],
  exports: [
    CommonModule,
    SquishGrowthAnalyzerComponent
  ]
})
export class SquishGrowthAnalyzerModule { }
