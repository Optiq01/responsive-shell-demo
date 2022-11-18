import { AfterViewInit, Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { CreateSrcryValue } from 'src/app/functions/create-srcry-value';

@Component({
  selector: 'text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent implements OnInit, AfterViewInit {
  @Input() Size! : string;
  @Input() Text! : string;
  TextSize!      : string;
  Readout        : number = 0;

  @ViewChild('reader', {static : false}) Reader! : ElementRef;

  constructor(
    private zone : NgZone
  ) { }

  ngOnInit(): void {
    this.TextSize = CreateSrcryValue(this.Size);

  }
  
  ngAfterViewInit(): void {
    
    const readoutObserver = new ResizeObserver( entry => {
      this.zone.run(() => this.setReadout());
    });
  
    readoutObserver.observe(this.Reader.nativeElement);
  }

  private setReadout() : void {
    this.Readout = this.Reader.nativeElement.offsetWidth;
  }

}
