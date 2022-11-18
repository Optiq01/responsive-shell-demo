import { Injectable, NgZone } from '@angular/core';
import { BoxSizeParams } from '@srcry-types';
import { BehaviorSubject, Observable } from 'rxjs';
import { BoxSizeDemoType } from './size-demo-control/size-demo-control.component';

@Injectable({
  providedIn: 'root'
})
export class SizeDemoService {

  Size: BehaviorSubject<string>= new BehaviorSubject<string>('');
  SizeObserver : Observable<string> = this.Size.asObservable();
  DataChannelName: string = '';
  DataChannelType: string = '';

  DataChannel! : BroadcastChannel;



  constructor(private zone: NgZone) {
    
    
  }

  public updateSize(size: string) : void { this.Size.next(size); }

  public notifyLoadCompletion():void{
    this.zone.run(()=>{

      this.DataChannel.postMessage({
        messageType: 'notification',
        source: this.DataChannelType
      });
    });
  }

  public getSize(): Observable<string> { return this.SizeObserver; }

  public setChannel(channel: string, type: string): void {
    this.DataChannel = new BroadcastChannel(channel);
    this.DataChannelName = channel;
    this.DataChannelType = type;
    console.log(this.DataChannelName, this.DataChannelType);
    //console.log(this.DataChannel);

    this.setChannelListener();
    this.notifyLoadCompletion();
  }

  private setChannelListener(): void {
    this.DataChannel.onmessage = (ev)=>{
      //console.log(ev);
      //console.log(ev.data.type === this.DataChannelType);
      //console.log(ev.data.type);
      //this.updateSize(ev.data.styleData);
      this.zone.run(()=>{

        if(ev.data.target === this.DataChannelType){
          this.updateSize(ev.data.payload);
          console.log(this.DataChannelName, ev);
          console.log(this.DataChannelName, this.Size);
        }

      });
    };
    //console.log(this.Size);
  }


}
