import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { BoxSizeObserver, FontSizeObserver, LineSizeObserver, MtSizeObserver, NumberObserver, StringObserver } from "./responsive-shell.serviceB";
import { BaseSizeSelectors as baseSel } from "src/shared/states/srcry-box/sub-states/base-size/base-size-state.selectors";
import { CreateSrcryValue } from "src/app/functions/create-srcry-value";
import { CreateBoxSizeSetting } from "src/app/functions/create-box-size-setting";
import { SrcryBoxSelectors } from "src/shared/states/srcry-box/srcry-box.selectors";
import { SrcryBoxStateModel } from "src/shared/states/srcry-box/srcry-box-state.model";

export interface SrcryBoxModel{

    '--crushGap-w': string;
    '--crushGap-h': string;

    '--baseSizeW'             : string;
    '--baseSize-w-nudgeScale'  : string;
    '--baseSize-w-nudgeAmount' : number;
    
    '--baseSize-h'             : string;
    '--baseSize-h-nudgeScale'  : string;
    '--baseSize-h-nudgeAmount' : number;
    
    
    
    '--edgeChase-w'             : string;
    '--edgeChase-w-nudgeScale'  : string;
    '--edgeChase-w-nudgeAmount' : number;

    '--edgeChase-h'             : string;
    '--edgeChase-h-nudgeScale'  : string;
    '--edgeChase-h-nudgeAmount' : number;
    
    
    
    '--chaseStop-w'             : string;
    '--chaseStop-w-nudgeScale'  : string;
    '--chaseStop-w-nudgeAmount' : number;

    '--chaseStop-h'             : string;
    '--chaseStop-h-nudgeScale'  : string;
    '--chaseStop-h-nudgeAmount' : number;
    
    
    
    '--squishGrowth-w-start'           : string;
    '--squishGrowth-w-speed'           : number;
    '--squishGrowth-w-max'             : string;
    '--squishGrowth-w-max-nudgeScale'  : string;
    '--squishGrowth-w-max-nudgeAmount' : number;

    '--squishGrowth-h-start'           : string;
    '--squishGrowth-h-speed'           : number;
    '--squishGrowth-h-max'             : string;
    '--squishGrowth-h-max-nudgeScale'  : string;
    '--squishGrowth-h-max-nudgeAmount' : number;
    
    
    
    '--stretchShrink-w-start'           : string;
    '--stretchShrink-w-speed'           : number;
    '--stretchShrink-w-min'             : string;
    '--stretchShrink-w-min-nudgeScale'  : string;
    '--stretchShrink-w-min-nudgeAmount' : number;

    '--stretchShrink-h-start'           : string;
    '--stretchShrink-h-speed'           : number;
    '--stretchShrink-h-min'             : string;
    '--stretchShrink-h-min-nudgeScale'  : string;
    '--stretchShrink-h-min-nudgeAmount' : number;

}

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

export interface SrcryPropObject{
    [key: string]: string | number;
}


export interface StylingObserver{ [key: string]: string | number; }

@Injectable({
    providedIn: 'root'
})

export class ResponsiveShellService{

    SrcryProps$: BehaviorSubject<SrcryBoxStateModel> = new BehaviorSubject<SrcryBoxStateModel>({
        '--crushGap-w' : 'var(--mt-1)',
        '--crushGap-h' : 'var(--mt-1)',



        '--baseSize-w'             : 'unset',
        '--baseSize-w-nudgeScale'  : 'var(--mt-1)',
        '--baseSize-w-nudgeAmount' : 0,
        
        '--baseSize-h'             : 'unset',
        '--baseSize-h-nudgeScale'  : 'var(--mt-1)',
        '--baseSize-h-nudgeAmount' : 0,
        
        
        
        '--edgeChase-w'             : 'var(--crushGap-w)',
        '--edgeChase-w-nudgeScale'  : 'var(--mt-1)',
        '--edgeChase-w-nudgeAmount' : 0,

        '--edgeChase-h'             : 'var(--crushGap-h)',
        '--edgeChase-h-nudgeScale'  : 'var(--mt-1)',
        '--edgeChase-h-nudgeAmount' : 0,
        
        
        
        '--chaseStop-w'             : 'var(--baseSize-w)',
        '--chaseStop-w-nudgeScale'  : 'var(--mt-1)',
        '--chaseStop-w-nudgeAmount' : 0,

        '--chaseStop-h'             : 'var(--baseSize-h)',
        '--chaseStop-h-nudgeScale'  : 'var(--mt-1)',
        '--chaseStop-h-nudgeAmount' : 0,
        
        
        
        '--squishGrowth-w-start'           : '1px',
        '--squishGrowth-w-speed'           : 0,
        '--squishGrowth-w-max'             : 'var(--mt-1)',
        '--squishGrowth-w-max-nudgeScale'  : 'var(--mt-1)',
        '--squishGrowth-w-max-nudgeAmount' : 0,

        '--squishGrowth-h-start'           : '1px',
        '--squishGrowth-h-speed'           : 0,
        '--squishGrowth-h-max'             : 'var(--mt-1)',
        '--squishGrowth-h-max-nudgeScale'  : 'var(--mt-1)',
        '--squishGrowth-h-max-nudgeAmount' : 0,
        
        
        
        '--stretchShrink-w-start'           : '1px',
        '--stretchShrink-w-speed'           : 0,
        '--stretchShrink-w-min'             : 'var(--mt-1)',
        '--stretchShrink-w-min-nudgeScale'  : 'var(--mt-1)',
        '--stretchShrink-w-min-nudgeAmount' : 0,

        '--stretchShrink-h-start'           : '1px',
        '--stretchShrink-h-speed'           : 0,
        '--stretchShrink-h-min'             : 'var(--mt-1)',
        '--stretchShrink-h-min-nudgeScale'  : 'var(--mt-1)',
        '--stretchShrink-h-min-nudgeAmount' : 0

    });

    Loaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private store: Store){
        this.initStyles();
    }

    public initStyles():void{
        this.store.select(SrcryBoxSelectors.getSrcryBoxStyles).subscribe(a=>{
            //this.SrcryProps['--crushGap-w'] = a.crushGapW;
            this.SrcryProps$.next(a);
            this.Loaded.next(true);

        });
    }

    public getStyleObject(): BehaviorSubject<SrcryBoxStateModel>{ return this.SrcryProps$; }

    public loadStatus(): BehaviorSubject<boolean>{ return this.Loaded; }



}