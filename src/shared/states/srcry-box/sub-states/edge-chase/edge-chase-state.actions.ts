import { BoxSizeParams, MtSizeOptionType } from "@srcry-types";

export namespace EdgeChaseActions{

    export class SetEdgeChaseW{
        static readonly type = '[EdgeChase] W Update';
        constructor(public newSize: BoxSizeParams){}
    }

    export class SetEdgeChaseWNudgeScale{
        static readonly type = '[EdgeChase] W-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class SetEdgeChaseWNudgeAmount{
        static readonly type = '[EdgeChase] W-NudgeAmount Update';
        constructor(public newAmount: number){}
    }
    
    export class SetEdgeChaseH{
        static readonly type = '[EdgeChase] H Update';
        constructor(public newSize: BoxSizeParams){}
    }

    export class SetEdgeChaseHNudgeScale{
        static readonly type = '[EdgeChase] H-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class SetEdgeChaseHNudgeAmount{
        static readonly type = '[EdgeChase] H-NudgeAmount Update';
        constructor(public newAmount: number){}
    }

}