import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store } from "@ngxs/store";
import { EdgeChaseStateModel } from "./edge-chase-state.model";
import { EdgeChaseActions as acn } from "./edge-chase-state.actions";
import { SrcryBoxActions as boxAcn } from "../../srcry-box-state.actions";

@State<EdgeChaseStateModel>({
    name: 'edgeChaseState',
    defaults:{
        EdgeChaseW            : {size:'--', scale: '--', speed:'--'},
        EdgeChaseWNudgeScale  : '1',
        EdgeChaseWNudgeAmount : 0,
        EdgeChaseH            : {size:'--', scale: '--', speed:'--'},
        EdgeChaseHNudgeScale  : '1',
        EdgeChaseHNudgeAmount : 0
    }
})
@Injectable()
export class EdgeChaseState{

    constructor(private store: Store){}

    @Action(acn.SetEdgeChaseW)
    setEdgeChaseW(ctx: StateContext<EdgeChaseStateModel>, action: acn.SetEdgeChaseW){

        ctx.patchState({ EdgeChaseW: action.newSize });
        this.store.dispatch(new boxAcn.CreateEdgeChaseW(action.newSize));

    }



    @Action(acn.SetEdgeChaseWNudgeScale)
    setEdgeChaseWNudgeScale(ctx: StateContext<EdgeChaseStateModel>, action: acn.SetEdgeChaseWNudgeScale){

        ctx.patchState({ EdgeChaseWNudgeScale: action.newScale });
        this.store.dispatch(new boxAcn.CreateEdgeChaseWNudgeScale(action.newScale));

    }



    @Action(acn.SetEdgeChaseWNudgeAmount)
    setEdgeChaseWNudgeAmount(ctx: StateContext<EdgeChaseStateModel>, action: acn.SetEdgeChaseWNudgeAmount){

        ctx.patchState({ EdgeChaseWNudgeAmount: action.newAmount });
        this.store.dispatch(new boxAcn.CreateEdgeChaseWNudgeAmount(action.newAmount));
        
    }
    
    
    
    @Action(acn.SetEdgeChaseH)
    setEdgeChaseH(ctx: StateContext<EdgeChaseStateModel>, action: acn.SetEdgeChaseH){

        ctx.patchState({ EdgeChaseH: action.newSize });
        this.store.dispatch(new boxAcn.CreateEdgeChaseH(action.newSize));

    }



    @Action(acn.SetEdgeChaseHNudgeScale)
    setEdgeChaseHNudgeScale(ctx: StateContext<EdgeChaseStateModel>, action: acn.SetEdgeChaseHNudgeScale){

        ctx.patchState({ EdgeChaseHNudgeScale: action.newScale });
        this.store.dispatch(new boxAcn.CreateEdgeChaseWNudgeScale(action.newScale));

    }



    @Action(acn.SetEdgeChaseHNudgeAmount)
    setEdgeChaseHNudgeAmount(ctx: StateContext<EdgeChaseStateModel>, action: acn.SetEdgeChaseHNudgeAmount){

        ctx.patchState({ EdgeChaseHNudgeAmount: action.newAmount });
        this.store.dispatch(new boxAcn.CreateEdgeChaseWNudgeAmount(action.newAmount));

    }

}