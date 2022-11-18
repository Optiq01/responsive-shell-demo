import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { BoxSizeParams, MtSizeOptionType } from '@srcry-types';
import { CreateBoxSizeSetting } from 'src/app/functions/create-box-size-setting';
import { CreateMtSize } from 'src/app/functions/create-mt-size-setting';
import { EdgeChaseSelectors as sel } from 'src/shared/states/srcry-box/sub-states/edge-chase/edge-chase-state.selectors';

@Component({
  selector: 'edge-chase-widget',
  templateUrl: './edge-chase-widget.component.html',
  styleUrls: ['./edge-chase-widget.component.css']
})
export class EdgeChaseWidgetComponent implements OnInit {

  EdgeChaseWSetting : BoxSizeParams = {size: '--',scale:'--',speed:'--'};
  EdgeChaseW        : string = '--';

  EdgeChaseWNudgeScaleSetting : MtSizeOptionType = '1';
  EdgeChaseWNudgeScale        : string = '--';

  EdgeChaseWNudgeAmountSetting : number = 0;
  EdgeChaseWNudgeAmount        : number = 0;

  EdgeChaseHSetting : BoxSizeParams = {size: '--',scale:'--',speed:'--'};
  EdgeChaseH       : string = '--';

  EdgeChaseHNudgeScaleSetting : MtSizeOptionType = '1';
  EdgeChaseHNudgeScale        : string = '--';

  EdgeChaseHNudgeAmountSetting : number = 0;
  EdgeChaseHNudgeAmount        : number = 0;



  SettingToggleW: boolean = false;
  SettingToggleH: boolean = false;
  SettingActive: boolean = false;
  SettingEditor: string = '';


  constructor(private store: Store/*private data:ResponsiveShellService*/) { }

  ngOnInit(): void {
    this.initValues();
  }

  private initValues():void{

    this.store.select(sel.getEdgeChaseW).subscribe(a =>{
      this.EdgeChaseWSetting = a;
      this.EdgeChaseW = CreateBoxSizeSetting(a);
    });

    this.store.select(sel.getEdgeChaseWNudgeScale).subscribe(a =>{
      this.EdgeChaseWNudgeScaleSetting = a;
      this.EdgeChaseWNudgeScale = CreateMtSize(a);
    });
    
    this.store.select(sel.getEdgeChaseWNudgeAmount).subscribe(a =>{
      this.EdgeChaseWNudgeAmountSetting = a;
      this.EdgeChaseWNudgeAmount = a;
    });
    
    this.store.select(sel.getEdgeChaseH).subscribe(a =>{
      this.EdgeChaseHSetting = a;
      this.EdgeChaseH = CreateBoxSizeSetting(a);
    });

    this.store.select(sel.getEdgeChaseHNudgeScale).subscribe(a =>{
      this.EdgeChaseHNudgeScaleSetting = a;
      this.EdgeChaseHNudgeScale = CreateMtSize(a);
    });
    
    this.store.select(sel.getEdgeChaseHNudgeAmount).subscribe(a =>{
      this.EdgeChaseHNudgeAmountSetting = a;
      this.EdgeChaseHNudgeAmount = a;
    });
  }



  public openSettingFrame(setting: string, frame: 'h'|'w'):void{
    
    if(!this.SettingActive){
      this.SettingActive = true;
      
      this.SettingEditor = setting;
      
      if(frame === 'h'){ this.SettingToggleH = true; }
      if(frame === 'w'){ this.SettingToggleW = true; }
    
    }

    
  }

  public closeSettingFrame(frame: 'h'|'w'):void{
    if(frame === 'h'){ this.SettingToggleH = false; }
    if(frame ==='w'){ this.SettingToggleW = false; }
    this.SettingActive = false;
  }

}
