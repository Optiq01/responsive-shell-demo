import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CrushGapSelectors as sel } from 'src/shared/states/srcry-box/sub-states/crush-gap/crush-gap-state.selectors';
import { MtSizeOptionType } from '@srcry-types';
import { CreateMtSize } from 'src/app/functions/create-mt-size-setting';

@Component({
  selector: 'crush-gap-widget',
  templateUrl: './crush-gap-widget.component.html',
  styleUrls: ['./crush-gap-widget.component.css']
})
export class CrushGapWidgetComponent implements OnInit {

  CrushGapWSetting : MtSizeOptionType = '1';
  CrushGapW        : string = '--';
  
  CrushGapHSetting : MtSizeOptionType = '1';
  CrushGapH        : string = '--';



  SettingToggle : boolean = false;
  SettingEditor : string = '';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initValues();
  }

  private initValues():void{

    this.store.select(sel.getCrushGapW).subscribe(a =>{
      this.CrushGapWSetting = a;
      this.CrushGapW = CreateMtSize(a);
    });

    this.store.select(sel.getCrushGapH).subscribe(a =>{
      this.CrushGapHSetting = a;
      this.CrushGapH = CreateMtSize(a);
    });
  }

  public openSettingFrame(setting: string):void{
    this.SettingEditor = setting;
    this.SettingToggle = true;
  }


  public closeSettingFrame():void{ this.SettingToggle = false; }


}
