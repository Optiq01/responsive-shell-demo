import { Component, OnInit } from '@angular/core';
import { TextMeasurementService } from '../text-measurement/text-measurement.service';

@Component({
  selector: 'text-measurement-control',
  templateUrl: './text-measurement-control.component.html',
  styleUrls: ['./text-measurement-control.component.css']
})
export class TextMeasurementControlComponent implements OnInit {

  constructor(private service : TextMeasurementService) { }

  ngOnInit(): void {
  }

  public updateSize(size: string): void {
    this.service.setSize(size);
  }

}
