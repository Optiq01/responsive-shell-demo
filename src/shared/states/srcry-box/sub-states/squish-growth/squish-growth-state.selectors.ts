import { Selector } from "@ngxs/store";
import { SquishGrowthStateModel } from "./squish-growth-state.model";
import { SquishGrowthState } from "./squish-growth.state";

export class SquishGrowthSelectors{

    @Selector([SquishGrowthState])
    static getSquishGrowthWStart(state: SquishGrowthStateModel){ return state.SquishGrowthWStart; }
    
    @Selector([SquishGrowthState])
    static getSquishGrowthWSpeed(state: SquishGrowthStateModel){ return state.SquishGrowthWSpeed; }
    
    @Selector([SquishGrowthState])
    static getSquishGrowthWMax(state: SquishGrowthStateModel){ return state.SquishGrowthWMax; }
    
    @Selector([SquishGrowthState])
    static getSquishGrowthWMaxNudgeScale(state: SquishGrowthStateModel){ return state.SquishGrowthWMaxNudgeScale; }
    
    @Selector([SquishGrowthState])
    static getSquishGrowthWMaxNudgeAmount(state: SquishGrowthStateModel){ return state.SquishGrowthWMaxNudgeAmount; }
    
    @Selector([SquishGrowthState])
    static getSquishGrowthHStart(state: SquishGrowthStateModel){ return state.SquishGrowthHStart; }
    
    @Selector([SquishGrowthState])
    static getSquishGrowthHSpeed(state: SquishGrowthStateModel){ return state.SquishGrowthHSpeed; }
    
    @Selector([SquishGrowthState])
    static getSquishGrowthHMax(state: SquishGrowthStateModel){ return state.SquishGrowthHMax; }
    
    @Selector([SquishGrowthState])
    static getSquishGrowthHMaxNudgeScale(state: SquishGrowthStateModel){ return state.SquishGrowthHMaxNudgeScale; }
    
    @Selector([SquishGrowthState])
    static getSquishGrowthHMaxNudgeAmount(state: SquishGrowthStateModel){ return state.SquishGrowthHMaxNudgeAmount; }

}