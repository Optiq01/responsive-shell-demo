import { Injectable, Input, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SizeDemoControlService {

  DataChannel! : BroadcastChannel;
  DataChannelName: string = '';
  DataChannelType!: string;
  Properties: string = '';

  constructor(private zone: NgZone) { }

  public setChannel(channel: string, type: string): void {
    this.DataChannel = new BroadcastChannel(channel);
    this.DataChannelName = channel;
    this.DataChannelType = type;

    this.DataChannel.onmessage = (ev)=>{

      this.zone.run(()=>{

        if(ev.data.type === 'verification' && ev.data.notification === 'complete' && ev.data.windowType === this.DataChannelType){
          this.sendData(this.Properties);
          console.log(ev.data.windowType);
        }

      });
    }
    console.log(this.DataChannelName, this.DataChannelType, this.DataChannel);
  }

  public setProperties(properties : string): void{
    this.Properties = properties;
  }

  public sendData(data: string): void{
    console.log(this.DataChannelName, data);
    
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        type: this.DataChannelType,
        styleData: data
      });

    });

    //console.log('sent');
  }
}
