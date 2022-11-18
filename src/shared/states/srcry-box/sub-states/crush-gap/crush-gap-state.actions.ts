import { MtSizeOptionType } from "@srcry-types";

export namespace CrushGapActions{

    export class SetCrushGapW{
        static readonly type = '[CrushGap] W Update';
        constructor(public newSize: MtSizeOptionType){}
    }
    
    export class SetCrushGapH{
        static readonly type = '[CrushGap] H Update';
        constructor(public newSize: MtSizeOptionType){}
    }

}