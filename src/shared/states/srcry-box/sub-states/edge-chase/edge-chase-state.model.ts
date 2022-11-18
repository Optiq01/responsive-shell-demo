import { BoxSizeParams, MtSizeOptionType } from "@srcry-types";

export interface EdgeChaseStateModel{
    EdgeChaseW                   : BoxSizeParams;
    EdgeChaseWNudgeScale         : MtSizeOptionType;
    EdgeChaseWNudgeAmount        : number;
    EdgeChaseH                   : BoxSizeParams;
    EdgeChaseHNudgeScale         : MtSizeOptionType;
    EdgeChaseHNudgeAmount        : number;
}