import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { BoxSizeParams, MtSizeOptionType } from '@srcry-types';
import { CreateBoxSizeSetting } from 'src/app/functions/create-box-size-setting';
import { CreateMtSize } from 'src/app/functions/create-mt-size-setting';
import { SquishGrowthSelectors as sel } from 'src/shared/states/srcry-box/sub-states/squish-growth/squish-growth-state.selectors';

@Component({
  selector: 'squish-growth-widget',
  templateUrl: './squish-growth-widget.component.html',
  styleUrls: ['./squish-growth-widget.component.css']
})
export class SquishGrowthWidgetComponent implements OnInit {

  SquishGrowthWStartSetting : string = '1px';
  SquishGrowthWStart        : string = '1px';

  SquishGrowthWSpeedSetting : number = 0;
  SquishGrowthWSpeed        : number = 0;

  SquishGrowthWMaxSetting : BoxSizeParams = {size: 'micro', scale: '1', speed: '1'};
  SquishGrowthWMax        : string = '--';

  SquishGrowthWMaxNudgeScaleSetting : MtSizeOptionType = '1';
  SquishGrowthWMaxNudgeScale        : string = '--';

  SquishGrowthWMaxNudgeAmountSetting : number = 0;
  SquishGrowthWMaxNudgeAmount        : number = 0;


  
  SquishGrowthHStartSetting : string = '1px';
  SquishGrowthHStart        : string = '1px';

  SquishGrowthHSpeedSetting : number = 0;
  SquishGrowthHSpeed        : number = 0;

  SquishGrowthHMaxSetting : BoxSizeParams = {size: 'micro', scale: '1', speed: '1'};
  SquishGrowthHMax        : string = '--';

  SquishGrowthHMaxNudgeScaleSetting : MtSizeOptionType = '1';
  SquishGrowthHMaxNudgeScale        : string = '--';

  SquishGrowthHMaxNudgeAmountSetting : number = 0;
  SquishGrowthHMaxNudgeAmount        : number = 0;



  SettingToggleW: boolean = false;
  SettingToggleH: boolean = false;
  SettingActive: boolean = false;
  SettingEditor: string = '';


  constructor(private store: Store/*private data:ResponsiveShellService*/) { }

  ngOnInit(): void {
    this.initValues();
  }

  private initValues():void{

    this.store.select(sel.getSquishGrowthWStart).subscribe(a =>{
      this.SquishGrowthWStartSetting = a;
      this.SquishGrowthWStart = a;
    });

    this.store.select(sel.getSquishGrowthWSpeed).subscribe(a =>{
      this.SquishGrowthWSpeedSetting = a;
      this.SquishGrowthWSpeed = a;
    });
    
    this.store.select(sel.getSquishGrowthWMax).subscribe(a =>{
      this.SquishGrowthWMaxSetting = a;
      this.SquishGrowthWMax = CreateBoxSizeSetting(a);
    });
    
    this.store.select(sel.getSquishGrowthWMaxNudgeScale).subscribe(a =>{
      this.SquishGrowthWMaxNudgeScaleSetting = a;
      this.SquishGrowthWMaxNudgeScale = CreateMtSize(a);
    });
    
    this.store.select(sel.getSquishGrowthWMaxNudgeAmount).subscribe(a =>{
      this.SquishGrowthWMaxNudgeAmountSetting = a;
      this.SquishGrowthWMaxNudgeAmount = a;
    });


    
    this.store.select(sel.getSquishGrowthHStart).subscribe(a =>{
      this.SquishGrowthHStartSetting = a;
      this.SquishGrowthHStart = a;
    });

    this.store.select(sel.getSquishGrowthHSpeed).subscribe(a =>{
      this.SquishGrowthHSpeedSetting = a;
      this.SquishGrowthHSpeed = a;
    });
    
    this.store.select(sel.getSquishGrowthHMax).subscribe(a =>{
      this.SquishGrowthHMaxSetting = a;
      this.SquishGrowthHMax = CreateBoxSizeSetting(a);
    });
    
    this.store.select(sel.getSquishGrowthHMaxNudgeScale).subscribe(a =>{
      this.SquishGrowthHMaxNudgeScaleSetting = a;
      this.SquishGrowthHMaxNudgeScale = CreateMtSize(a);
    });
    
    this.store.select(sel.getSquishGrowthHMaxNudgeAmount).subscribe(a =>{
      this.SquishGrowthHMaxNudgeAmountSetting = a;
      this.SquishGrowthHMaxNudgeAmount = a;
    });
  }



  public openSettingFrame(setting: string, frame: 'h'|'w'):void{
    
    if(!this.SettingActive){
      this.SettingActive = true;
      
      this.SettingEditor = setting;
      console.log(setting, frame, this.SettingToggleW);
      
      if(frame === 'h'){ this.SettingToggleH = true; }
      if(frame === 'w'){ this.SettingToggleW = true; console.log(this.SettingToggleW); }
    
    }

    
  }

  public closeSettingFrame(frame: 'h'|'w'):void{
    if(frame === 'h'){ this.SettingToggleH = false; }
    if(frame ==='w'){ this.SettingToggleW = false; }
    this.SettingActive = false;
  }

}
