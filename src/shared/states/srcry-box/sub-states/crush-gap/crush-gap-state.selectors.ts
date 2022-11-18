import { Selector } from "@ngxs/store";
import { CrushGapStateModel } from "./crush-gap-state.model";
import { CrushGapState } from "./crush-gap.state";

export class CrushGapSelectors{

    @Selector([CrushGapState])
    static getCrushGapW(state: CrushGapStateModel){ return state.CrushGapW; } 
    
    @Selector([CrushGapState])
    static getCrushGapH(state: CrushGapStateModel){ return state.CrushGapH; } 

}