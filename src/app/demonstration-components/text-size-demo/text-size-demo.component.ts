import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'text-size-demo',
  templateUrl: './text-size-demo.component.html',
  styleUrls: ['./text-size-demo.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TextSizeDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
