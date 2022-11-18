import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store } from "@ngxs/store";
import { BaseSizeActions as acn } from "./base-size-state.actions";
import { BaseSizeStateModel } from "./base-size-state.model";
import { SrcryBoxActions as boxAcn } from "../../srcry-box-state.actions";

@State<BaseSizeStateModel>({
    name: 'baseSizeState',
    defaults: {
        BaseSizeW            : {size:'loMed', scale: '1', speed:'8'},
        BaseSizeWNudgeScale  : '1',
        BaseSizeWNudgeAmount : 0,
        BaseSizeH            : {size:'small', scale: '1', speed:'5'},
        BaseSizeHNudgeScale  : '1',
        BaseSizeHNudgeAmount : 0
    }
})
@Injectable()
export class BaseSizeState{

    constructor(private store: Store){}

    @Action(acn.SetBaseSizeW)
    setBaseSizeW(ctx: StateContext<BaseSizeStateModel>, action: acn.SetBaseSizeW){

        ctx.patchState({ BaseSizeW: action.newSize });
        this.store.dispatch(new boxAcn.CreateBaseSizeW(action.newSize));

    }

    
    
    @Action(acn.SetBaseSizeWNudgeScale)
    setBaseSizeWNudgeScale(ctx: StateContext<BaseSizeStateModel>, action: acn.SetBaseSizeWNudgeScale){

        ctx.patchState({ BaseSizeWNudgeScale: action.newScale });
        this.store.dispatch(new boxAcn.CreateBaseSizeWNudgeScale(action.newScale));

    }

    
    
    @Action(acn.SetBaseSizeWNudgeAmount)
    setBaseSizeWNudgeAmount(ctx: StateContext<BaseSizeStateModel>, action: acn.SetBaseSizeWNudgeAmount){

        ctx.patchState({ BaseSizeWNudgeAmount: action.newAmount });
        this.store.dispatch(new boxAcn.CreateBaseSizeWNudgeAmount(action.newAmount));

    }
    
    
    
    @Action(acn.SetBaseSizeH)
    setBaseSizeH(ctx: StateContext<BaseSizeStateModel>, action: acn.SetBaseSizeH){

        ctx.patchState({ BaseSizeH: action.newSize });
        this.store.dispatch(new boxAcn.CreateBaseSizeH(action.newSize));

    }

    
    
    @Action(acn.SetBaseSizeHNudgeScale)
    setBaseSizeHNudgeScale(ctx: StateContext<BaseSizeStateModel>, action: acn.SetBaseSizeHNudgeScale){

        ctx.patchState({ BaseSizeHNudgeScale: action.newScale });
        this.store.dispatch(new boxAcn.CreateBaseSizeHNudgeScale(action.newScale));

    }

    
    
    @Action(acn.SetBaseSizeHNudgeAmount)
    setBaseSizeHNudgeAmount(ctx: StateContext<BaseSizeStateModel>, action: acn.SetBaseSizeHNudgeAmount){

        ctx.patchState({ BaseSizeHNudgeAmount: action.newAmount });
        this.store.dispatch(new boxAcn.CreateBaseSizeHNudgeAmount(action.newAmount));

    }

}