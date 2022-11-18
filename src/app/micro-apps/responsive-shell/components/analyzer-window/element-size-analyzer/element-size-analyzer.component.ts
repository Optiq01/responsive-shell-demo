import { Component, Input, OnInit } from '@angular/core';
import { SrcryReaderDimension } from '@srcry-types';
import { CurrentBehaviorReadout } from '../../property-dashboard/pages/base-size-example/srcry-box-reader/srcry-box-reader.component';

@Component({
  selector: 'element-size-analyzer',
  templateUrl: './element-size-analyzer.component.html',
  styleUrls: ['./element-size-analyzer.component.css']
})
export class ElementSizeAnalyzerComponent implements OnInit {

  @Input() Size! : SrcryReaderDimension;
  @Input() Behaviors! : CurrentBehaviorReadout;

  constructor() { }

  ngOnInit(): void {
  }

}
