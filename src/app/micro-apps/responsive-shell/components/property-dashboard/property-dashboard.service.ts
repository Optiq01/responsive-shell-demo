import { Injectable } from '@angular/core';
import { AnalyzerService } from '../analyzer-window/analyzer.service';
import { SizeReaderType } from './pages/base-size-example/srcry-box-reader/srcry-box-reader.component';

@Injectable({
  providedIn: 'root'
})
export class PropertyDashboardService {

  constructor(private analyzerService: AnalyzerService) { }

  public setCurrentTab(tab: SizeReaderType): void {this.analyzerService.setCurrentTab(tab); }
}
