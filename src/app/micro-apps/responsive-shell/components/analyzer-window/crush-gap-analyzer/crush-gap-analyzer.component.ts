import { Component, OnInit } from '@angular/core';
import { CrushGapReadout } from '../../property-dashboard/pages/base-size-example/srcry-box-reader/srcry-box-reader.component';
import { CrushGapAnalyzerService } from './crush-gap-analyzer.service';

@Component({
  selector: 'crush-gap-analyzer',
  templateUrl: './crush-gap-analyzer.component.html',
  styleUrls: ['./crush-gap-analyzer.component.css']
})
export class CrushGapAnalyzerComponent implements OnInit {

  Params!: CrushGapReadout;

  constructor(private service: CrushGapAnalyzerService) { }

  ngOnInit(): void {
    this.service.getCrushGapParams().subscribe(a => this.Params = {...a});
  }

}
