import { Selector } from "@ngxs/store";
import { BaseSizeStateModel } from "./base-size-state.model";
import { BaseSizeState } from "./base-size.state";

export class BaseSizeSelectors{

    @Selector([BaseSizeState])
    static getBaseSizeW(state: BaseSizeStateModel){ return state.BaseSizeW; }

    @Selector([BaseSizeState])
    static getBaseSizeWNudgeScale(state: BaseSizeStateModel){ return state.BaseSizeWNudgeScale; }

    @Selector([BaseSizeState])
    static getBaseSizeWNudgeAmount(state: BaseSizeStateModel){ return state.BaseSizeWNudgeAmount; }
    
    @Selector([BaseSizeState])
    static getBaseSizeH(state: BaseSizeStateModel){ return state.BaseSizeH; }

    @Selector([BaseSizeState])
    static getBaseSizeHNudgeScale(state: BaseSizeStateModel){ return state.BaseSizeHNudgeScale; }

    @Selector([BaseSizeState])
    static getBaseSizeHNudgeAmount(state: BaseSizeStateModel){ return state.BaseSizeHNudgeAmount; }

}