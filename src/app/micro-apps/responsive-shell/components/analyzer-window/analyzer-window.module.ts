import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzerWindowComponent } from './analyzer-window.component';
import { BaseSizeAnalyzerModule } from './base-size-analyzer/base-size-analyzer.module';
import { CrushGapAnalyzerModule } from './crush-gap-analyzer/crush-gap-analyzer.module';
import { SquishGrowthAnalyzerModule } from './squish-growth-analyzer/squish-growth-analyzer.module';
import { ChaseStopAnalyzerModule } from './chase-stop-analyzer/chase-stop-analyzer.module';
import { EdgeChaseAnalyzerModule } from './edge-chase-analyzer/edge-chase-analyzer.module';
import { StretchShrinkAnalyzerModule } from './stretch-shrink-analyzer/stretch-shrink-analyzer.module';



@NgModule({
  declarations: [
    AnalyzerWindowComponent
  ],
  imports: [
    CommonModule,
    CrushGapAnalyzerModule,
    BaseSizeAnalyzerModule,
    SquishGrowthAnalyzerModule,
    ChaseStopAnalyzerModule,
    EdgeChaseAnalyzerModule,
    StretchShrinkAnalyzerModule
  ],
  exports: [
    CommonModule,
    AnalyzerWindowComponent
  ]
})
export class AnalyzerWindowModule { }
