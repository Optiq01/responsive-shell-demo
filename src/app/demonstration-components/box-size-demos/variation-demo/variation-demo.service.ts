import { Injectable, Injector, NgZone } from '@angular/core';
import { BoxSizeParams } from '@srcry-types';
import { BehaviorSubject, Observable } from 'rxjs';
import { BoxScaleComponent } from 'src/app/fields/inputs/primatives/box-scale/box-scale.component';
import { CreateBoxSizeSetting } from 'src/app/functions/create-box-size-setting';
import { CreateSrcryValue } from 'src/app/functions/create-srcry-value';
import { VariationBoxSizePayload } from './box-size-variant/box-size-variant.component';
import { VariantChannelData } from './variant-control/variant-control.component';

const MICROSIZES : string[] = [
  'micro-1-1',
  'micro-1-2',
  'micro-1-3',
  'micro-1-4',
  'micro-1-5',
  'micro-1-6',
  'micro-1-7',
  'micro-1-8',
  'micro-1-9',
  'micro-1-10',
  'micro-1-11',
  'micro-2-1',
  'micro-2-2',
  'micro-2-3',
  'micro-2-4',
  'micro-2-5',
  'micro-2-6',
  'micro-2-7',
  'micro-2-8',
  'micro-2-9',
  'micro-2-10',
  'micro-2-11'
];

const XTINYSIZES : string[] = [
  'xTiny-1-1',
  'xTiny-1-2',
  'xTiny-1-3',
  'xTiny-1-4',
  'xTiny-1-5',
  'xTiny-1-6',
  'xTiny-1-7',
  'xTiny-1-8',
  'xTiny-1-9',
  'xTiny-1-10',
  'xTiny-1-11',
  'xTiny-2-1',
  'xTiny-2-2',
  'xTiny-2-3',
  'xTiny-2-4',
  'xTiny-2-5',
  'xTiny-2-6',
  'xTiny-2-7',
  'xTiny-2-8',
  'xTiny-2-9',
  'xTiny-2-10',
  'xTiny-2-11'
];

const TINYSIZES : string[] = [
  'tiny-1-1',
  'tiny-1-2',
  'tiny-1-3',
  'tiny-1-4',
  'tiny-1-5',
  'tiny-1-6',
  'tiny-1-7',
  'tiny-1-8',
  'tiny-1-9',
  'tiny-1-10',
  'tiny-1-11',
  'tiny-2-1',
  'tiny-2-2',
  'tiny-2-3',
  'tiny-2-4',
  'tiny-2-5',
  'tiny-2-6',
  'tiny-2-7',
  'tiny-2-8',
  'tiny-2-9',
  'tiny-2-10',
  'tiny-2-11'
];

const XSMALLSIZES : string[] = [
  'xSmall-1-1',
  'xSmall-1-2',
  'xSmall-1-3',
  'xSmall-1-4',
  'xSmall-1-5',
  'xSmall-1-6',
  'xSmall-1-7',
  'xSmall-1-8',
  'xSmall-1-9',
  'xSmall-1-10',
  'xSmall-1-11',
  'xSmall-2-1',
  'xSmall-2-2',
  'xSmall-2-3',
  'xSmall-2-4',
  'xSmall-2-5',
  'xSmall-2-6',
  'xSmall-2-7',
  'xSmall-2-8',
  'xSmall-2-9',
  'xSmall-2-10',
  'xSmall-2-11'
];

const SMALLSIZES : string[] = [
  'small-1-1',
  'small-1-2',
  'small-1-3',
  'small-1-4',
  'small-1-5',
  'small-1-6',
  'small-1-7',
  'small-1-8',
  'small-1-9',
  'small-1-10',
  'small-1-11',
  'small-2-1',
  'small-2-2',
  'small-2-3',
  'small-2-4',
  'small-2-5',
  'small-2-6',
  'small-2-7',
  'small-2-8',
  'small-2-9',
  'small-2-10',
  'small-2-11'
];

const LOMEDSIZES : string[] = [
  'loMed-1-1',
  'loMed-1-2',
  'loMed-1-3',
  'loMed-1-4',
  'loMed-1-5',
  'loMed-1-6',
  'loMed-1-7',
  'loMed-1-8',
  'loMed-1-9',
  'loMed-1-10',
  'loMed-1-11',
  'loMed-2-1',
  'loMed-2-2',
  'loMed-2-3',
  'loMed-2-4',
  'loMed-2-5',
  'loMed-2-6',
  'loMed-2-7',
  'loMed-2-8',
  'loMed-2-9',
  'loMed-2-10',
  'loMed-2-11'
];

const HIMEDSIZES : string[] = [
  'hiMed-1-1',
  'hiMed-1-2',
  'hiMed-1-3',
  'hiMed-1-4',
  'hiMed-1-5',
  'hiMed-1-6',
  'hiMed-1-7',
  'hiMed-1-8',
  'hiMed-1-9',
  'hiMed-1-10',
  'hiMed-1-11',
  'hiMed-2-1',
  'hiMed-2-2',
  'hiMed-2-3',
  'hiMed-2-4',
  'hiMed-2-5',
  'hiMed-2-6',
  'hiMed-2-7',
  'hiMed-2-8',
  'hiMed-2-9',
  'hiMed-2-10',
  'hiMed-2-11'
];

const LARGESIZES : string[] = [
  'large-1-1',
  'large-1-2',
  'large-1-3',
  'large-1-4',
  'large-1-5',
  'large-1-6',
  'large-1-7',
  'large-1-8',
  'large-1-9',
  'large-1-10',
  'large-1-11',
  'large-2-1',
  'large-2-2',
  'large-2-3',
  'large-2-4',
  'large-2-5',
  'large-2-6',
  'large-2-7',
  'large-2-8',
  'large-2-9',
  'large-2-10',
  'large-2-11'
];

const JUMBOSIZES : string[] = [
  'jumbo-1-1',
  'jumbo-1-2',
  'jumbo-1-3',
  'jumbo-1-4',
  'jumbo-1-5',
  'jumbo-1-6',
  'jumbo-1-7',
  'jumbo-1-8',
  'jumbo-1-9',
  'jumbo-1-10',
  'jumbo-1-11',
  'jumbo-2-1',
  'jumbo-2-2',
  'jumbo-2-3',
  'jumbo-2-4',
  'jumbo-2-5',
  'jumbo-2-6',
  'jumbo-2-7',
  'jumbo-2-8',
  'jumbo-2-9',
  'jumbo-2-10',
  'jumbo-2-11'
];

export interface VariationPayloadType { base: string; setting: string; }


@Injectable({
  providedIn: 'root'
})
export class VariationDemoService {

  VariationChannel! : BroadcastChannel;
  ChannelName! : string;
  ChannelType! : string;

  Size : BehaviorSubject<VariationPayloadType> = new BehaviorSubject({base:'', setting: ''});
  SizeObserver: Observable<VariationPayloadType> = this.Size.asObservable();

  constructor(private zone : NgZone) { }

  /*public setSize(size: string): void {
    if(size === 'micro'){ this.Size.next(MICROSIZES); }
    else if(size === 'xTiny'){ this.Size.next(XTINYSIZES); }
    else if(size === 'tiny'){ this.Size.next(TINYSIZES); }
    else if(size === 'xSmall'){ this.Size.next(XSMALLSIZES); }
    else if(size === 'small'){ this.Size.next(SMALLSIZES); }
    else if(size === 'loMed'){ this.Size.next(LOMEDSIZES); }
    else if(size === 'hiMed'){ this.Size.next(HIMEDSIZES); }
    else if(size === 'large'){ this.Size.next(LARGESIZES); }
    else if(size === 'jumbo'){ this.Size.next(JUMBOSIZES); }
    else{ this.Size.next(MICROSIZES); }
  }*/

  public getSize(): Observable<VariationPayloadType> { return this.SizeObserver; }

  public setChannel(channel : string, type : string): void {
    this.VariationChannel = new BroadcastChannel(channel);
    this.ChannelName = channel;
    this.ChannelType = type;
    this.setChannelListener();
    this.notifyLoadCompletion();
  }

  private updateSize(size: VariantChannelData): void{
    const boxSize: BoxSizeParams = {size: size.size, scale: size.scale, speed: size.speed};
    const baseSize: BoxSizeParams = {size: size.size, scale: size.scale, speed: '1'};
    const newSize: VariationPayloadType = {
      base: CreateSrcryValue(CreateBoxSizeSetting(baseSize)),
      setting: CreateSrcryValue(CreateBoxSizeSetting(boxSize))
    };

    this.Size.next(newSize);
  }

  private setChannelListener(): void {
    this.VariationChannel.onmessage = (ev)=>{
      this.zone.run(()=>{

        if(ev.data.target === this.ChannelType){
          this.updateSize(ev.data.payload);
        }

      });
    };
  }

  public notifyLoadCompletion():void{
    this.zone.run(()=>{

      this.VariationChannel.postMessage({
        messageType: 'notification',
        source: this.ChannelType
      });
    });
  }

  public sendReadings(readings: VariationBoxSizePayload):void{
    this.zone.run(()=>{

      this.VariationChannel.postMessage({
        messageType: 'box-readings',
        source : this.ChannelType,
        data   : readings
      });

    });
  }

}
