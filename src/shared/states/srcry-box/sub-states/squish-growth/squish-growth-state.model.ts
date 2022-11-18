import { BoxSizeParams, MtSizeOptionType } from "@srcry-types";

export interface SquishGrowthStateModel{
    SquishGrowthWStart          : string,
    SquishGrowthWSpeed          : number,
    SquishGrowthWMax            : BoxSizeParams,
    SquishGrowthWMaxNudgeScale  : MtSizeOptionType,
    SquishGrowthWMaxNudgeAmount : number,
    SquishGrowthHStart          : string,
    SquishGrowthHSpeed          : number,
    SquishGrowthHMax            : BoxSizeParams,
    SquishGrowthHMaxNudgeScale  : MtSizeOptionType,
    SquishGrowthHMaxNudgeAmount : number
}