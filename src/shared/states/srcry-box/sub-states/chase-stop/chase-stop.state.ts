import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store } from "@ngxs/store";
import { ChaseStopStateModel } from "./chase-stop-state.model";
import { ChaseStopActions as acn } from "./chase-stop-state.actions";
import { SrcryBoxActions as boxAcn } from "../../srcry-box-state.actions";

@State<ChaseStopStateModel>({
    name: 'chaseStopState',
    defaults: {
        ChaseStopW            : {size:'--', scale: '--', speed:'--'},
        ChaseStopWNudgeScale  : '1',
        ChaseStopWNudgeAmount : 0,
        ChaseStopH            : {size:'--', scale: '--', speed:'--'},
        ChaseStopHNudgeScale  : '1',
        ChaseStopHNudgeAmount : 0
    }
})
@Injectable()
export class ChaseStopState{

    constructor(private store: Store){}

    @Action(acn.SetChaseStopW)
    setChaseStopW(ctx: StateContext<ChaseStopStateModel>, action: acn.SetChaseStopW){
        
        ctx.patchState({ ChaseStopW: action.newSize });
        this.store.dispatch(new boxAcn.CreateChaseStopW(action.newSize));

    }



    @Action(acn.SetChaseStopWNudgeScale)
    setChaseStopWNudgeScale(ctx: StateContext<ChaseStopStateModel>, action: acn.SetChaseStopWNudgeScale){

        ctx.patchState({ ChaseStopWNudgeScale: action.newScale });
        this.store.dispatch(new boxAcn.CreateChaseStopWNudgeScale(action.newScale));

    }



    @Action(acn.SetChaseStopWNudgeAmount)
    setChaseStopWNudgeAmount(ctx: StateContext<ChaseStopStateModel>, action: acn.SetChaseStopWNudgeAmount){

        ctx.patchState({ ChaseStopWNudgeAmount: action.newAmount });
        this.store.dispatch(new boxAcn.CreateChaseStopWNudgeAmount(action.newAmount));

    }
    
    
    
    @Action(acn.SetChaseStopH)
    setChaseStopH(ctx: StateContext<ChaseStopStateModel>, action: acn.SetChaseStopH){
        
        ctx.patchState({ ChaseStopH: action.newSize });
        this.store.dispatch(new boxAcn.CreateChaseStopH(action.newSize));

    }



    @Action(acn.SetChaseStopHNudgeScale)
    setChaseStopHNudgeScale(ctx: StateContext<ChaseStopStateModel>, action: acn.SetChaseStopHNudgeScale){

        ctx.patchState({ ChaseStopHNudgeScale: action.newScale });
        this.store.dispatch(new boxAcn.CreateChaseStopHNudgeScale(action.newScale));

    }



    @Action(acn.SetChaseStopHNudgeAmount)
    setChaseStopHNudgeAmount(ctx: StateContext<ChaseStopStateModel>, action: acn.SetChaseStopHNudgeAmount){

        ctx.patchState({ ChaseStopHNudgeAmount: action.newAmount });
        this.store.dispatch(new boxAcn.CreateChaseStopHNudgeAmount(action.newAmount));

    }
}