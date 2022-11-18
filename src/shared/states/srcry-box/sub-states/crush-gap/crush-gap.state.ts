import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store } from "@ngxs/store";
import { CrushGapStateModel } from "./crush-gap-state.model";
import { CrushGapActions as acn } from "./crush-gap-state.actions";
import { SrcryBoxActions as boxAcn } from "../../srcry-box-state.actions";

@State<CrushGapStateModel>({
    name: 'crushGapState',
    defaults: {
        CrushGapW : '1',
        CrushGapH : '1'
    }
})

@Injectable()
export class CrushGapState{

    constructor(private store: Store){}

    @Action(acn.SetCrushGapW)
    setCrushGapW(ctx: StateContext<CrushGapStateModel>, action: acn.SetCrushGapW){

        ctx.patchState({ CrushGapW: action.newSize });
        this.store.dispatch(new boxAcn.CreateCrushGapW(action.newSize));

    }



    @Action(acn.SetCrushGapH)
    setCrushGapH(ctx: StateContext<CrushGapStateModel>, action: acn.SetCrushGapH){

        ctx.patchState({ CrushGapH: action.newSize });
        this.store.dispatch(new boxAcn.CreateCrushGapH(action.newSize));

    }
}