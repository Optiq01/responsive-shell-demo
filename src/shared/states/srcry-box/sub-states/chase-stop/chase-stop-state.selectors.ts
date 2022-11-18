import { Selector } from "@ngxs/store";
import { ChaseStopStateModel } from "./chase-stop-state.model";
import { ChaseStopState } from "./chase-stop.state";

export class ChaseStopSelectors{

    @Selector([ChaseStopState])
    static getChaseStopW(state: ChaseStopStateModel){ return state.ChaseStopW; }

    @Selector([ChaseStopState])
    static getChaseStopWNudgeScale(state: ChaseStopStateModel){ return state.ChaseStopWNudgeScale; }

    @Selector([ChaseStopState])
    static getChaseStopWNudgeAmount(state: ChaseStopStateModel){ return state.ChaseStopWNudgeAmount; }
    
    @Selector([ChaseStopState])
    static getChaseStopH(state: ChaseStopStateModel){ return state.ChaseStopH; }

    @Selector([ChaseStopState])
    static getChaseStopHNudgeScale(state: ChaseStopStateModel){ return state.ChaseStopHNudgeScale; }

    @Selector([ChaseStopState])
    static getChaseStopHNudgeAmount(state: ChaseStopStateModel){ return state.ChaseStopHNudgeAmount; }

}