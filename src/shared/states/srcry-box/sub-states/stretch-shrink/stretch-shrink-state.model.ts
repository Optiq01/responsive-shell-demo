import { MtSizeOptionType } from "@srcry-types";

export interface StretchShrinkStateModel{
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