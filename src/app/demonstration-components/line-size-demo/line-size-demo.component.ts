import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { LineSizeDemoService } from './line-size-demo.service';


const LINEDATA : string[] = [
  'line-fine', 'line-light', 'line-narrow', 'line-semiBold', 'line-bold',
  'line-semiThick', 'line-thick', 'line-semiWide', 'line-wide', 'line-ultraWide',
  'line-jumbo'
];

@Component({
  selector: 'line-size-demo',
  templateUrl: './line-size-demo.component.html',
  styleUrls: ['./line-size-demo.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LineSizeDemoComponent implements OnInit, AfterViewInit {

  @Input() SomeInput : string = 'none';
  Sizes! : string[];
  ShowSize! : boolean;

  constructor(private service: LineSizeDemoService) { }

  ngOnInit(): void {
    this.Sizes = LINEDATA;

    //this.service.getShowSize().subscribe(a => this.ShowSize = a);
  }

  ngAfterViewInit(): void {
      
    console.log(this.SomeInput);
  }

}
