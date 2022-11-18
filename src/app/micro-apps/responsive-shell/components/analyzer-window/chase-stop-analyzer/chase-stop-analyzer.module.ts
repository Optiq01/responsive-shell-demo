import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaseStopAnalyzerComponent } from './chase-stop-analyzer.component';
import { SizeOutputModule } from '../size-output/size-output.module';
import { ElementSizeAnalyzerModule } from '../element-size-analyzer/element-size-analyzer.module';



@NgModule({
  declarations: [
    ChaseStopAnalyzerComponent
  ],
  imports: [
    CommonModule,
    SizeOutputModule,
    ElementSizeAnalyzerModule
    
  ],
  exports: [
    CommonModule,
    ChaseStopAnalyzerComponent
  ]
})
export class ChaseStopAnalyzerModule { }
