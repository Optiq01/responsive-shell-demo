import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SvgPhotoComponentService {
  DataChannel! : BroadcastChannel;
  DataChannelName: string = '';
  DataChannelType: string = '';

  constructor(private zone: NgZone) { }

  public setChannel(channel: string, type: string): void {
    this.DataChannel = new BroadcastChannel(channel);
    this.DataChannelType = type;
  }

  public notifyLoadCompletion():void{
    this.zone.run(()=>{

      this.DataChannel.postMessage({
        messageType: 'notification',
        source: this.DataChannelType
      });
    });
  }
}
