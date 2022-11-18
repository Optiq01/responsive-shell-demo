import { AfterContentChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { VariationBoxSizePayload } from './box-size-variant/box-size-variant.component';
import { VariationDemoService, VariationPayloadType } from './variation-demo.service';

@Component({
  selector: 'variation-demo',
  templateUrl: './variation-demo.component.html',
  styleUrls: ['./variation-demo.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VariationDemoComponent implements OnInit, AfterViewInit, AfterContentChecked{

  @Input() DataChannel : string = '';
  @Input() DataChannelType : string = '';

  CurrentSize : VariationPayloadType = {base: '', setting: ''};

  Sizes! : string[];

  constructor(private service: VariationDemoService, private cdr : ChangeDetectorRef) {}

  ngOnInit(): void {
    this.service.getSize().subscribe(a => this.CurrentSize = a);
    this.service.setChannel(this.DataChannel, this.DataChannelType);
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentChecked(): void {
      this.cdr.detectChanges();
  }

  public sendBoxSizes(data: VariationBoxSizePayload): void{
    this.service.sendReadings(data);
  }

}
