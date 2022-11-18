import { Component, ElementRef, Input, NgZone, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CreateSrcryValue } from 'src/app/functions/create-srcry-value';
import { TextMeasurementService } from './text-measurement.service';

@Component({
  selector: 'text-measurement',
  templateUrl: './text-measurement.component.html',
  styleUrls: ['./text-measurement.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TextMeasurementComponent implements OnInit {
  //@Input() Size! : string;
  //@Input() Text! : string;
  TextSize!      : string[];
  Readout        : number = 0;

  

  constructor( private zone : NgZone, private service : TextMeasurementService) { }

  ngOnInit(): void {

    this.service.getSize().subscribe(a => this.TextSize = a);
    
  }

  

}
