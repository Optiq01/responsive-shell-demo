import { Selector, StateContext } from "@ngxs/store";
import { Observable } from "rxjs";
import { SrcryBoxStateModel } from "./srcry-box-state.model";
import { SrcryBoxState } from "./srcry-box.state";


export interface SrcryBoxOberver{
    [key: string]: Observable<string | number>;
}

export class SrcryBoxSelectors{

    @Selector([SrcryBoxState])
    static getSrcryBoxStyles(state: SrcryBoxStateModel){ return state; }

    /*@Selector([SrcryBoxState])
    static getBaseSizeH(state: SrcryBoxStateModel){ return state['--baseSize-h']; }
    
    @Selector([SrcryBoxState])
    static getBaseSizeW(state: SrcryBoxStateModel){ return state['--baseSize-h']; }*/
}
