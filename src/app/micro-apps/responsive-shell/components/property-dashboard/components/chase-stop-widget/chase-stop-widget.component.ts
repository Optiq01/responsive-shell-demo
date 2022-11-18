import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ChaseStopSelectors as sel } from 'src/shared/states/srcry-box/sub-states/chase-stop/chase-stop-state.selectors';
import { BoxSizeParams, MtSizeOptionType } from '@srcry-types';
import { CreateBoxSizeSetting } from 'src/app/functions/create-box-size-setting';
import { CreateMtSize } from 'src/app/functions/create-mt-size-setting';

@Component({
  selector: 'chase-stop-widget',
  templateUrl: './chase-stop-widget.component.html',
  styleUrls: ['./chase-stop-widget.component.css']
})
export class ChaseStopWidgetComponent implements OnInit {

  ChaseStopWSetting : BoxSizeParams = {size: '--',scale:'--',speed:'--'};
  ChaseStopW        : string = '--';

  ChaseStopWNudgeScaleSetting : MtSizeOptionType = '1';
  ChaseStopWNudgeScale        : string = '--';

  ChaseStopWNudgeAmountSetting : number = 0;
  ChaseStopWNudgeAmount        : number = 0;

  ChaseStopHSetting : BoxSizeParams = {size: '--',scale:'--',speed:'--'};
  ChaseStopH       : string = '--';

  ChaseStopHNudgeScaleSetting : MtSizeOptionType = '1';
  ChaseStopHNudgeScale        : string = '--';

  ChaseStopHNudgeAmountSetting : number = 0;
  ChaseStopHNudgeAmount        : number = 0;



  SettingToggleW: boolean = false;
  SettingToggleH: boolean = false;
  SettingActive: boolean = false;
  SettingEditor: string = '';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initValues();
  }

  private initValues():void{

    this.store.select(sel.getChaseStopW).subscribe(a =>{
      this.ChaseStopWSetting = a;
      this.ChaseStopW = CreateBoxSizeSetting(a);
    });

    this.store.select(sel.getChaseStopWNudgeScale).subscribe(a =>{
      this.ChaseStopWNudgeScaleSetting = a;
      this.ChaseStopWNudgeScale = CreateMtSize(a);
    });
    
    this.store.select(sel.getChaseStopWNudgeAmount).subscribe(a =>{
      this.ChaseStopWNudgeAmountSetting = a;
      this.ChaseStopWNudgeAmount = a;
    });
    
    this.store.select(sel.getChaseStopH).subscribe(a =>{
      this.ChaseStopHSetting = a;
      this.ChaseStopH = CreateBoxSizeSetting(a);
    });

    this.store.select(sel.getChaseStopHNudgeScale).subscribe(a =>{
      this.ChaseStopHNudgeScaleSetting = a;
      this.ChaseStopHNudgeScale = CreateMtSize(a);
    });
    
    this.store.select(sel.getChaseStopHNudgeAmount).subscribe(a =>{
      this.ChaseStopHNudgeAmountSetting = a;
      this.ChaseStopHNudgeAmount = a;
    });
  }



  public openSettingFrame(setting: string, frame: 'h'|'w'):void{
    
    if(!this.SettingActive){
      this.SettingActive = true;
      
      this.SettingEditor = setting;
      console.log(setting);
      
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
