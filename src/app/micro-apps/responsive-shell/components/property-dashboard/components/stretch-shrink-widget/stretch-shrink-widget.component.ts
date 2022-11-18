import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { MtSizeOptionType } from '@srcry-types';
import { CreateMtSize } from 'src/app/functions/create-mt-size-setting';
import { StretchShrinkSelectors as sel } from 'src/shared/states/srcry-box/sub-states/stretch-shrink/stretch-shrink-state.selectors';

@Component({
  selector: 'stretch-shrink-widget',
  templateUrl: './stretch-shrink-widget.component.html',
  styleUrls: ['./stretch-shrink-widget.component.css']
})
export class StretchShrinkWidgetComponent implements OnInit {

  StretchShrinkWStartSetting : string = '1px';
  StretchShrinkWStart        : string = '1px';

  StretchShrinkWSpeedSetting : number = 0;
  StretchShrinkWSpeed        : number = 0;

  StretchShrinkWMinSetting : MtSizeOptionType = '1';
  StretchShrinkWMin        : string = '--';

  StretchShrinkWMinNudgeScaleSetting : MtSizeOptionType = '1';
  StretchShrinkWMinNudgeScale        : string = '--';

  StretchShrinkWMinNudgeAmountSetting : number = 0;
  StretchShrinkWMinNudgeAmount        : number = 0;


  
  StretchShrinkHStartSetting : string = '1px';
  StretchShrinkHStart        : string = '1px';

  StretchShrinkHSpeedSetting : number = 0;
  StretchShrinkHSpeed        : number = 0;

  StretchShrinkHMinSetting : MtSizeOptionType = '1';
  StretchShrinkHMin        : string = '--';

  StretchShrinkHMinNudgeScaleSetting : MtSizeOptionType = '1';
  StretchShrinkHMinNudgeScale        : string = '--';

  StretchShrinkHMinNudgeAmountSetting : number = 0;
  StretchShrinkHMinNudgeAmount        : number = 0;



  SettingToggleW: boolean = false;
  SettingToggleH: boolean = false;
  SettingActive: boolean = false;
  SettingEditor: string = '';


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initValues();
  }

  private initValues():void{

    this.store.select(sel.getStretchShrinkWStart).subscribe(a =>{
      this.StretchShrinkWStartSetting = a;
      this.StretchShrinkWStart = a;
    });

    this.store.select(sel.getStretchShrinkWSpeed).subscribe(a =>{
      this.StretchShrinkWSpeedSetting = a;
      this.StretchShrinkWSpeed = a;
    });
    
    this.store.select(sel.getStretchShrinkWMin).subscribe(a =>{
      this.StretchShrinkWMinSetting = a;
      this.StretchShrinkWMin = CreateMtSize(a);
    });
    
    this.store.select(sel.getStretchShrinkWMinNudgeScale).subscribe(a =>{
      this.StretchShrinkWMinNudgeScaleSetting = a;
      this.StretchShrinkWMinNudgeScale = CreateMtSize(a);
    });
    
    this.store.select(sel.getStretchShrinkWMinNudgeAmount).subscribe(a =>{
      this.StretchShrinkWMinNudgeAmountSetting = a;
      this.StretchShrinkWMinNudgeAmount = a;
    });


    
    this.store.select(sel.getStretchShrinkHStart).subscribe(a =>{
      this.StretchShrinkHStartSetting = a;
      this.StretchShrinkHStart = a;
    });

    this.store.select(sel.getStretchShrinkHSpeed).subscribe(a =>{
      this.StretchShrinkHSpeedSetting = a;
      this.StretchShrinkHSpeed = a;
    });
    
    this.store.select(sel.getStretchShrinkHMin).subscribe(a =>{
      this.StretchShrinkHMinSetting = a;
      this.StretchShrinkHMin = CreateMtSize(a);
    });
    
    this.store.select(sel.getStretchShrinkHMinNudgeScale).subscribe(a =>{
      this.StretchShrinkHMinNudgeScaleSetting = a;
      this.StretchShrinkHMinNudgeScale = CreateMtSize(a);
    });
    
    this.store.select(sel.getStretchShrinkHMinNudgeAmount).subscribe(a =>{
      this.StretchShrinkHMinNudgeAmountSetting = a;
      this.StretchShrinkHMinNudgeAmount = a;
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
