import { BoxSizeParams, MtSizeOptionType } from "@srcry-types";

export interface ChaseStopStateModel{
    ChaseStopW                   : BoxSizeParams;
    ChaseStopWNudgeScale         : MtSizeOptionType;
    ChaseStopWNudgeAmount        : number;
    ChaseStopH                   : BoxSizeParams;
    ChaseStopHNudgeScale         : MtSizeOptionType;
    ChaseStopHNudgeAmount        : number;
}