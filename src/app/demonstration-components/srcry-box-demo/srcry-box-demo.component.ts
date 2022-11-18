import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'srcry-box-demo',
  templateUrl: './srcry-box-demo.component.html',
  styleUrls: ['./srcry-box-demo.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SrcryBoxDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
