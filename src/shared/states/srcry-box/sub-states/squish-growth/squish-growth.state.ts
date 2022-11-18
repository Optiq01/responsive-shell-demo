import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store } from "@ngxs/store";
import { SquishGrowthStateModel } from "./squish-growth-state.model";
import { SquishGrowthActions as acn } from "./squish-growth-sate.actions";
import { SrcryBoxActions as boxAcn } from "../../srcry-box-state.actions";

@State<SquishGrowthStateModel>({
    name: 'squishGrowthState',
    defaults: {
        SquishGrowthWStart          : '1px',
        SquishGrowthWSpeed          : 0,
        SquishGrowthWMax            : {size:'micro', scale:'1', speed: '1'},
        SquishGrowthWMaxNudgeScale  : '1',
        SquishGrowthWMaxNudgeAmount : 0,
        SquishGrowthHStart          : '1px',
        SquishGrowthHSpeed          : 0,
        SquishGrowthHMax            : {size:'micro', scale:'1', speed: '1'},
        SquishGrowthHMaxNudgeScale  : '1',
        SquishGrowthHMaxNudgeAmount : 0
    }
})
@Injectable()
export class SquishGrowthState{

    constructor(private store: Store){}

    @Action(acn.SetSquishGrowthWStart)
    setSquishGrowthWStart(ctx: StateContext<SquishGrowthStateModel>, action: acn.SetSquishGrowthWStart){

        ctx.patchState({ SquishGrowthWStart: action.newPoint });
        this.store.dispatch(new boxAcn.CreateSquishGrowthWStart(action.newPoint));

    }
    
    
    
    @Action(acn.SetSquishGrowthWSpeed)
    setSquishGrowthWSpeed(ctx: StateContext<SquishGrowthStateModel>, action: acn.SetSquishGrowthWSpeed){

        ctx.patchState({ SquishGrowthWSpeed: action.newSpeed });
        this.store.dispatch(new boxAcn.CreateSquishGrowthWSpeed(action.newSpeed));

    }



    @Action(acn.SetSquishGrowthWMax)
    setSquishGrowthWMax(ctx: StateContext<SquishGrowthStateModel>, action: acn.SetSquishGrowthWMax){

        ctx.patchState({ SquishGrowthWMax: action.newMax });
        this.store.dispatch(new boxAcn.CreateSquishGrowthWMax(action.newMax));

    }



    @Action(acn.SetSquishGrowthWMaxNudgeScale)
    setSquishGrowthWMaxNudgeScale(ctx: StateContext<SquishGrowthStateModel>, action: acn.SetSquishGrowthWMaxNudgeScale){

        ctx.patchState({ SquishGrowthWMaxNudgeScale: action.newScale });
        this.store.dispatch(new boxAcn.CreateSquishGrowthWMaxNudgeScale(action.newScale));

    }



    @Action(acn.SetSquishGrowthWMaxNudgeAmount)
    setSquishGrowthWMaxNudgeAmount(ctx: StateContext<SquishGrowthStateModel>, action: acn.SetSquishGrowthWMaxNudgeAmount){

        ctx.patchState({ SquishGrowthWMaxNudgeAmount: action.newAmount });
        this.store.dispatch(new boxAcn.CreateSquishGrowthWMaxNudgeAmount(action.newAmount));
        
    }
    
    
    
    @Action(acn.SetSquishGrowthHStart)
    setSquishGrowthHStart(ctx: StateContext<SquishGrowthStateModel>, action: acn.SetSquishGrowthHStart){

        ctx.patchState({ SquishGrowthHStart: action.newPoint });
        this.store.dispatch(new boxAcn.CreateSquishGrowthHStart(action.newPoint));

    }



    @Action(acn.SetSquishGrowthHSpeed)
    setSquishGrowthHSpeed(ctx: StateContext<SquishGrowthStateModel>, action: acn.SetSquishGrowthHSpeed){

        ctx.patchState({ SquishGrowthHSpeed: action.newSpeed });
        this.store.dispatch(new boxAcn.CreateSquishGrowthHSpeed(action.newSpeed));

    }



    @Action(acn.SetSquishGrowthHMax)
    setSquishGrowthHMax(ctx: StateContext<SquishGrowthStateModel>, action: acn.SetSquishGrowthHMax){

        ctx.patchState({ SquishGrowthHMax: action.newMax });
        this.store.dispatch(new boxAcn.CreateSquishGrowthHMax(action.newMax));

    }



    @Action(acn.SetSquishGrowthHMaxNudgeScale)
    setSquishGrowthHMaxNudgeScale(ctx: StateContext<SquishGrowthStateModel>, action: acn.SetSquishGrowthHMaxNudgeScale){

        ctx.patchState({ SquishGrowthHMaxNudgeScale: action.newScale });
        this.store.dispatch(new boxAcn.CreateSquishGrowthHMaxNudgeScale(action.newScale));

    }



    @Action(acn.SetSquishGrowthHMaxNudgeAmount)
    setSquishGrowthHMaxNudgeAmount(ctx: StateContext<SquishGrowthStateModel>, action: acn.SetSquishGrowthHMaxNudgeAmount){

        ctx.patchState({ SquishGrowthHMaxNudgeAmount: action.newAmount });
        this.store.dispatch(new boxAcn.CreateSquishGrowthHMaxNudgeAmount(action.newAmount));

    }

}