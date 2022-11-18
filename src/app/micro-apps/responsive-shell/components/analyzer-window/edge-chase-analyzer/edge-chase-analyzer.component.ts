import { Component, OnInit } from '@angular/core';
import { EdgeChaseReadout } from '../../property-dashboard/pages/base-size-example/srcry-box-reader/srcry-box-reader.component';
import { EdgeChaseAnalyzerService } from './edge-chase-analyzer.service';

@Component({
  selector: 'edge-chase-analyzer',
  templateUrl: './edge-chase-analyzer.component.html',
  styleUrls: ['./edge-chase-analyzer.component.css']
})
export class EdgeChaseAnalyzerComponent implements OnInit {

  Props!: EdgeChaseReadout;

  constructor(private service: EdgeChaseAnalyzerService) { }

  ngOnInit(): void {
    this.service.getEdgeChaseParams().subscribe(a => this.Props = a);
  }

}
