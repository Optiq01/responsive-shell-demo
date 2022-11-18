import { MtSizeOptionType } from "@srcry-types";

export namespace StretchShrinkActions{

    export class SetStretchShrinkWStart{
        static readonly type = '[StretchShrink] W-Start Update';
        constructor(public newPoint: string){}
    }

    export class SetStretchShrinkWSpeed{
        static readonly type = '[StretchShrink] W-Speed Update';
        constructor(public newSpeed: number){}
    }

    export class SetStretchShrinkWMin{
        static readonly type = '[StretchSrhink] W-Min Update';
        constructor(public newMin: MtSizeOptionType){}
    }

    export class SetStretchShrinkWMinNudgeScale{
        static readonly type = '[StretchSrink] W-Min-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class SetStretchShrinkWMinNudgeAmount{
        static readonly type = '[StretchShrink] W-Min-NudgeAmount Update';
        constructor(public newAmount: number){}
    }
    
    export class SetStretchShrinkHStart{
        static readonly type = '[StretchShrink] H-Start Update';
        constructor(public newPoint: string){}
    }

    export class SetStretchShrinkHSpeed{
        static readonly type = '[StretchShrink] H-Speed Update';
        constructor(public newSpeed: number){}
    }

    export class SetStretchShrinkHMin{
        static readonly type = '[StretchSrhink] H-Min Update';
        constructor(public newMin: MtSizeOptionType){}
    }

    export class SetStretchShrinkHMinNudgeScale{
        static readonly type = '[StretchSrink] H-Min-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class SetStretchShrinkHMinNudgeAmount{
        static readonly type = '[StretchShrink] H-Min-NudgeAmount Update';
        constructor(public newAmount: number){}
    }


}