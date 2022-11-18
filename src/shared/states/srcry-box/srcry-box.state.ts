import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { SrcryBoxStateModel } from "./srcry-box-state.model";
import { SrcryBoxActions as acn } from "./srcry-box-state.actions";
import { CreateSrcryValue } from "src/app/functions/create-srcry-value";
import { CreateBoxSizeSetting } from "src/app/functions/create-box-size-setting";
import { CreateMtSize } from "src/app/functions/create-mt-size-setting";

@State<SrcryBoxStateModel>({
    name     : 'srcryBoxState',
    defaults : {
        '--crushGap-w' : 'var(--mt-1)',
        '--crushGap-h' : 'var(--mt-1)',



        '--baseSize-w'             : 'var(--loMed-1-5)',
        '--baseSize-w-nudgeScale'  : 'var(--mt-1)',
        '--baseSize-w-nudgeAmount' : 0,
        
        '--baseSize-h'             : 'var(--small-1-1)',
        '--baseSize-h-nudgeScale'  : 'var(--mt-1)',
        '--baseSize-h-nudgeAmount' : 0,
        
        
        
        '--edgeChase-w'             : 'var(--crushGap-w)',
        '--edgeChase-w-nudgeScale'  : 'var(--mt-1)',
        '--edgeChase-w-nudgeAmount' : 0,

        '--edgeChase-h'             : 'var(--crushGap-h)',
        '--edgeChase-h-nudgeScale'  : 'var(--mt-1)',
        '--edgeChase-h-nudgeAmount' : 0,
        
        
        
        '--chaseStop-w'             : 'var(--BaseSize-w-master)',
        '--chaseStop-w-nudgeScale'  : 'var(--mt-1)',
        '--chaseStop-w-nudgeAmount' : 0,

        '--chaseStop-h'             : 'var(--BaseSize-h-master)',
        '--chaseStop-h-nudgeScale'  : 'var(--mt-1)',
        '--chaseStop-h-nudgeAmount' : 0,
        
        
        
        '--squishGrowth-w-start'           : '1px',
        '--squishGrowth-w-speed'           : 0,
        '--squishGrowth-w-max'             : 'var(--micro-1-1)',
        '--squishGrowth-w-max-nudgeScale'  : 'var(--mt-1)',
        '--squishGrowth-w-max-nudgeAmount' : 0,

        '--squishGrowth-h-start'           : '1px',
        '--squishGrowth-h-speed'           : 0,
        '--squishGrowth-h-max'             : 'var(--micro-1-1)',
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
    }
})
@Injectable()
export class SrcryBoxState{

    constructor(/*private dataService: ResponsiveShellService*/){}

    /*@Selector([SrcryBoxState])
    static getStyles(state: SrcryBoxStateModel){ return state; }

    @Selector([SrcryBoxState.getStyles])
    static getSrcryStyles(style: string){ return style; }*/

    @Action(acn.CreateCrushGapW)
    createCrushGapW(state: StateContext<SrcryBoxStateModel>, action: acn.CreateCrushGapW){
        state.patchState({['--crushGap-w']: CreateSrcryValue(CreateMtSize(action.newSize))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateCrushGapH)
    createCrushGapH(state: StateContext<SrcryBoxStateModel>, action: acn.CreateCrushGapH){
        state.patchState({['--crushGap-h']: CreateSrcryValue(CreateMtSize(action.newSize))});
        //this.dataService.initStyles();
    }


    
    
    
    @Action(acn.CreateBaseSizeW)
    createBaseSizeW(state: StateContext<SrcryBoxStateModel>, action: acn.CreateBaseSizeW){
        state.patchState({['--baseSize-w']: CreateSrcryValue(CreateBoxSizeSetting(action.newSize))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateBaseSizeWNudgeScale)
    createBaseSizeWNudgeScale(state: StateContext<SrcryBoxStateModel>, action: acn.CreateBaseSizeWNudgeScale){
        state.patchState({['--baseSize-w-nudgeScale']: CreateSrcryValue(CreateMtSize(action.newScale))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateBaseSizeWNudgeAmount)
    createBaseSizeWNudgeAmount(state: StateContext<SrcryBoxStateModel>, action: acn.CreateBaseSizeWNudgeAmount){
        state.patchState({['--baseSize-w-nudgeAmount']: action.newAmount});
        //this.dataService.initStyles();
    }
    
    
    
    @Action(acn.CreateBaseSizeH)
    createBaseSizeH(state: StateContext<SrcryBoxStateModel>, action: acn.CreateBaseSizeH){
        state.patchState({['--baseSize-h']: CreateSrcryValue(CreateBoxSizeSetting(action.newSize))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateBaseSizeHNudgeScale)
    createBaseSizeHNudgeScale(state: StateContext<SrcryBoxStateModel>, action: acn.CreateBaseSizeHNudgeScale){
        state.patchState({['--baseSize-h-nudgeScale']: CreateSrcryValue(CreateMtSize(action.newScale))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateBaseSizeHNudgeAmount)
    createBaseSizeHNudgeAmount(state: StateContext<SrcryBoxStateModel>, action: acn.CreateBaseSizeHNudgeAmount){
        state.patchState({['--baseSize-h-nudgeAmount']: action.newAmount});
        //this.dataService.initStyles();
    }
    
    
    
    
    
    @Action(acn.CreateEdgeChaseW)
    createEdgeChaseW(state: StateContext<SrcryBoxStateModel>, action: acn.CreateEdgeChaseW){
        state.patchState({['--edgeChase-w']: CreateSrcryValue(CreateBoxSizeSetting(action.newSize))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateEdgeChaseWNudgeScale)
    createEdgeChaseWNudgeScale(state: StateContext<SrcryBoxStateModel>, action: acn.CreateEdgeChaseWNudgeScale){
        state.patchState({['--edgeChase-w-nudgeScale']: CreateSrcryValue(CreateMtSize(action.newScale))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateEdgeChaseWNudgeAmount)
    createEdgeChaseWNudgeAmount(state: StateContext<SrcryBoxStateModel>, action: acn.CreateEdgeChaseWNudgeAmount){
        state.patchState({['--edgeChase-w-nudgeAmount']: action.newAmount});
        //this.dataService.initStyles();
    }
    
    
    
    @Action(acn.CreateEdgeChaseH)
    createEdgeChaseH(state: StateContext<SrcryBoxStateModel>, action: acn.CreateEdgeChaseH){
        state.patchState({['--edgeChase-h']: CreateSrcryValue(CreateBoxSizeSetting(action.newSize))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateEdgeChaseHNudgeScale)
    createEdgeChaseHNudgeScale(state: StateContext<SrcryBoxStateModel>, action: acn.CreateEdgeChaseHNudgeScale){
        state.patchState({['--edgeChase-h-nudgeScale']: CreateSrcryValue(CreateMtSize(action.newScale))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateEdgeChaseHNudgeAmount)
    createEdgeChaseHNudgeAmount(state: StateContext<SrcryBoxStateModel>, action: acn.CreateEdgeChaseHNudgeAmount){
        state.patchState({['--edgeChase-h-nudgeAmount']: action.newAmount});
        //this.dataService.initStyles();
    }
    
    
    
    
    
    @Action(acn.CreateChaseStopW)
    createChaseStopW(state: StateContext<SrcryBoxStateModel>, action: acn.CreateChaseStopW){
        state.patchState({['--chaseStop-w']: CreateSrcryValue(CreateBoxSizeSetting(action.newSize))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateChaseStopWNudgeScale)
    createChaseStopWNudgeScale(state: StateContext<SrcryBoxStateModel>, action: acn.CreateChaseStopWNudgeScale){
        state.patchState({['--chaseStop-w-nudgeScale']: CreateSrcryValue(CreateMtSize(action.newScale))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateChaseStopWNudgeAmount)
    createChaseStopWNudgeAmount(state: StateContext<SrcryBoxStateModel>, action: acn.CreateChaseStopWNudgeAmount){
        state.patchState({['--chaseStop-w-nudgeAmount']: action.newAmount});
        //this.dataService.initStyles();
    }
    
    
    
    @Action(acn.CreateChaseStopH)
    createChaseStopH(state: StateContext<SrcryBoxStateModel>, action: acn.CreateChaseStopH){
        state.patchState({['--chaseStop-h']: CreateSrcryValue(CreateBoxSizeSetting(action.newSize))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateChaseStopHNudgeScale)
    createChaseStopHNudgeScale(state: StateContext<SrcryBoxStateModel>, action: acn.CreateChaseStopHNudgeScale){
        state.patchState({['--chaseStop-h-nudgeScale']: CreateSrcryValue(CreateMtSize(action.newScale))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateChaseStopHNudgeAmount)
    createChaseStopHNudgeAmount(state: StateContext<SrcryBoxStateModel>, action: acn.CreateChaseStopHNudgeAmount){
        state.patchState({['--chaseStop-h-nudgeAmount']: action.newAmount});
        //this.dataService.initStyles();
    }





    @Action(acn.CreateSquishGrowthWStart)
    createSquishGrowthWStart(state: StateContext<SrcryBoxStateModel>, action: acn.CreateSquishGrowthWStart){
        state.patchState({['--squishGrowth-w-start']: action.newPoint});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateSquishGrowthWSpeed)
    createSquishGrowthWSpeed(state: StateContext<SrcryBoxStateModel>, action: acn.CreateSquishGrowthWSpeed){
        state.patchState({['--squishGrowth-w-speed']: action.newSpeed});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateSquishGrowthWMax)
    createSquishGrowthWMax(state: StateContext<SrcryBoxStateModel>, action: acn.CreateSquishGrowthWMax){
        state.patchState({['--squishGrowth-w-max']: CreateSrcryValue(CreateBoxSizeSetting(action.newMax))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateSquishGrowthWMaxNudgeScale)
    createSquishGrowthWMaxNudgeScale(state: StateContext<SrcryBoxStateModel>, action: acn.CreateSquishGrowthWMaxNudgeScale){
        state.patchState({['--squishGrowth-w-max-nudgeScale']: CreateSrcryValue(CreateMtSize(action.newScale))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateSquishGrowthWMaxNudgeAmount)
    createSquishGrowthWMaxNudgeAmount(state: StateContext<SrcryBoxStateModel>, action: acn.CreateSquishGrowthWMaxNudgeAmount){
        state.patchState({['--squishGrowth-w-max-nudgeAmount']: action.newAmount});
        //this.dataService.initStyles();
    }
    
    
    
    @Action(acn.CreateSquishGrowthHStart)
    createSquishGrowthHStart(state: StateContext<SrcryBoxStateModel>, action: acn.CreateSquishGrowthHStart){
        state.patchState({['--squishGrowth-h-start']: action.newPoint});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateSquishGrowthHSpeed)
    createSquishGrowthHSpeed(state: StateContext<SrcryBoxStateModel>, action: acn.CreateSquishGrowthHSpeed){
        state.patchState({['--squishGrowth-h-speed']: action.newSpeed});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateSquishGrowthHMax)
    createSquishGrowthHMax(state: StateContext<SrcryBoxStateModel>, action: acn.CreateSquishGrowthHMax){
        state.patchState({['--squishGrowth-h-max']: CreateSrcryValue(CreateBoxSizeSetting(action.newMax))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateSquishGrowthHMaxNudgeScale)
    createSquishGrowthHMaxNudgeScale(state: StateContext<SrcryBoxStateModel>, action: acn.CreateSquishGrowthHMaxNudgeScale){
        state.patchState({['--squishGrowth-h-max-nudgeScale']: CreateSrcryValue(CreateMtSize(action.newScale))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateSquishGrowthHMaxNudgeAmount)
    createSquishGrowthHMaxNudgeAmount(state: StateContext<SrcryBoxStateModel>, action: acn.CreateSquishGrowthHMaxNudgeAmount){
        state.patchState({['--squishGrowth-h-max-nudgeAmount']: action.newAmount});
        //this.dataService.initStyles();
    }
    
    
    
    
    
    
    @Action(acn.CreateStretchShrinkWStart)
    createStretchShrinkWStart(state: StateContext<SrcryBoxStateModel>, action: acn.CreateStretchShrinkWStart){
        state.patchState({['--stretchShrink-w-start']: action.newPoint});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateStretchShrinkWSpeed)
    createStretchShrinkWSpeed(state: StateContext<SrcryBoxStateModel>, action: acn.CreateStretchShrinkWSpeed){
        state.patchState({['--stretchShrink-w-speed']: action.newSpeed});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateStretchShrinkWMin)
    createStretchShrinkWMin(state: StateContext<SrcryBoxStateModel>, action: acn.CreateStretchShrinkWMin){
        state.patchState({['--stretchShrink-w-min']: CreateSrcryValue(CreateMtSize(action.newMin))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateStretchShrinkWMinNudgeScale)
    createStretchShrinkWMinNudgeScale(state: StateContext<SrcryBoxStateModel>, action: acn.CreateStretchShrinkWMinNudgeScale){
        state.patchState({['--stretchShrink-w-min-nudgeScale']: CreateSrcryValue(CreateMtSize(action.newScale))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateStretchShrinkWMinNudgeAmount)
    createStretchShrinkWMinNudgeAmount(state: StateContext<SrcryBoxStateModel>, action: acn.CreateStretchShrinkWMinNudgeAmount){
        state.patchState({['--stretchShrink-w-min-nudgeAmount']: action.newAmount});
        //this.dataService.initStyles();
    }
    
    
    
    @Action(acn.CreateStretchShrinkHStart)
    createStretchShrinkHStart(state: StateContext<SrcryBoxStateModel>, action: acn.CreateStretchShrinkHStart){
        state.patchState({['--squishGrowth-h-start']: action.newPoint});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateStretchShrinkHSpeed)
    createStretchShrinkHSpeed(state: StateContext<SrcryBoxStateModel>, action: acn.CreateStretchShrinkHSpeed){
        state.patchState({['--stretchShrink-h-speed']: action.newSpeed});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateStretchShrinkHMin)
    createStretchShrinkHMin(state: StateContext<SrcryBoxStateModel>, action: acn.CreateStretchShrinkHMin){
        state.patchState({['--stretchShrink-h-min']: CreateSrcryValue(CreateMtSize(action.newMin))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateStretchShrinkHMinNudgeScale)
    createStretchShrinkHMinNudgeScale(state: StateContext<SrcryBoxStateModel>, action: acn.CreateStretchShrinkHMinNudgeScale){
        state.patchState({['--stretchShrink-h-min-nudgeScale']: CreateSrcryValue(CreateMtSize(action.newScale))});
        //this.dataService.initStyles();
    }
    
    @Action(acn.CreateStretchShrinkHMinNudgeAmount)
    createStretchShrinkHMinNudgeAmount(state: StateContext<SrcryBoxStateModel>, action: acn.CreateStretchShrinkHMinNudgeAmount){
        state.patchState({['--stretchShrink-h-min-nudgeAmount']: action.newAmount});
        //this.dataService.initStyles();
    }

}