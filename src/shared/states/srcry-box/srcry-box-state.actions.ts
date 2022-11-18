import { BoxSizeParams, MtSizeOptionType } from "@srcry-types";

export namespace SrcryBoxActions{

    export class CreateCrushGapW{
        static readonly type = '[SrcryBox] CrushGap-W Update';
        constructor(public newSize: MtSizeOptionType){}
    }
    
    export class CreateCrushGapH{
        static readonly type = '[SrcryBox] CrushGap-H Update';
        constructor(public newSize: MtSizeOptionType){}
    }



    
    
    export class CreateBaseSizeW{
        static readonly type = '[SrcryBox] BaseSize-W Update';
        constructor(public newSize: BoxSizeParams){}
    }

    export class CreateBaseSizeWNudgeScale{
        static readonly type = '[SrcryBox] BaseSize-W-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class CreateBaseSizeWNudgeAmount{
        static readonly type = '[SrcryBox] BaseSize-W-NudgeAmount Update';
        constructor(public newAmount: number){}
    }
    
    
    export class CreateBaseSizeH{
        static readonly type = '[SrcryBox] BaseSize-H Update';
        constructor(public newSize: BoxSizeParams){}
    }

    export class CreateBaseSizeHNudgeScale{
        static readonly type = '[Srcrybox] BaseSize-H-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class CreateBaseSizeHNudgeAmount{
        static readonly type = '[SrcryBox] BaseSize-H-NudgeAmount Update';
        constructor(public newAmount: number){}
    }



    
    
    export class CreateEdgeChaseW{
        static readonly type = '[SrcryBox] EdgeChase-W Update';
        constructor(public newSize: BoxSizeParams){}
    }

    export class CreateEdgeChaseWNudgeScale{
        static readonly type = '[SrcryBox] EdgeChase-W-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class CreateEdgeChaseWNudgeAmount{
        static readonly type = '[SrcryBox] EdgeChase-W-NudgeAmount Update';
        constructor(public newAmount: number){}
    }

    
    export class CreateEdgeChaseH{
        static readonly type = '[Srcrybox] EdgeChase-H Update';
        constructor(public newSize: BoxSizeParams){}
    }

    export class CreateEdgeChaseHNudgeScale{
        static readonly type = '[SrcryBox] EdgeChase-H-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class CreateEdgeChaseHNudgeAmount{
        static readonly type = '[SrcryBox] EdgeChase-H-NudgeAmount Update';
        constructor(public newAmount: number){}
    }
    
    
    
    
    
    export class CreateChaseStopW{
        static readonly type = '[SrcryBox] ChaseStop-W Update';
        constructor(public newSize: BoxSizeParams){}
    }

    export class CreateChaseStopWNudgeScale{
        static readonly type = '[SrcryBox] ChaseStop-W-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class CreateChaseStopWNudgeAmount{
        static readonly type = '[SrcryBox] ChaseStop-W-NudgeAmout Update';
        constructor(public newAmount: number){}
    }
    

    export class CreateChaseStopH{
        static readonly type = '[SrcryBox] ChaseStop-H Update';
        constructor(public newSize: BoxSizeParams){}
    }

    export class CreateChaseStopHNudgeScale{
        static readonly type = '[SrcryBox] ChaseStop-H-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class CreateChaseStopHNudgeAmount{
        static readonly type = '[SrcryBox] ChaseStop-H-NudgeAmout Update';
        constructor(public newAmount: number){}
    }





    export class CreateSquishGrowthWStart{
        static readonly type = '[SrcryBox] SquishGrowth-W-Start Update';
        constructor(public newPoint: string){}
    }

    export class CreateSquishGrowthWSpeed{
        static readonly type = '[SrcryBox] SquishGrowth-W-Speed Update';
        constructor(public newSpeed: number){}
    }

    export class CreateSquishGrowthWMax{
        static readonly type = '[SrcryBox] SquishGrowth-W-Max Update'
        constructor(public newMax: BoxSizeParams){}
    }

    export class CreateSquishGrowthWMaxNudgeScale{
        static readonly type = '[SrcryBox] SquishGrowth-W-Max-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class CreateSquishGrowthWMaxNudgeAmount{
        static readonly type = '[SrcryBox] SquishGrowth-W-Max-NudgeAmount Update';
        constructor(public newAmount: number){}
    }


    export class CreateSquishGrowthHStart{
        static readonly type = '[SrcryBox] SquishGrowth-H-Start Update';
        constructor(public newPoint: string){}
    }

    export class CreateSquishGrowthHSpeed{
        static readonly type = '[SrcryBox] SquishGrowth-H-Speed Update';
        constructor(public newSpeed: number){}
    }

    export class CreateSquishGrowthHMax{
        static readonly type = '[SrcryBox] SquishGrowth-H-Max Update'
        constructor(public newMax: BoxSizeParams){}
    }

    export class CreateSquishGrowthHMaxNudgeScale{
        static readonly type = '[SrcryBox] SquishGrowth-H-Max-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class CreateSquishGrowthHMaxNudgeAmount{
        static readonly type = '[SrcryBox] SquishGrowth-H-Max-NudgeAmount Update';
        constructor(public newAmount: number){}
    }



    
    
    export class CreateStretchShrinkWStart{
        static readonly type = '[SrcryBox] StretchShrink-W-Start Update';
        constructor(public newPoint: string){}
    }

    export class CreateStretchShrinkWSpeed{
        static readonly type = '[SrcryBox] StretchShrink-W-Speed Update';
        constructor(public newSpeed: number){}
    }

    export class CreateStretchShrinkWMin{
        static readonly type = '[SrcryBox] StretchSrhink-W-Min Update';
        constructor(public newMin: MtSizeOptionType){}
    }

    export class CreateStretchShrinkWMinNudgeScale{
        static readonly type = '[SrcryBox] StretchSrink-W-Min-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class CreateStretchShrinkWMinNudgeAmount{
        static readonly type = '[SrcryBox] StretchShrink-W-Min-NudgeAmount Update';
        constructor(public newAmount: number){}
    }


    
    export class CreateStretchShrinkHStart{
        static readonly type = '[SrcryBox] StretchShrink-H-Start Update';
        constructor(public newPoint: string){}
    }

    export class CreateStretchShrinkHSpeed{
        static readonly type = '[SrcryBox] StretchShrink-H-Speed Update';
        constructor(public newSpeed: number){}
    }

    export class CreateStretchShrinkHMin{
        static readonly type = '[SrcryBox] StretchSrhink-H-Min Update';
        constructor(public newMin: MtSizeOptionType){}
    }

    export class CreateStretchShrinkHMinNudgeScale{
        static readonly type = '[SrcryBox] StretchSrink-H-Min-NudgeScale Update';
        constructor(public newScale: MtSizeOptionType){}
    }

    export class CreateStretchShrinkHMinNudgeAmount{
        static readonly type = '[SrcryBox] StretchShrink-H-Min-NudgeAmount Update';
        constructor(public newAmount: number){}
    }

}