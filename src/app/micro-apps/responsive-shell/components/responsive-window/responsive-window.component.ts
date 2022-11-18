import { Component, Input, OnInit } from '@angular/core';
import { WindowSize } from '@srcry-types';

@Component({
  selector: 'responsive-window',
  templateUrl: './responsive-window.component.html',
  styleUrls: ['./responsive-window.component.css']
})
export class ResponsiveWindowComponent implements OnInit {

  @Input() Dimensions!: WindowSize;

  constructor() { }

  ngOnInit(): void {
  }

}
