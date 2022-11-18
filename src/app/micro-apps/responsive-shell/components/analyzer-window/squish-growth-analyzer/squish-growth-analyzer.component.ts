import { Component, OnInit } from '@angular/core';
import { SquishGrowthReadout } from '../../property-dashboard/pages/base-size-example/srcry-box-reader/srcry-box-reader.component';
import { SquishGrowthAnalyzerService } from './squish-growth-analyzer.service';

@Component({
  selector: 'squish-growth-analyzer',
  templateUrl: './squish-growth-analyzer.component.html',
  styleUrls: ['./squish-growth-analyzer.component.css']
})
export class SquishGrowthAnalyzerComponent implements OnInit {

  Props!: SquishGrowthReadout;

  constructor(
    private service: SquishGrowthAnalyzerService
  ) { }

  ngOnInit(): void {
    this.service.getAnalyzerProps().subscribe(a => this.Props = a);
  }

}
