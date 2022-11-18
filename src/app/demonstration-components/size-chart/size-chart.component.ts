import { Component, OnInit } from '@angular/core';

export interface SizeChartItem {
  name: string;
  size: number;
}

const SIZES : SizeChartItem[] = [
  {
    name: 'micro-1-1',
    size: 4
  },
  {
    name: 'micro-2-1',
    size: 11
  },
  {
    name: 'xTiny-1-1',
    size: 18
  },
  {
    name: 'xTiny-2-1',
    size: 29
  },
  {
    name: 'tiny-1-1',
    size: 47

  },
  {
    name: 'tiny-2-1',
    size: 76
  },
  {
    name: 'xSmall-1-1',
    size: 97
  },
  {
    name: 'xSmall-2-1',
    size: 123
  },
  {
    name: 'small-1-1',
    size: 157
  },
  {
    name: 'small-2-1',
    size: 199
  },
  {
    name: 'loMed-1-1',
    size: 256
  },
  {
    name: 'loMed-2-1',
    size: 322
  },
  {
    name: 'hiMed-1-1',
    size: 521
  },
  {
    name: 'hiMed-2-1',
    size: 842
  },
  {
    name: 'large-1-1',
    size: 1077
  },
  {
    name: 'large-2-1',
    size: 1364
  },
  {
    name: 'jumbo-1-1',
    size: 1744
  },
  {
    name: 'jumbo-2-1',
    size: 2206
  },
];

@Component({
  selector: 'size-chart',
  templateUrl: './size-chart.component.html',
  styleUrls: ['./size-chart.component.css']
})
export class SizeChartComponent implements OnInit {

  Sizes! : SizeChartItem[];

  constructor() { }

  ngOnInit(): void {
    this.Sizes = SIZES;
  }

}
