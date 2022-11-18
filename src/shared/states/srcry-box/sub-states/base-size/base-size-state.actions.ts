
import { BoxSizeParams, MtSizeOptionType } from "@srcry-types";

export namespace BaseSizeActions {

    export class SetBaseSizeW{
        static readonly type = '[BaseSize] W Update';
        constructor(public newSize: BoxSizeParams){}
    }

    export class SetBaseSizeWNudgeScale{
        static readonly type = '[BaseSize] W-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class SetBaseSizeWNudgeAmount{
        static readonly type = '[BaseSize] W-NudgeAmount Update';
        constructor(public newAmount: number){}
    }
    
    
    export class SetBaseSizeH{
        static readonly type = '[BaseSize] H Update';
        constructor(public newSize: BoxSizeParams){}
    }

    export class SetBaseSizeHNudgeScale{
        static readonly type = '[BaseSize] H-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class SetBaseSizeHNudgeAmount{
        static readonly type = '[BaseSize] H-NudgeAmount Update';
        constructor(public newAmount: number){}
    }
}