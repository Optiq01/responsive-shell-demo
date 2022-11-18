import { Selector } from "@ngxs/store";
import { StretchShrinkStateModel } from "./stretch-shrink-state.model";
import { StretchShrinkState } from "./stretch-shrink.state";

export class StretchShrinkSelectors{

    @Selector([StretchShrinkState])
    static getStretchShrinkWStart(state: StretchShrinkStateModel){ return state.StretchShrinkWStart; }
    
    @Selector([StretchShrinkState])
    static getStretchShrinkWSpeed(state: StretchShrinkStateModel){ return state.StretchShrinkWSpeed; }
    
    @Selector([StretchShrinkState])
    static getStretchShrinkWMin(state: StretchShrinkStateModel){ return state.StretchShrinkWMin; }
    
    @Selector([StretchShrinkState])
    static getStretchShrinkWMinNudgeScale(state: StretchShrinkStateModel){ return state.StretchShrinkWMinNudgeScale; }
    
    @Selector([StretchShrinkState])
    static getStretchShrinkWMinNudgeAmount(state: StretchShrinkStateModel){ return state.StretchShrinkWMinNudgeAmount; }
    
    @Selector([StretchShrinkState])
    static getStretchShrinkHStart(state: StretchShrinkStateModel){ return state.StretchShrinkHStart; }
    
    @Selector([StretchShrinkState])
    static getStretchShrinkHSpeed(state: StretchShrinkStateModel){ return state.StretchShrinkHSpeed; }
    
    @Selector([StretchShrinkState])
    static getStretchShrinkHMin(state: StretchShrinkStateModel){ return state.StretchShrinkHMin; }
    
    @Selector([StretchShrinkState])
    static getStretchShrinkHMinNudgeScale(state: StretchShrinkStateModel){ return state.StretchShrinkHMinNudgeScale; }
    
    @Selector([StretchShrinkState])
    static getStretchShrinkHMinNudgeAmount(state: StretchShrinkStateModel){ return state.StretchShrinkHMinNudgeAmount; }

}