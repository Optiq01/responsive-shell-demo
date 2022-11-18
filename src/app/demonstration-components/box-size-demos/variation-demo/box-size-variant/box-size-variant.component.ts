import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { CreateSrcryValue } from 'src/app/functions/create-srcry-value';
import { VariationDemoService, VariationPayloadType } from '../variation-demo.service';

export interface VariationBoxSizePayload{
  fullWidth: number;
  coreWidth: number;
  remainderWidth: number;
  coreSetting: string;
}

@Component({
  selector: 'box-size-variant',
  templateUrl: './box-size-variant.component.html',
  styleUrls: ['./box-size-variant.component.css']
})
export class BoxSizeVariantComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked {

  @Input() Settings: VariationPayloadType  = {base: '', setting: ''};

  @Output() SettingsOutput: EventEmitter<VariationBoxSizePayload> = new EventEmitter<VariationBoxSizePayload>();
  ElementWidth! : string;

  @ViewChild('sizeShell', {static: false}) SizeShell! : ElementRef<HTMLElement>;
  @ViewChild('baseBox', {static: false}) BaseBox! : ElementRef<HTMLElement>;
  @ViewChild('remainderBox', {static: false}) RemainderBox! : ElementRef<HTMLElement>;

  Size: number = 0;

  BaseBoxWidth: number = 0;
  RemainderBoxWidth: number = 0;


  constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.ElementWidth = '';
    
  }
  
  ngAfterViewInit(): void {
    
    const BoxObserver = new ResizeObserver((entry) => {
      this.zone.run(()=> { this.updateSize(); });
    });
    
    BoxObserver.observe(this.SizeShell.nativeElement);

    this.updateSize();
  }
  
  ngAfterViewChecked(): void {
    
  }
  
  ngAfterContentChecked(): void {
    //this.cdr.detectChanges();
    
  }

  private updateSize(): void {
    this.Size              = this.SizeShell.nativeElement.offsetWidth;
    this.BaseBoxWidth      = this.BaseBox.nativeElement.offsetWidth;
    this.RemainderBoxWidth = this.RemainderBox.nativeElement.offsetWidth;

    this.SettingsOutput.emit({
      fullWidth: this.Size,
      coreWidth: this.BaseBoxWidth,
      remainderWidth: this.RemainderBoxWidth,
      coreSetting: this.Settings.base
    });
  }

}
