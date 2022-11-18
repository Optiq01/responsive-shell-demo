import { BoxSizeParams, MtSizeOptionType } from "@srcry-types";

export interface BaseSizeStateModel{
    BaseSizeW            : BoxSizeParams;
    BaseSizeWNudgeScale  : MtSizeOptionType;
    BaseSizeWNudgeAmount : number;
    BaseSizeH            : BoxSizeParams;
    BaseSizeHNudgeScale  : MtSizeOptionType;
    BaseSizeHNudgeAmount : number;

}