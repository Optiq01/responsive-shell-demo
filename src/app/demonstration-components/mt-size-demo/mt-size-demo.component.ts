import { Component, OnInit, ViewEncapsulation } from '@angular/core';

const SIZES : string[] = [
  'mt-1', 'mt-3', 'mt-5', 'mt-7', 'mt-9', 'mt-11', 'mt-22', 'mt-44'
];

@Component({
  selector: 'mt-size-demo',
  templateUrl: './mt-size-demo.component.html',
  styleUrls: ['./mt-size-demo.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MtSizeDemoComponent implements OnInit {

  Sizes! : string[];

  constructor() { }

  ngOnInit(): void {

    this.Sizes = SIZES;
  }

}
