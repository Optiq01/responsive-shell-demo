import { Injectable } from '@angular/core';
import { BoxSizeParams, FontSizeParams, MtSizeOptionType } from '@srcry-types';
import { BehaviorSubject, Observable } from 'rxjs';
import { LineSizeParams } from 'src/app/fields/inputs/line-size-input/line-size-input.component';
import { CreateBoxSizeSetting } from 'src/app/functions/create-box-size-setting';

import { CreateMtSize } from 'src/app/functions/create-mt-size-setting';
import { CreateScreenSize } from 'src/app/functions/create-screen-size-setting';
import { CreateSrcryValue } from 'src/app/functions/create-srcry-value';

export type NumberObserver   = BehaviorSubject<number>;
export type StringObserver   = BehaviorSubject<string>;
export type BoxSizeObserver  = BehaviorSubject<BoxSizeParams>;
export type MtSizeObserver   = BehaviorSubject<MtSizeOptionType>;
export type FontSizeObserver = BehaviorSubject<FontSizeParams>;
export type LineSizeObserver = BehaviorSubject<LineSizeParams>;
//export type NumberObserver = {params: BehaviorSubject<number>, setting: BehaviorSubject<number> };
//export type StringObserver = {params: BehaviorSubject<string>, setting: BehaviorSubject<string> };
//export type BoxSizeObserver = {params: BehaviorSubject<BoxSizeParams>, setting: BehaviorSubject<string> };
//export type MtSizeObserver = {params: BehaviorSubject<MtSizeOptionType>, setting: BehaviorSubject<string> };
//export type FontSizeObserver = {params: BehaviorSubject<FontSizeParams>, setting: BehaviorSubject<string> };
//export type LineSizeObserver = {params: BehaviorSubject<LineSizeParams>, setting: BehaviorSubject<string> };
//export type BoxMtObserver = { params: BoxSizeParams | MtSizeOptionType, setting: string };
//export type SrcryPropObserver = NumberObserver | StringObserver | BoxSizeObserver |
//                            MtSizeObserver | FontSizeObserver | LineSizeObserver;
export type SrcryPropType = NumberObserver | StringObserver | BoxSizeObserver |
                            MtSizeObserver | FontSizeObserver | LineSizeObserver;

export type SrcrySettingType = string | number;

export type SrcryPropObserver = {params: SrcryPropType, setting: StringObserver | NumberObserver};

export type SrcryProperties = 'crushGap-w' | 'crushGap-h' | 'baseSize-w' | 'baseSize-h' |
                              'baseSize-w-nudgeScale' | 'baseSize-h-nudgeScale' | 'baseSize-w-nudgeAmount' |
                              'baseSize-h-nudgeAmount' | 'edgeChase-w' | 'edgeChase-h' |
                              'edgeChase-w-nudgeScale' | 'edgeChase-h-nudgeScale' | 'edgeChase-w-nudgeAmount' |
                              'edgeChase-h-nudgeAmount' | 'chaseStop-w' | 'chaseStop-h' |
                              'chaseStop-w-nudgeScale' | 'chaseStop-h-nudgeScale' | 'chaseStop-w-nudgeAmount' |
                              'chaseStop-h-nudgeAmount' | 'squishGrowth-w-start' | 'squishGrowth-h-start' |
                              'squishGrowth-w-speed' | 'squishGrowth-h-speed' | 'squishGrowth-w-max' |
                              'squishGrowth-h-max' | 'squishGrowth-w-max-nudgeScale' | 'squishGrowth-h-max-nudgeScale' |
                              'squishGrowth-w-max-nudgeAmount' | 'squishGrowth-h-max-nudgeAmount' | 'stretchShrink-w-start' |
                              'stretchShrink-h-start' | 'stretchShrink-w-speed' | 'stretchShrink-h-speed' |
                              'stretchShrink-w-min' | 'stretchShrink-h-min' | 'stretchShrink-w-min-nudgeScale' |
                              'stretchShrink-h-min-nudgeScale' | 'stretchShrink-w-min-nudgeAmount' | 'stretchShrink-h-min-nudgeAmount';

export interface SrcryObserver{
  [key: string]: SrcryPropObserver;
}

//export interface Srcry

export interface StylingObserver{ [key: string]: string | number }


@Injectable({
  providedIn: 'root'
})
export class ResponsiveShellService {

  private PropertyMaster = {
    CrushGapWSetting: {
      params  : new BehaviorSubject<MtSizeOptionType>('--'),
      setting : new BehaviorSubject<string>('mt-1')
    },
    CrushGapHSetting: {
      params  : new BehaviorSubject<MtSizeOptionType>('--'),
      setting : new BehaviorSubject<string>('mt-1')
    },


    BaseSizeWSetting: {
      params: new BehaviorSubject<BoxSizeParams>({ size: '--', scale: '--', speed: '--'}),
      setting: new BehaviorSubject<string>('unset')
    },
    BaseSizeWNudgeScaleSetting: {
      params: new BehaviorSubject<MtSizeOptionType>('--'),
      setting: new BehaviorSubject<string>('mt-1')
    },
    BaseSizeWNudgeAmountSetting: {
      params: new BehaviorSubject<number>(0),
      setting: new BehaviorSubject<number>(0) 
    },


    BaseSizeHSetting: {
      params: new BehaviorSubject<BoxSizeParams>({ size: '--', scale: '--', speed: '--'}),
      setting: new BehaviorSubject<string>('unset')
    },
    BaseSizeHNudgeScaleSetting: {
      params: new BehaviorSubject<MtSizeOptionType>('--'),
      setting: new BehaviorSubject<string>('mt-1')
    },
    BaseSizeHNudgeAmountSetting: {
      params: new BehaviorSubject<number>(0),
      setting: new BehaviorSubject<number>(0) 
    },


    EdgeChaseWSetting: {
      params: new BehaviorSubject<BoxSizeParams>({ size: '--', scale: '--', speed: '--'}),
      setting: new BehaviorSubject<string>('crushGap-w')
    },
    EdgeChaseWNudgeScaleSetting: {
      params: new BehaviorSubject<MtSizeOptionType>('--'),
      setting: new BehaviorSubject<string>('mt-1')
    },
    EdgeChaseWNudgeAmountSetting: {
      params: new BehaviorSubject<number>(0),
      setting: new BehaviorSubject<number>(0) 
    },

    
    EdgeChaseHSetting: {
      params: new BehaviorSubject<BoxSizeParams>({ size: '--', scale: '--', speed: '--'}),
      setting: new BehaviorSubject<string>('crushGap-h')
    },
    EdgeChaseHNudgeScaleSetting: {
      params: new BehaviorSubject<MtSizeOptionType>('--'),
      setting: new BehaviorSubject<string>('mt-1')
    },
    EdgeChaseHNudgeAmountSetting: {
      params: new BehaviorSubject<number>(0),
      setting: new BehaviorSubject<number>(0) 
    },


    ChaseStopWSetting: {
      params: new BehaviorSubject<BoxSizeParams>({ size: '--', scale: '--', speed: '--'}),
      setting: new BehaviorSubject<string>('baseSize-w')
    },
    ChaseStopWNudgeScaleSetting: {
      params: new BehaviorSubject<MtSizeOptionType>('--'),
      setting: new BehaviorSubject<string>('mt-1')
    },
    ChaseStopWNudgeAmountSetting: {
      params: new BehaviorSubject<number>(0),
      setting: new BehaviorSubject<number>(0) 
    },

    
    ChaseStopHSetting: {
      params: new BehaviorSubject<BoxSizeParams>({ size: '--', scale: '--', speed: '--'}),
      setting: new BehaviorSubject<string>('baseSize-h')
    },
    ChaseStopHNudgeScaleSetting: {
      params: new BehaviorSubject<string>('--'),
      setting: new BehaviorSubject<string>('mt-1')
    },
    ChaseStopHNudgeAmountSetting: {
      params: new BehaviorSubject<number>(0),
      setting: new BehaviorSubject<number>(0) 
    },


    SquishGrowthWStartSetting: {
      params: new BehaviorSubject<number>(1),
      setting: new BehaviorSubject<string>('1px')
    },
    SquishGrowthWSpeedSetting: {
      params: new BehaviorSubject<number>(0),
      setting: new BehaviorSubject<number>(0)
    },
    SquishGrowthWMaxSetting: {
      params: new BehaviorSubject<string>('--'),
      setting: new BehaviorSubject<string>('mt-1')
    },
    SquishGrowthWMaxNudgeScaleSetting: {
      params: new BehaviorSubject<MtSizeOptionType>('--'),
      setting: new BehaviorSubject<string>('mt-1')
    },
    SquishGrowthWMaxNudgeAmountSetting: {
      params: new BehaviorSubject<number>(0),
      setting: new BehaviorSubject<number>(0)
    },
    
    
    SquishGrowthHStartSetting: {
      params: new BehaviorSubject<number>(1),
      setting: new BehaviorSubject<string>('1px')
    },
    SquishGrowthHSpeedSetting: {
      params: new BehaviorSubject<number>(0),
      setting: new BehaviorSubject<number>(0)
    },
    SquishGrowthHMaxSetting: {
      params: new BehaviorSubject<string>('--'),
      setting: new BehaviorSubject<string>('mt-1')
    },
    SquishGrowthHMaxNudgeScaleSetting: {
      params: new BehaviorSubject<MtSizeOptionType>('--'),
      setting: new BehaviorSubject<string>('mt-1')
    },
    SquishGrowthHMaxNudgeAmountSetting: {
      params: new BehaviorSubject<number>(0),
      setting: new BehaviorSubject<number>(0)
    },

    
    StretchShrinkWStartSetting: {
      params: new BehaviorSubject<number>(1),
      setting: new BehaviorSubject<string>('1px')
    },
    StretchShrinkWSpeedSetting: {
      params: new BehaviorSubject<number>(0),
      setting: new BehaviorSubject<number>(0)
    },
    StretchShrinkWMinSetting: {
      params: new BehaviorSubject<string>('--'),
      setting: new BehaviorSubject<string>('ChaseStopToggle-w')
    },
    StretchShrinkWMinNudgeScaleSetting: {
      params: new BehaviorSubject<string>('--'),
      setting: new BehaviorSubject<string>('mt-1')
    },
    StretchShrinkWMinNudgeAmountSetting: {
      params: new BehaviorSubject<number>(0),
      setting: new BehaviorSubject<number>(0)
    },
    
    
    StretchShrinkHStartSetting: {
      params: new BehaviorSubject<number>(1),
      setting: new BehaviorSubject<string>('1px')
    },
    StretchShrinkHSpeedSetting: {
      params: new BehaviorSubject<number>(0),
      setting: new BehaviorSubject<number>(0)
    },
    StretchShrinkHMinSetting: {
      params: new BehaviorSubject<string>('--'),
      setting: new BehaviorSubject<string>('ChaseStopToggle-h')
    },
    StretchShrinkHMinNudgeScaleSetting: {
      params: new BehaviorSubject<MtSizeOptionType>('--'),
      setting: new BehaviorSubject<string>('mt-1')
    },
    StretchShrinkHMinNudgeAmountSetting: {
      params: new BehaviorSubject<number>(0),
      setting: new BehaviorSubject<number>(0)
    },
  }

  private SrcryBoxStyles : BehaviorSubject<StylingObserver> = new BehaviorSubject<StylingObserver>({});

  //private BoxSizes : BehaviorSubject<StylingObserver[]> = new BehaviorSubject<StylingObserver[]>([]);

  
  
  constructor() { }
  
  
  public updateCrushGapW(val: MtSizeOptionType) : void {
    const defaultSize: MtSizeOptionType = '1';

    this.PropertyMaster.CrushGapWSetting.params.next(val);

    if(val === '--'){ this.PropertyMaster.CrushGapWSetting.setting.next(CreateMtSize(defaultSize)); }
    else { this.PropertyMaster.CrushGapWSetting.setting.next(CreateMtSize(val)); }

    this.updateSrcryBoxSettings();
  }

  //public getCrushGapW(): BehaviorSubject<string>{}
  
  
  
  public updateCrushGapH(val: MtSizeOptionType) : void {
    const defaultSize: MtSizeOptionType = '1';

    this.PropertyMaster.CrushGapHSetting.params.next(val);

    if(val === '--'){ this.PropertyMaster.CrushGapHSetting.setting.next(CreateMtSize(defaultSize)); }
    else { this.PropertyMaster.CrushGapHSetting.setting.next(CreateMtSize(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  
  
  
  
  public updateBaseSizeW(val: BoxSizeParams) : void {
    const defaultSize: string = 'unset';

    this.PropertyMaster.BaseSizeWSetting.params.next(val);

    if(val.size === '--' && val.scale === '--' && val.speed === '--'){
      this.PropertyMaster.BaseSizeWSetting.setting.next(defaultSize);
    }
    else { this.PropertyMaster.BaseSizeWSetting.setting.next(CreateBoxSizeSetting(val)); }

    this.updateSrcryBoxSettings();
  }

  public getBaseSizeW(): BehaviorSubject<string>{ return this.PropertyMaster.BaseSizeWSetting.setting }
  
  
  
  public updateBaseSizeH(val: BoxSizeParams) : void {
    const defaultSize: string = 'unset';

    this.PropertyMaster.BaseSizeHSetting.params.next(val);

    if(val.size === '--' && val.scale === '--' && val.speed === '--'){
      this.PropertyMaster.BaseSizeHSetting.setting.next(defaultSize);
    }
    else { this.PropertyMaster.BaseSizeHSetting.setting.next(CreateBoxSizeSetting(val)); }

    this.updateSrcryBoxSettings();
  }

  public getBaseSizeH(): BehaviorSubject<string>{ return this.PropertyMaster.BaseSizeHSetting.setting }
  
  
  
  public updateBaseSizeWNudgeScale(val: MtSizeOptionType) : void {
    const defaultSize: MtSizeOptionType = '1';

    this.PropertyMaster.BaseSizeWNudgeScaleSetting.params.next(val);

    if(val === '--'){ this.PropertyMaster.BaseSizeWNudgeScaleSetting.setting.next(CreateMtSize(defaultSize)); }
    else { this.PropertyMaster.BaseSizeWNudgeScaleSetting.setting.next(CreateMtSize(val)); }

    this.updateSrcryBoxSettings();
  }

  public getBaseSizeWNudgeScale(): BehaviorSubject<string>{
    return this.PropertyMaster.BaseSizeWNudgeScaleSetting.setting;
  }
  
  
  
  public updateBaseSizeHNudgeScale(val: MtSizeOptionType) : void {
    const defaultSize: MtSizeOptionType = '1';

    this.PropertyMaster.BaseSizeHNudgeScaleSetting.params.next(val);

    if(val === '--'){ this.PropertyMaster.BaseSizeHNudgeScaleSetting.setting.next(CreateMtSize(defaultSize)); }
    else { this.PropertyMaster.BaseSizeHNudgeScaleSetting.setting.next(CreateMtSize(val)); }

    this.updateSrcryBoxSettings();
  }

  public getBaseSizeHNudgeScale(): BehaviorSubject<string>{
    return this.PropertyMaster.BaseSizeHNudgeScaleSetting.setting;
  }
  
  
  
  public updateBaseSizeWNudgeAmount(val: number) : void {

    this.PropertyMaster.BaseSizeWNudgeAmountSetting.params.next(val);
    this.PropertyMaster.BaseSizeWNudgeAmountSetting.setting.next(val);

    this.updateSrcryBoxSettings();
  }

  public getBaseSizeWNudgeAmount(): BehaviorSubject<number>{
    return this.PropertyMaster.BaseSizeWNudgeAmountSetting.setting;
  }
  
  
  
  public updateBaseSizeHNudgeAmount(val: number) : void {

    this.PropertyMaster.BaseSizeHNudgeAmountSetting.params.next(val);
    this.PropertyMaster.BaseSizeHNudgeAmountSetting.setting.next(val);

    this.updateSrcryBoxSettings();
  }

  public getBaseSizeHNudgeAmount(): BehaviorSubject<number>{
    return this.PropertyMaster.BaseSizeHNudgeAmountSetting.setting;
  }
  
  
  
  
  
  
  
  public updateEdgeChaseW(val: BoxSizeParams) : void {
    const defaultSize: string = 'crushGap-w';

    this.PropertyMaster.EdgeChaseWSetting.params.next(val);

    if(val.size === '--' && val.scale === '--' && val.speed === '--'){
      this.PropertyMaster.EdgeChaseWSetting.setting.next(defaultSize);
    }
    else { this.PropertyMaster.EdgeChaseWSetting.setting.next(CreateBoxSizeSetting(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateEdgeChaseH(val: BoxSizeParams) : void {
    const defaultSize: string = 'crushGap-h';

    this.PropertyMaster.EdgeChaseHSetting.params.next(val);

    if(val.size === '--' && val.scale === '--' && val.speed === '--'){
      this.PropertyMaster.EdgeChaseHSetting.setting.next(defaultSize);
    }
    else { this.PropertyMaster.EdgeChaseHSetting.setting.next(CreateBoxSizeSetting(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateEdgeChaseWNudgeScale(val: MtSizeOptionType) : void {
    const defaultSize: MtSizeOptionType = '1';

    this.PropertyMaster.EdgeChaseWNudgeScaleSetting.params.next(val);

    if(val === '--'){ this.PropertyMaster.EdgeChaseWNudgeScaleSetting.setting.next(CreateMtSize(defaultSize)); }
    else { this.PropertyMaster.EdgeChaseWNudgeScaleSetting.setting.next(CreateMtSize(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateEdgeChaseHNudgeScale(val: MtSizeOptionType) : void {
    const defaultSize: MtSizeOptionType = '1';

    this.PropertyMaster.EdgeChaseHNudgeScaleSetting.params.next(val);

    if(val === '--'){ this.PropertyMaster.EdgeChaseHNudgeScaleSetting.setting.next(CreateMtSize(defaultSize)); }
    else { this.PropertyMaster.EdgeChaseHNudgeScaleSetting.setting.next(CreateMtSize(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateEdgeChaseWNudgeAmount(val: number) : void {

    this.PropertyMaster.EdgeChaseWNudgeAmountSetting.params.next(val);
    this.PropertyMaster.EdgeChaseWNudgeAmountSetting.setting.next(val);

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateEdgeChaseHNudgeAmount(val: number) : void {

    this.PropertyMaster.EdgeChaseHNudgeAmountSetting.params.next(val);
    this.PropertyMaster.EdgeChaseHNudgeAmountSetting.setting.next(val);

    this.updateSrcryBoxSettings();
  }
  
  
  
  
  
  
  
  public updateChaseStopW(val: BoxSizeParams) : void {
    const defaultSize: string = 'baseSize-w';

    this.PropertyMaster.ChaseStopWSetting.params.next(val);

    if(val.size === '--' && val.scale === '--' && val.speed === '--'){
      this.PropertyMaster.ChaseStopWSetting.setting.next(defaultSize);
    }
    else { this.PropertyMaster.ChaseStopWSetting.setting.next(CreateBoxSizeSetting(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateChaseStopH(val: BoxSizeParams) : void {
    const defaultSize: string = 'baseSize-h';

    this.PropertyMaster.ChaseStopHSetting.params.next(val);

    if(val.size === '--' && val.scale === '--' && val.speed === '--'){
      this.PropertyMaster.ChaseStopHSetting.setting.next(defaultSize);
    }
    else { this.PropertyMaster.ChaseStopHSetting.setting.next(CreateBoxSizeSetting(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateChaseStopWNudgeScale(val: MtSizeOptionType) : void {
    const defaultSize: MtSizeOptionType = '1';

    this.PropertyMaster.ChaseStopWNudgeScaleSetting.params.next(val);

    if(val === '--'){ this.PropertyMaster.ChaseStopWNudgeScaleSetting.setting.next(CreateMtSize(defaultSize)); }
    else { this.PropertyMaster.ChaseStopWNudgeScaleSetting.setting.next(CreateMtSize(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateChaseStopHNudgeScale(val: MtSizeOptionType) : void {
    const defaultSize: MtSizeOptionType = '1';

    this.PropertyMaster.ChaseStopHNudgeScaleSetting.params.next(val);

    if(val === '--'){ this.PropertyMaster.ChaseStopHNudgeScaleSetting.setting.next(CreateMtSize(defaultSize)); }
    else { this.PropertyMaster.ChaseStopHNudgeScaleSetting.setting.next(CreateMtSize(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateChaseStopWNudgeAmount(val: number) : void {

    this.PropertyMaster.ChaseStopWNudgeAmountSetting.params.next(val);
    this.PropertyMaster.ChaseStopWNudgeAmountSetting.setting.next(val);

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateChaseStopHNudgeAmount(val: number) : void {

    this.PropertyMaster.ChaseStopHNudgeAmountSetting.params.next(val);
    this.PropertyMaster.ChaseStopHNudgeAmountSetting.setting.next(val);

    this.updateSrcryBoxSettings();
  }







  public updateSquishGrowthWStart(val: number) : void {
    const defaultSize : number = 1;

    this.PropertyMaster.SquishGrowthWStartSetting.params.next(val);

    if(val === 0){ this.PropertyMaster.SquishGrowthWStartSetting.setting.next(CreateScreenSize(defaultSize)); }
    else { this.PropertyMaster.SquishGrowthWStartSetting.setting.next(CreateScreenSize(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateSquishGrowthHStart(val: number) : void {
    const defaultSize : number = 1;

    if(val === 0){ this.PropertyMaster.SquishGrowthHStartSetting.setting.next(CreateScreenSize(defaultSize)); }
    else { this.PropertyMaster.SquishGrowthHStartSetting.setting.next(CreateScreenSize(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateSquishGrowthWSpeed(val: number) : void {

    this.PropertyMaster.SquishGrowthWSpeedSetting.params.next(val);
    this.PropertyMaster.SquishGrowthWSpeedSetting.setting.next(val);

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateSquishGrowthHSpeed(val: number) : void {

    this.PropertyMaster.SquishGrowthHSpeedSetting.params.next(val);
    this.PropertyMaster.SquishGrowthHSpeedSetting.setting.next(val);

    this.updateSrcryBoxSettings();

  }



  public updateSquishGrowthWMax(val: MtSizeOptionType) : void {
    const defaultSize: MtSizeOptionType = '1';

    this.PropertyMaster.SquishGrowthWMaxSetting.params.next(val);

    if(val === '--'){ this.PropertyMaster.SquishGrowthWMaxSetting.setting.next(CreateMtSize(defaultSize)); }
    else { this.PropertyMaster.SquishGrowthWMaxSetting.setting.next(CreateMtSize(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateSquishGrowthHMax(val: MtSizeOptionType) : void {
    const defaultSize: MtSizeOptionType = '1';

    this.PropertyMaster.SquishGrowthHMaxSetting.params.next(val);

    if(val === '--'){ this.PropertyMaster.SquishGrowthHMaxSetting.setting.next(CreateMtSize(defaultSize)); }
    else { this.PropertyMaster.SquishGrowthHMaxSetting.setting.next(CreateMtSize(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateSquishGrowthWMaxNudgeScale(val: MtSizeOptionType) : void {
    const defaultSize: MtSizeOptionType = '1';

    this.PropertyMaster.SquishGrowthWMaxNudgeScaleSetting.params.next(val);

    if(val === '--'){ this.PropertyMaster.SquishGrowthWMaxNudgeScaleSetting.setting.next(CreateMtSize(defaultSize)); }
    else { this.PropertyMaster.SquishGrowthWMaxNudgeScaleSetting.setting.next(CreateMtSize(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateSquishGrowthHMaxNudgeScale(val: MtSizeOptionType) : void {
    const defaultSize: MtSizeOptionType = '1';

    this.PropertyMaster.SquishGrowthHMaxNudgeScaleSetting.params.next(val);

    if(val === '--'){ this.PropertyMaster.SquishGrowthHMaxNudgeScaleSetting.setting.next(CreateMtSize(defaultSize)); }
    else { this.PropertyMaster.SquishGrowthHMaxNudgeScaleSetting.setting.next(CreateMtSize(val)); }

    this.updateSrcryBoxSettings();
  }



  public updateSquishGrowthWMaxNudgeAmount(val: number) : void {

    this.PropertyMaster.SquishGrowthWMaxNudgeAmountSetting.params.next(val);
    this.PropertyMaster.SquishGrowthWMaxNudgeAmountSetting.setting.next(val);

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateSquishGrowthHMaxNudgeAmount(val: number) : void {

    this.PropertyMaster.SquishGrowthHMaxNudgeAmountSetting.params.next(val);
    this.PropertyMaster.SquishGrowthHMaxNudgeAmountSetting.setting.next(val);

    this.updateSrcryBoxSettings();

  }
  
  
  
  
  
  
  
  public updateStretchShrinkWStart(val: number) : void {
    const defaultSize : number = 1;

    this.PropertyMaster.StretchShrinkWStartSetting.params.next(val);

    if(val === 0){ this.PropertyMaster.StretchShrinkWStartSetting.setting.next(CreateScreenSize(defaultSize)); }
    else { this.PropertyMaster.StretchShrinkWStartSetting.setting.next(CreateScreenSize(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateStretchShrinkHStart(val: number) : void {
    const defaultSize : number = 1;

    if(val === 0){ this.PropertyMaster.StretchShrinkHStartSetting.setting.next(CreateScreenSize(defaultSize)); }
    else { this.PropertyMaster.StretchShrinkHStartSetting.setting.next(CreateScreenSize(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateStretchShrinkWSpeed(val: number) : void {

    this.PropertyMaster.StretchShrinkWSpeedSetting.params.next(val);
    this.PropertyMaster.StretchShrinkWSpeedSetting.setting.next(val);

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateStretchShrinkHSpeed(val: number) : void {

    this.PropertyMaster.StretchShrinkHSpeedSetting.params.next(val);
    this.PropertyMaster.StretchShrinkHSpeedSetting.setting.next(val);

    this.updateSrcryBoxSettings();

  }



  public updateStretchShrinkWMin(val: MtSizeOptionType) : void {
    const defaultSize: MtSizeOptionType = '1';

    this.PropertyMaster.StretchShrinkWMinSetting.params.next(val);

    if(val === '--'){ this.PropertyMaster.StretchShrinkWMinSetting.setting.next(CreateMtSize(defaultSize)); }
    else { this.PropertyMaster.StretchShrinkWMinSetting.setting.next(CreateMtSize(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateStretchShrinkHMin(val: MtSizeOptionType) : void {
    const defaultSize: MtSizeOptionType = '1';

    this.PropertyMaster.StretchShrinkHMinSetting.params.next(val);

    if(val === '--'){ this.PropertyMaster.StretchShrinkHMinSetting.setting.next(CreateMtSize(defaultSize)); }
    else { this.PropertyMaster.StretchShrinkHMinSetting.setting.next(CreateMtSize(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateStretchShrinkWMinNudgeScale(val: MtSizeOptionType) : void {
    const defaultSize: MtSizeOptionType = '1';

    this.PropertyMaster.StretchShrinkWMinNudgeScaleSetting.params.next(val);

    if(val === '--'){ this.PropertyMaster.StretchShrinkWMinNudgeScaleSetting.setting.next(CreateMtSize(defaultSize)); }
    else { this.PropertyMaster.StretchShrinkWMinNudgeScaleSetting.setting.next(CreateMtSize(val)); }

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateStretchShrinkHMinNudgeScale(val: MtSizeOptionType) : void {
    const defaultSize: MtSizeOptionType = '1';

    this.PropertyMaster.StretchShrinkHMinNudgeScaleSetting.params.next(val);

    if(val === '--'){ this.PropertyMaster.StretchShrinkHMinNudgeScaleSetting.setting.next(CreateMtSize(defaultSize)); }
    else { this.PropertyMaster.StretchShrinkHMinNudgeScaleSetting.setting.next(CreateMtSize(val)); }

    this.updateSrcryBoxSettings();
  }



  public updateStretchShrinkWMinNudgeAmount(val: number) : void {

    this.PropertyMaster.StretchShrinkWMinNudgeAmountSetting.params.next(val);
    this.PropertyMaster.StretchShrinkWMinNudgeAmountSetting.setting.next(val);

    this.updateSrcryBoxSettings();
  }
  
  
  
  public updateStretchShrinkHMinNudgeAmount(val: number) : void {

    this.PropertyMaster.StretchShrinkHMinNudgeAmountSetting.params.next(val);
    this.PropertyMaster.StretchShrinkHMinNudgeAmountSetting.setting.next(val);

    this.updateSrcryBoxSettings();

  }





  public updateSrcryBoxSettings(): void {
    const styles: StylingObserver = {};
    
    //CrushGap Properties
    this.PropertyMaster.CrushGapWSetting.setting.subscribe(val => styles[`--crushGap-w`] = CreateSrcryValue(val));
    this.PropertyMaster.CrushGapHSetting.setting.subscribe(val => styles[`--crushGap-h`] = CreateSrcryValue(val));



    //BaseSize Properties
    this.PropertyMaster.BaseSizeWSetting.setting.subscribe(val => styles[`--baseSize-w`] = (val === 'unset'? val : CreateSrcryValue(val)));
    this.PropertyMaster.BaseSizeWNudgeScaleSetting.setting.subscribe(val => styles[`--baseSize-w-nudgeScale`] = CreateSrcryValue(val));
    this.PropertyMaster.BaseSizeWNudgeAmountSetting.setting.subscribe(val => styles[`--baseSize-w-nudgeAmount`] = val);

    this.PropertyMaster.BaseSizeHSetting.setting.subscribe(val => styles[`--baseSize-h`] = (val === 'unset'? val : CreateSrcryValue(val)));
    this.PropertyMaster.BaseSizeHNudgeScaleSetting.setting.subscribe(val => styles[`--baseSize-h-nudgeScale`] = CreateSrcryValue(val));
    this.PropertyMaster.BaseSizeHNudgeAmountSetting.setting.subscribe(val => styles[`--baseSize-h-nudgeAmount`] = val);
    
    

    //EdgeChase Properties
    this.PropertyMaster.EdgeChaseWSetting.setting.subscribe(val => styles[`--edgeChase-w`] = (val === 'unset'? val : CreateSrcryValue(val)));
    this.PropertyMaster.EdgeChaseWNudgeScaleSetting.setting.subscribe(val => styles[`--edgeChase-w-nudgeScale`] = CreateSrcryValue(val));
    this.PropertyMaster.EdgeChaseWNudgeAmountSetting.setting.subscribe(val => styles[`--edgeChase-w-nudgeAmount`] = val);

    this.PropertyMaster.EdgeChaseHSetting.setting.subscribe(val => styles[`--edgeChase-h`] = (val === 'unset'? val : CreateSrcryValue(val)));
    this.PropertyMaster.EdgeChaseHNudgeScaleSetting.setting.subscribe(val => styles[`--edgeChase-h-nudgeScale`] = CreateSrcryValue(val));
    this.PropertyMaster.EdgeChaseHNudgeAmountSetting.setting.subscribe(val => styles[`--edgeChase-h-nudgeAmount`] = val);
    
    
    
    //ChaseStop Properties
    this.PropertyMaster.ChaseStopWSetting.setting.subscribe(val => styles[`--chaseStop-w`] = (val === 'unset'? val : CreateSrcryValue(val)));
    this.PropertyMaster.ChaseStopWNudgeScaleSetting.setting.subscribe(val => styles[`--chaseStop-w-nudgeScale`] = CreateSrcryValue(val));
    this.PropertyMaster.ChaseStopWNudgeAmountSetting.setting.subscribe(val => styles[`--chaseStop-w-nudgeAmount`] = val);

    this.PropertyMaster.ChaseStopHSetting.setting.subscribe(val => styles[`--chaseStop-h`] = (val === 'unset'? val : CreateSrcryValue(val)));
    this.PropertyMaster.ChaseStopHNudgeScaleSetting.setting.subscribe(val => styles[`--chaseStop-h-nudgeScale`] = CreateSrcryValue(val));
    this.PropertyMaster.ChaseStopHNudgeAmountSetting.setting.subscribe(val => styles[`--chaseStop-h-nudgeAmount`] = val);

    
    
    //SquishGrowth Properties
    this.PropertyMaster.SquishGrowthWStartSetting.setting.subscribe(val => styles['--squishGrowth-w-start'] = val);
    this.PropertyMaster.SquishGrowthWSpeedSetting.setting.subscribe(val => styles['--squishGrowth-w-speed'] = val);
    this.PropertyMaster.SquishGrowthWMaxSetting.setting.subscribe(val => styles['--squishGrowth-w-max'] = CreateSrcryValue(val));
    this.PropertyMaster.SquishGrowthWMaxNudgeScaleSetting.setting.subscribe(val => styles['--squishGrowth-w-max-nudgeScale'] = CreateSrcryValue(val));
    this.PropertyMaster.SquishGrowthWMaxNudgeAmountSetting.setting.subscribe(val => styles['--squishGrowth-w-max-nudgeAmount'] = val);
    
    this.PropertyMaster.SquishGrowthHStartSetting.setting.subscribe(val => styles['--squishGrowth-h-start'] = val);
    this.PropertyMaster.SquishGrowthHSpeedSetting.setting.subscribe(val => styles['--squishGrowth-h-speed'] = val);
    this.PropertyMaster.SquishGrowthHMaxSetting.setting.subscribe(val => styles['--squishGrowth-h-max'] = CreateSrcryValue(val));
    this.PropertyMaster.SquishGrowthHMaxNudgeScaleSetting.setting.subscribe(val => styles['--squishGrowth-h-max-nudgeScale'] = CreateSrcryValue(val));
    this.PropertyMaster.SquishGrowthHMaxNudgeAmountSetting.setting.subscribe(val => styles['--squishGrowth-h-max-nudgeAmount'] = val);
    
    
    
    //StretchShrink Prpoerties
    this.PropertyMaster.StretchShrinkWStartSetting.setting.subscribe(val => styles['--stretchShrink-w-start'] = val);
    this.PropertyMaster.StretchShrinkWSpeedSetting.setting.subscribe(val => styles['--stretchShrink-w-speed'] = val);
    this.PropertyMaster.StretchShrinkWMinSetting.setting.subscribe(val => styles['--stretchShrink-w-min'] = CreateSrcryValue(val));
    this.PropertyMaster.StretchShrinkWMinNudgeScaleSetting.setting.subscribe(val => styles['--stretchShrink-w-min-nudgeScale'] = CreateSrcryValue(val));
    this.PropertyMaster.StretchShrinkWMinNudgeAmountSetting.setting.subscribe(val => styles['--stretchShrink-w-min-nudgeAmount'] = val);
    
    this.PropertyMaster.StretchShrinkHStartSetting.setting.subscribe(val => styles['--stretchShrink-h-start'] = val);
    this.PropertyMaster.StretchShrinkHSpeedSetting.setting.subscribe(val => styles['--stretchShrink-h-speed'] = val);
    this.PropertyMaster.StretchShrinkHMinSetting.setting.subscribe(val => styles['--stretchShrink-h-min'] = CreateSrcryValue(val));
    this.PropertyMaster.StretchShrinkHMinNudgeScaleSetting.setting.subscribe(val => styles['--stretchShrink-h-min-nudgeScale'] = CreateSrcryValue(val));
    this.PropertyMaster.StretchShrinkHMinNudgeAmountSetting.setting.subscribe(val => styles['--stretchShrink-h-min-nudgeAmount'] = val);



    //console.log(styles);
    this.SrcryBoxStyles.next(styles);
  }

  public getSrcryBoxStyles(): BehaviorSubject<StylingObserver> { return this.SrcryBoxStyles; }
}
