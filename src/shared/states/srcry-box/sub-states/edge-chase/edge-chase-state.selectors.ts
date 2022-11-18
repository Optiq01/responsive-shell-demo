import { Selector } from "@ngxs/store";
import { EdgeChaseStateModel } from "./edge-chase-state.model";
import { EdgeChaseState } from "./edge-chase.state";

export class EdgeChaseSelectors{

    @Selector([EdgeChaseState])
    static getEdgeChaseW(state: EdgeChaseStateModel){ return state.EdgeChaseW; }

    @Selector([EdgeChaseState])
    static getEdgeChaseWNudgeScale(state: EdgeChaseStateModel){ return state.EdgeChaseWNudgeScale; }

    @Selector([EdgeChaseState])
    static getEdgeChaseWNudgeAmount(state: EdgeChaseStateModel){ return state.EdgeChaseWNudgeAmount; }
    
    @Selector([EdgeChaseState])
    static getEdgeChaseH(state: EdgeChaseStateModel){ return state.EdgeChaseH; }

    @Selector([EdgeChaseState])
    static getEdgeChaseHNudgeScale(state: EdgeChaseStateModel){ return state.EdgeChaseHNudgeScale; }

    @Selector([EdgeChaseState])
    static getEdgeChaseHNudgeAmount(state: EdgeChaseStateModel){ return state.EdgeChaseHNudgeAmount; }

}