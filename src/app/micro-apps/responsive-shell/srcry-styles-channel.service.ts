import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngxs/store';
import { SrcryBoxStateModel } from 'src/shared/states/srcry-box/srcry-box-state.model';
import { SrcryBoxSelectors } from 'src/shared/states/srcry-box/srcry-box.selectors';
import { BaseSizeAnalyzerService } from './components/analyzer-window/base-size-analyzer/base-size-analyzer.service';
import { ResponsiveShellService } from './responsive-shell.service';

@Injectable({
  providedIn: 'root'
})
export class SrcryStylesChannelService {

  SrcryStyleChannel = new BroadcastChannel('srcry-styles');

  constructor(
    private store: Store,
    private zone: NgZone,
    private data: ResponsiveShellService,
    private baseSizeAnalyzer: BaseSizeAnalyzerService
    ) {
    //this.subscribeToStyles();
    this.SrcryStyleChannel.addEventListener('message', event => {
      //console.log(event);
      if(event.data.type === 'init'){ this.subscribeToStyles(); }
      //if(event.data.type === 'baseSize-analyzer'){this.baseSizeAnalyzer.setBaseSizeParams(event.data.data);}
    });
  }

  private subscribeToStyles():void{
    //this.zone.run(()=>{

      this.data.getStyleObject().subscribe(a =>{
        this.SrcryStyleChannel.postMessage({
          type: 'srcryBox',
          data: {...a}
        });
        //console.log('sent');
      });

    //});
  }

  public setStyles(newStyles: SrcryBoxStateModel):void{

    this.zone.run(()=>{

      this.SrcryStyleChannel.postMessage({
        type: 'srcryBox',
        data: {...newStyles}
      });
      //console.log(newStyles);
      //console.log(this.SrcryStyleChannel.onmessage);
      //console.log(this.SrcryStyleChannel);
    });

  }

}
