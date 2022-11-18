import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BoxSizeParams, MtSizeOptionType, SrcryPropType } from '@srcry-types';
import { Observable } from 'rxjs';
import { CreateBoxSizeSetting } from 'src/app/functions/create-box-size-setting';
import { CreateMtSize } from 'src/app/functions/create-mt-size-setting';
import { ResponsiveShellService } from 'src/app/micro-apps/responsive-shell/responsive-shell.service';
import { BaseSizeSelectors } from 'src/shared/states/srcry-box/sub-states/base-size/base-size-state.selectors';
import { BaseSizeState } from 'src/shared/states/srcry-box/sub-states/base-size/base-size.state';

const BASESIZEPROPS: SrcryPropType[] =[
]

@Component({
  selector: 'base-size-widget',
  templateUrl: './base-size-widget.component.html',
  styleUrls: ['./base-size-widget.component.css']
})
export class BaseSizeWidgetComponent implements OnInit {

  BaseSizeWSetting : BoxSizeParams = {size: '--',scale:'--',speed:'--'};
  BaseSizeW        : string = '--';

  BaseSizeWNudgeScaleSetting : MtSizeOptionType = '1';
  BaseSizeWNudgeScale        : string = '--';

  BaseSizeWNudgeAmountSetting : number = 0;
  BaseSizeWNudgeAmount        : number = 0;

  BaseSizeHSetting : BoxSizeParams = {size: '--',scale:'--',speed:'--'};
  BaseSizeH        : string = '--';

  BaseSizeHNudgeScaleSetting : MtSizeOptionType = '1';
  BaseSizeHNudgeScale        : string = '--';

  BaseSizeHNudgeAmountSetting : number = 0;
  BaseSizeHNudgeAmount        : number = 0;



  SettingToggleW : boolean = false;
  SettingToggleH : boolean = false;
  SettingActive  : boolean = false;
  SettingEditor  : string = '';


  constructor(private store: Store/*private data:ResponsiveShellService*/) { }

  ngOnInit(): void {
    this.initValues();
  }

  private initValues():void{

    this.store.select(BaseSizeSelectors.getBaseSizeW).subscribe(a =>{
      this.BaseSizeWSetting = a;
      this.BaseSizeW = CreateBoxSizeSetting(a);
    });

    this.store.select(BaseSizeSelectors.getBaseSizeWNudgeScale).subscribe(a =>{
      this.BaseSizeWNudgeScaleSetting = a;
      this.BaseSizeWNudgeScale = CreateMtSize(a);
    });
    
    this.store.select(BaseSizeSelectors.getBaseSizeWNudgeAmount).subscribe(a =>{
      this.BaseSizeWNudgeAmountSetting = a;
      this.BaseSizeWNudgeAmount = a;
    });
    
    this.store.select(BaseSizeSelectors.getBaseSizeH).subscribe(a =>{
      this.BaseSizeHSetting = a;
      this.BaseSizeH = CreateBoxSizeSetting(a);
    });

    this.store.select(BaseSizeSelectors.getBaseSizeHNudgeScale).subscribe(a =>{
      this.BaseSizeHNudgeScaleSetting = a;
      this.BaseSizeHNudgeScale = CreateMtSize(a);
    });
    
    this.store.select(BaseSizeSelectors.getBaseSizeHNudgeAmount).subscribe(a =>{
      this.BaseSizeHNudgeAmountSetting = a;
      this.BaseSizeHNudgeAmount = a;
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
