import { Component, OnInit } from '@angular/core';
import { BaseSizeAnalyzer } from '@srcry-types';
import { BaseSizeReadout } from '../../property-dashboard/pages/base-size-example/srcry-box-reader/srcry-box-reader.component';
import { BaseSizeAnalyzerService } from './base-size-analyzer.service';

/*const DEFAULT: BaseSizeReadout = {
  baseSizeMaster: {w: 0, h: 0},
  baseSizeCore: {w: 0, h: 0},
  baseSizeNudge: {w: 0, h: 0},
  elementSize: {w: 0, h: 0}
}*/

@Component({
  selector: 'base-size-analyzer',
  templateUrl: './base-size-analyzer.component.html',
  styleUrls: ['./base-size-analyzer.component.css']
})
export class BaseSizeAnalyzerComponent implements OnInit {

  Props!: BaseSizeReadout;

  constructor(private data: BaseSizeAnalyzerService) { }

  ngOnInit(): void {

    this.data.getBaseSizeParams().subscribe(a => {
      this.Props = {...a};
      console.log(a);
    });

  }

}
