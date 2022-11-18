import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";
import { BoxSizeParams, MtSizeOptionType } from "@srcry-types";


export interface SrcryBoxStateModel{
    CrushGapW                    : MtSizeOptionType;
    CrushGapH                    : MtSizeOptionType;
    BaseSizeW                    : BoxSizeParams;
    BaseSizeWNudgeScale          : MtSizeOptionType;
    BaseSizeWNudgeAmount         : number;
    BaseSizeH                    : BoxSizeParams;
    BaseSizeHNudgeScale          : MtSizeOptionType;
    BaseSizeHNudgeAmount         : number;
    EdgeChaseW                   : BoxSizeParams;
    EdgeChaseWNudgeScale         : MtSizeOptionType;
    EdgeChaseWNudgeAmount        : number;
    EdgeChaseH                   : BoxSizeParams;
    EdgeChaseHNudgeScale         : MtSizeOptionType;
    EdgeChaseHNudgeAmount        : number;
    ChaseStopW                   : BoxSizeParams;
    ChaseStopWNudgeScale         : MtSizeOptionType;
    ChaseStopWNudgeAmount        : number;
    ChaseStopH                   : BoxSizeParams;
    ChaseStopHNudgeScale         : MtSizeOptionType;
    ChaseStopHNudgeAmount        : number;
    SquishGrowthWStart           : string;
    SquishGrowthWSpeed           : number;
    SquishGrowthWMax             : MtSizeOptionType;
    SquishGrowthWMaxNudgeScale   : MtSizeOptionType;
    SquishGrowthWMaxNudgeAmount  : number;
    SquishGrowthHStart           : string;
    SquishGrowthHSpeed           : number;
    SquishGrowthHMax             : MtSizeOptionType;
    SquishGrowthHMaxNudgeScale   : MtSizeOptionType;
    SquishGrowthHMaxNudgeAmount  : number;
    StretchShrinkWStart          : string;
    StretchShrinkWSpeed          : number;
    StretchShrinkWMin            : MtSizeOptionType;
    StretchShrinkWMinNudgeScale  : MtSizeOptionType;
    StretchShrinkWMinNudgeAmount : number;
    StretchShrinkHStart          : string;
    StretchShrinkHSpeed          : number;
    StretchShrinkHMin            : MtSizeOptionType;
    StretchShrinkHMinNudgeScale  : MtSizeOptionType;
    StretchShrinkHMinNudgeAmount : number;
}

export namespace SrcryBoxStateActions {

    export class UpdateCrushGapW{
        static readonly type = '[CrushGap] W Update';
        constructor(public newSize: MtSizeOptionType){}
    }
    
    export class UpdateCrushGapH{
        static readonly type = '[CrushGap] H Update';
        constructor(public newSize: MtSizeOptionType){}
    }

    export class UpdateBaseSizeW{
        static readonly type = '[BaseSize] W Update';
        constructor(public newSize: BoxSizeParams){}
    }
    
    export class UpdateBaseSizeWNudgeScale{
        static readonly type = '[BaseSize] W-NudgeScale Update';
        constructor(public newSize: MtSizeOptionType){}
    }
    
    export class UpdateBaseSizeWNudgeAmount{
        static readonly type = '[BaseSize] W-NudgeAmount Update';
        constructor(public newSize: number){}
    }
    
    export class UpdateBaseSizeH{
        static readonly type = '[BaseSize] H Update';
        constructor(public newSize: BoxSizeParams){}
    }
    
    export class UpdateBaseSizeHNudgeScale{
        static readonly type = '[BaseSize] H-NudgeScale Update';
        constructor(public newSize: MtSizeOptionType){}
    }
    
    export class UpdateBaseSizeHNudgeAmount{
        static readonly type = '[BaseSize] H-NudgeAmount Update';
        constructor(public newSize: number){}
    }
    
    export class UpdateEdgeChaseW{
        static readonly type = '[EdgeChase] W Update';
        constructor(public newSize: BoxSizeParams){}
    }
    
    export class UpdateEdgeChaseWNudgeScale{
        static readonly type = '[EdgeChase] W-NudgeScale Update';
        constructor(public newSize: MtSizeOptionType){}
    }
    
    export class UpdateEdgeChaseWNudgeAmount{
        static readonly type = '[EdgeChase] W-NudgeAmount Update';
        constructor(public newSize: number){}
    }
    
    export class UpdateEdgeChaseH{
        static readonly type = '[EdgeChase] H Update';
        constructor(public newSize: BoxSizeParams){}
    }
    
    export class UpdateEdgeChaseHNudgeScale{
        static readonly type = '[EdgeChase] H-NudgeScale Update';
        constructor(public newSize: MtSizeOptionType){}
    }
    
    export class UpdateEdgeChaseHNudgeAmount{
        static readonly type = '[EdgeChase] H-NudgeAmount Update';
        constructor(public newSize: number){}
    }
    
    export class UpdateChaseStopW{
        static readonly type = '[ChaseStop] W Update';
        constructor(public newSize: BoxSizeParams){}
    }
    
    export class UpdateChaseStopWNudgeScale{
        static readonly type = '[ChaseStop] W-NudgeScale Update';
        constructor(public newSize: MtSizeOptionType){}
    }
    
    export class UpdateChaseStopWNudgeAmount{
        static readonly type = '[ChaseStop] W-NudgeAmount Update';
        constructor(public newSize: number){}
    }
    
    export class UpdateChaseStopH{
        static readonly type = '[ChaseStop] H Update';
        constructor(public newSize: BoxSizeParams){}
    }
    
    export class UpdateChaseStopHNudgeScale{
        static readonly type = '[ChaseStop] H-NudgeScale Update';
        constructor(public newSize: MtSizeOptionType){}
    }
    
    export class UpdateChaseStopHNudgeAmount{
        static readonly type = '[ChaseStop] H-NudgeAmount Update';
        constructor(public newSize: number){}
    }
}

@State<SrcryBoxStateModel>({
    name: 'srcryBoxState',
    defaults: {
        CrushGapW: '1',
        CrushGapH: '1',
        BaseSizeW: {size:'--', scale: '--', speed:'--'},
        BaseSizeWNudgeScale: '1',
        BaseSizeWNudgeAmount: 0,
        BaseSizeH: {size:'--', scale: '--', speed:'--'},
        BaseSizeHNudgeScale: '1',
        BaseSizeHNudgeAmount: 0,
        EdgeChaseW: {size:'--', scale: '--', speed:'--'},
        EdgeChaseWNudgeScale: '1',
        EdgeChaseWNudgeAmount: 0,
        EdgeChaseH: {size:'--', scale: '--', speed:'--'},
        EdgeChaseHNudgeScale: '1',
        EdgeChaseHNudgeAmount: 0,
        ChaseStopW: {size:'--', scale: '--', speed:'--'},
        ChaseStopWNudgeScale: '1',
        ChaseStopWNudgeAmount: 0,
        ChaseStopH: {size:'--', scale: '--', speed:'--'},
        ChaseStopHNudgeScale: '1',
        ChaseStopHNudgeAmount: 0,
        SquishGrowthWStart: '1px',
        SquishGrowthWSpeed: 0,
        SquishGrowthWMax: '1',
        SquishGrowthWMaxNudgeScale: '1',
        SquishGrowthWMaxNudgeAmount: 0,
        SquishGrowthHStart: '1px',
        SquishGrowthHSpeed: 0,
        SquishGrowthHMax: '1',
        SquishGrowthHMaxNudgeScale: '1',
        SquishGrowthHMaxNudgeAmount: 0,
        StretchShrinkWStart: '1px',
        StretchShrinkWSpeed: 0,
        StretchShrinkWMin: '1',
        StretchShrinkWMinNudgeScale: '1',
        StretchShrinkWMinNudgeAmount: 0,
        StretchShrinkHStart: '1px',
        StretchShrinkHSpeed: 0,
        StretchShrinkHMin: '1',
        StretchShrinkHMinNudgeScale: '1',
        StretchShrinkHMinNudgeAmount: 0
    }
})
@Injectable()
export class SrcryBoxState{}