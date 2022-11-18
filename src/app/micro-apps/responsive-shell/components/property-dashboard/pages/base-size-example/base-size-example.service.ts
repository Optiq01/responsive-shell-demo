import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { BehaviorSubject } from 'rxjs';
import { SrcryBoxStateModel } from 'src/shared/states/srcry-box/srcry-box-state.model';

@Injectable({
  providedIn: 'root'
})
export class BaseSizeExampleService {

  SrcryStyleChannel:BroadcastChannel = new BroadcastChannel('srcry-styles');

  SrcryStyles! : BehaviorSubject<any>;

  constructor(private store: Store) {
    //this.initChannel();
    /*this.SrcryStyleChannel.onmessage = (ev) =>{
      console.log(ev);
      this.SrcryStyles.next(ev.data);

    }*/
  }

  private initChannel():void{

    this.SrcryStyleChannel.onmessage = (newStyles) => {
      //if(newStyles.type === 'srcry-styles'){ this.SrcryStyles.next(newStyles.styles)}
      console.log(newStyles);
      this.SrcryStyles.next(newStyles.data);
    }
  }

  public getStyles():BehaviorSubject<any>{ return this.SrcryStyles; }


}
