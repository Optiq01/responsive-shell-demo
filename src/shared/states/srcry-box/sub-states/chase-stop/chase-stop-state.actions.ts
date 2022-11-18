import { BoxSizeParams, MtSizeOptionType } from "@srcry-types";

export namespace ChaseStopActions{

    export class SetChaseStopW{
        static readonly type = '[ChaseStop] W Update';
        constructor(public newSize: BoxSizeParams){}
    }

    export class SetChaseStopWNudgeScale{
        static readonly type = '[ChaseStop] W-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class SetChaseStopWNudgeAmount{
        static readonly type = '[ChaseStop] W-NudgeAmout Update';
        constructor(public newAmount: number){}
    }
    
    export class SetChaseStopH{
        static readonly type = '[ChaseStop] H Update';
        constructor(public newSize: BoxSizeParams){}
    }

    export class SetChaseStopHNudgeScale{
        static readonly type = '[ChaseStop] H-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class SetChaseStopHNudgeAmount{
        static readonly type = '[ChaseStop] H-NudgeAmout Update';
        constructor(public newAmount: number){}
    }

}