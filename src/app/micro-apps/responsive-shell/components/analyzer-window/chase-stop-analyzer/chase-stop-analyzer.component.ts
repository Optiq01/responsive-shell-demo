import { Component, OnInit } from '@angular/core';
import { ChaseStopReadout } from '../../property-dashboard/pages/base-size-example/srcry-box-reader/srcry-box-reader.component';
import { ChaseStopAnalyzerService } from './chase-stop-analyzer.service';

@Component({
  selector: 'chase-stop-analyzer',
  templateUrl: './chase-stop-analyzer.component.html',
  styleUrls: ['./chase-stop-analyzer.component.css']
})
export class ChaseStopAnalyzerComponent implements OnInit {

  Props!: ChaseStopReadout;

  constructor(private service: ChaseStopAnalyzerService) { }

  ngOnInit(): void {
    this.service.getChaseStopProps().subscribe(a => this.Props = a);
  }

}
