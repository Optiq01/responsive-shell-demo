import { AfterViewInit, Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { CreateSrcryValue } from 'src/app/functions/create-srcry-value';

@Component({
  selector: 'line-size-display',
  templateUrl: './line-size-display.component.html',
  styleUrls: ['./line-size-display.component.css']
})
export class LineSizeDisplayComponent implements OnInit, AfterViewInit {

  @Input() Size!  : string;
  @Input() ShowSize! : boolean;
  LineThickness   : string = '';
  LineSize        : number = 0;

  @ViewChild('reader', {static: false}) Reader! : ElementRef;

  constructor(private zone : NgZone) { }

  ngOnInit(): void {

    this.LineThickness = CreateSrcryValue(this.Size);
  
  }
  
  ngAfterViewInit(): void {
    
    const lineObserver = new ResizeObserver(item => {
      this.zone.run(() => this.updateSize());
    });
  
    lineObserver.observe(this.Reader.nativeElement);
      
  }

  private updateSize(): void { this.LineSize = this.Reader.nativeElement.offsetWidth}

}
