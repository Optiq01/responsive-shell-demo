import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BoxScaleOptionType, BoxSizeOptionType, BoxSpeedOptionType } from '@srcry-types';
import { VariationBoxSizePayload } from '../box-size-variant/box-size-variant.component';
import { VariationDemoService } from '../variation-demo.service';


export interface VariantChannelData{
  size: BoxSizeOptionType;
  scale: BoxScaleOptionType;
  speed: BoxSpeedOptionType;

}

export interface VariantChannelPayload{
  messageType: string;
  target : string;
  payload: VariantChannelData;
}

@Component({
  selector: 'variant-control',
  templateUrl: './variant-control.component.html',
  styleUrls: ['./variant-control.component.css']
})
export class VariantControlComponent implements OnInit {

  @Input() TargetName : string = '';
  @Input() set InitChannelData(target: string){
    if(target === this.TargetName){ this.updateSize(); }
  }

  @Input() BoxSizes : VariationBoxSizePayload = { fullWidth: 0, coreWidth: 0, remainderWidth: 0, coreSetting: ''};

  Size: BoxSizeOptionType = 'xTiny';
  Scale: BoxScaleOptionType = '1';
  Speed: BoxSpeedOptionType = '5';

  @Output() SetSize : EventEmitter<VariantChannelPayload> = new EventEmitter<VariantChannelPayload>();

  constructor(private service: VariationDemoService) { }

  ngOnInit(): void {
  }

  public updateSize(): void {
    //this.service.setSize(size);

    this.SetSize.emit({
        messageType: 'data',
        target: this.TargetName,
        payload: {
          size: this.Size,
          scale: this.Scale,
          speed: this.Speed
        }
      });
  }

  public setSize(size: BoxSizeOptionType): void{ this.Size = size; this.updateSize(); }
  
  public setScale(scale: BoxScaleOptionType): void{ this.Scale = scale; this.updateSize(); }
  
  public setSpeed(speed: BoxSpeedOptionType): void{ this.Speed = speed; this.updateSize(); }

}
