import { Component, Input, OnInit } from '@angular/core';
import { WindowSize } from '@srcry-types';

@Component({
  selector: 'screen-dimension-readout',
  templateUrl: './screen-dimension-readout.component.html',
  styleUrls: ['./screen-dimension-readout.component.css']
})
export class ScreenDimensionReadoutComponent implements OnInit {

  @Input() Size: WindowSize | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
