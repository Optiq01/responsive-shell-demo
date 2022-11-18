import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store } from "@ngxs/store";
import { StretchShrinkStateModel } from "./stretch-shrink-state.model";
import { StretchShrinkActions as acn } from "./stretch-shrink-state.actions";
import { SrcryBoxActions as boxAcn } from "../../srcry-box-state.actions";

@State<StretchShrinkStateModel>({
    name: 'stretchShrinkState',
    defaults: {
        StretchShrinkWStart          : '1px',
        StretchShrinkWSpeed          : 0,
        StretchShrinkWMin            : '1',
        StretchShrinkWMinNudgeScale  : '1',
        StretchShrinkWMinNudgeAmount : 0,
        StretchShrinkHStart          : '1px',
        StretchShrinkHSpeed          : 0,
        StretchShrinkHMin            : '1',
        StretchShrinkHMinNudgeScale  : '1',
        StretchShrinkHMinNudgeAmount : 0
    }
})
@Injectable()
export class StretchShrinkState{

    constructor(private store: Store){}

    @Action(acn.SetStretchShrinkWStart)
    setStretchShrinkWStart(ctx: StateContext<StretchShrinkStateModel>, action: acn.SetStretchShrinkWStart){

        ctx.patchState({ StretchShrinkWStart: action.newPoint });
        this.store.dispatch(new boxAcn.CreateStretchShrinkWStart(action.newPoint));

    }



    @Action(acn.SetStretchShrinkWSpeed)
    setStretchShrinkWSpeed(ctx: StateContext<StretchShrinkStateModel>, action: acn.SetStretchShrinkWSpeed){

        ctx.patchState({ StretchShrinkWSpeed: action.newSpeed });
        this.store.dispatch(new boxAcn.CreateStretchShrinkWSpeed(action.newSpeed));

    }



    @Action(acn.SetStretchShrinkWMin)
    setStretchShrinkWMin(ctx: StateContext<StretchShrinkStateModel>, action: acn.SetStretchShrinkWMin){

        ctx.patchState({ StretchShrinkWMin: action.newMin });
        this.store.dispatch(new boxAcn.CreateStretchShrinkWMin(action.newMin));

    }



    @Action(acn.SetStretchShrinkWMinNudgeScale)
    setStretchShrinkWMinNudgeScale(ctx: StateContext<StretchShrinkStateModel>, action: acn.SetStretchShrinkWMinNudgeScale){

        ctx.patchState({ StretchShrinkWMinNudgeScale: action.newScale });
        this.store.dispatch(new boxAcn.CreateStretchShrinkWMinNudgeScale(action.newScale));

    }



    @Action(acn.SetStretchShrinkWMinNudgeAmount)
    setStretchShrinkWMinNudgeAmount(ctx: StateContext<StretchShrinkStateModel>, action: acn.SetStretchShrinkWMinNudgeAmount){

        ctx.patchState({ StretchShrinkWMinNudgeAmount: action.newAmount });
        this.store.dispatch(new boxAcn.CreateStretchShrinkWMinNudgeAmount(action.newAmount));
        
    }
    
    
    
    @Action(acn.SetStretchShrinkHStart)
    setStretchShrinkHStart(ctx: StateContext<StretchShrinkStateModel>, action: acn.SetStretchShrinkHStart){

        ctx.patchState({ StretchShrinkHStart: action.newPoint });
        this.store.dispatch(new boxAcn.CreateStretchShrinkHStart(action.newPoint));

    }



    @Action(acn.SetStretchShrinkHSpeed)
    setStretchShrinkHSpeed(ctx: StateContext<StretchShrinkStateModel>, action: acn.SetStretchShrinkHSpeed){

        ctx.patchState({ StretchShrinkHSpeed: action.newSpeed });
        this.store.dispatch(new boxAcn.CreateStretchShrinkHSpeed(action.newSpeed));

    }



    @Action(acn.SetStretchShrinkHMin)
    setStretchShrinkHMin(ctx: StateContext<StretchShrinkStateModel>, action: acn.SetStretchShrinkHMin){

        ctx.patchState({ StretchShrinkHMin: action.newMin });
        this.store.dispatch(new boxAcn.CreateStretchShrinkHMin(action.newMin));

    }



    @Action(acn.SetStretchShrinkHMinNudgeScale)
    setStretchShrinkHMinNudgeScale(ctx: StateContext<StretchShrinkStateModel>, action: acn.SetStretchShrinkHMinNudgeScale){

        ctx.patchState({ StretchShrinkHMinNudgeScale: action.newScale });
        this.store.dispatch(new boxAcn.CreateStretchShrinkHMinNudgeScale(action.newScale));

    }



    @Action(acn.SetStretchShrinkHMinNudgeAmount)
    setStretchShrinkHMinNudgeAmount(ctx: StateContext<StretchShrinkStateModel>, action: acn.SetStretchShrinkHMinNudgeAmount){

        ctx.patchState({ StretchShrinkHMinNudgeAmount: action.newAmount });
        this.store.dispatch(new boxAcn.CreateStretchShrinkHMinNudgeAmount(action.newAmount));

    }

}