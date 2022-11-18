import { BoxSizeParams, MtSizeOptionType } from "@srcry-types";

export namespace SquishGrowthActions{

    export class SetSquishGrowthWStart{
        static readonly type = '[SquishGrowth] W-Start Update';
        constructor(public newPoint: string){}
    }

    export class SetSquishGrowthWSpeed{
        static readonly type = '[SquishGrowth] W-Speed Update';
        constructor(public newSpeed: number){}
    }

    export class SetSquishGrowthWMax{
        static readonly type = '[SquishGrowth] W-Max Update'
        constructor(public newMax: BoxSizeParams){}
    }

    export class SetSquishGrowthWMaxNudgeScale{
        static readonly type = '[SquishGrowth] W-Max-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class SetSquishGrowthWMaxNudgeAmount{
        static readonly type = '[SquishGrowth] W-Max-NudgeAmount Update';
        constructor(public newAmount: number){}
    }

    export class SetSquishGrowthHStart{
        static readonly type = '[SquishGrowth] H-Start Update';
        constructor(public newPoint: string){}
    }

    export class SetSquishGrowthHSpeed{
        static readonly type = '[SquishGrowth] H-Speed Update';
        constructor(public newSpeed: number){}
    }

    export class SetSquishGrowthHMax{
        static readonly type = '[SquishGrowth] H-Max Update'
        constructor(public newMax: BoxSizeParams){}
    }

    export class SetSquishGrowthHMaxNudgeScale{
        static readonly type = '[SquishGrowth] H-Max-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class SetSquishGrowthHMaxNudgeAmount{
        static readonly type = '[SquishGrowth] H-Max-NudgeAmount Update';
        constructor(public newAmount: number){}
    }

}