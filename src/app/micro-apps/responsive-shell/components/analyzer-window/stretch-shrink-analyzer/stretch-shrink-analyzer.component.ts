import { Component, OnInit } from '@angular/core';
import { StretchShrinkReadout } from '../../property-dashboard/pages/base-size-example/srcry-box-reader/srcry-box-reader.component';
import { StretchShrinkAnalyzerService } from './stretch-shrink-analyzer.service';

@Component({
  selector: 'stretch-shrink-analyzer',
  templateUrl: './stretch-shrink-analyzer.component.html',
  styleUrls: ['./stretch-shrink-analyzer.component.css']
})
export class StretchShrinkAnalyzerComponent implements OnInit {

  Props!: StretchShrinkReadout;

  constructor(private service: StretchShrinkAnalyzerService) { }

  ngOnInit(): void {
    this.service.getStretchShrinkProps().subscribe(a => this.Props = a);
  }

}
