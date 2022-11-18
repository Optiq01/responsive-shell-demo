//import { BoxScaleOptionType } from "./fields/inputs/primatives/box-scale/box-scale.component";
//import { BoxSizeOptionType } from "./fields/inputs/primatives/box-size/box-size.component";
//import { BoxSpeedOptionType } from "./fields/inputs/primatives/box-speed/box-speed.component";
//import { BoxSizeParams } from "./fields/inputs/box-size-input/box-size-input.component";
//import { MtSizeOptionType } from "./fields/inputs/primatives/mt-size/mt-size.component";
//import { FontSizeOptionType } from "./fields/inputs/primatives/font-size/font-size.component";
//import { FontSpeedOptionType } from "./fields/inputs/primatives/font-speed/font-speed.component";
//import { FontSizeParams } from "./fields/inputs/font-size-input/font-size-input.component";
//import { LineSizeOptionType } from "./fields/inputs/primatives/line-size/line-size.component";
//import { LineSpeedOptionType } from "./fields/inputs/primatives/line-speed/line-speed.component";
//import { NudgeAmountRange } from "./fields/inputs/primatives/nudge-amount/nudge-amount.component";
//import { WindowSize } from "./micro-apps/responsive-shell/responsive-shell.component";
//import { SrcryPropType } from "./micro-apps/responsive-shell/components/property-dashboard/components/srcry-field/srcry-field.component";


export type BoxScaleOptionType = '--'|'1'|'2';

export type BoxSizeOptionType = '--'|'micro'|'xTiny'|'tiny'|'xSmall'|'small'|'loMed'|'hiMed'|'large'|'jumbo';

export type BoxSpeedOptionType = '--'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11';

export type BoxSizeParams = {
    size: BoxSizeOptionType;
    scale: BoxScaleOptionType;
    speed: BoxSpeedOptionType;
}

export type FontSpeedOptionType = '--'|'1'|'2'|'3'|'4'|'5';

export type FontSizeOptionType = '--'|'captionText'|'widgetText'|'articleText'|'subtitleText'|
  'titleText'|'headlineText'|'jumbotronText';

export type FontSizeParams = {size: FontSizeOptionType, speed: FontSpeedOptionType};

export type LineSizeOptionType = '--'|'ultraFine'|'fine'|'narrow'|'semiBold'|'bold'|'wide'|'ultraWide';

export type LineSpeedOptionType = '--'|'1'|'2'|'3'|'4'|'5'|'6';

export type NudgeAmountRange = { min: -999; max: 999; };

export type WindowSize = {width: number, height: number};

export type SrcryProperties = 'crushGap-w' | 'crushGap-h' | 'baseSize-w' | 'baseSize-h' |
                              'baseSize-w-nudgeScale' | 'baseSize-h-nudgeScale' | 'baseSize-w-nudgeAmount' |
                              'baseSize-h-nudgeAmount' | 'edgeChase-w' | 'edgeChase-h' |
                              'edgeChase-w-nudgeScale' | 'edgeChase-h-nudgeScale' | 'edgeChase-w-nudgeAmount' |
                              'edgeChase-h-nudgeAmount' | 'chaseStop-w' | 'chaseStop-h' |
                              'chaseStop-w-nudgeScale' | 'chaseStop-h-nudgeScale' | 'chaseStop-w-nudgeAmount' |
                              'chaseStop-h-nudgeAmount' | 'squishGrowth-w-start' | 'squishGrowth-h-start' |
                              'squishGrowth-w-speed' | 'squishGrowth-h-speed' | 'squishGrowth-w-max' |
                              'squishGrowth-h-max' | 'squishGrowth-w-max-nudgeScale' | 'squishGrowth-h-max-nudgeScale' |
                              'squishGrowth-w-max-nudgeAmount' | 'squishGrowth-h-max-nudgeAmount' | 'stretchShrink-w-start' |
                              'stretchShrink-h-start' | 'stretchShrink-w-speed' | 'stretchShrink-h-speed' |
                              'stretchShrink-w-min' | 'stretchShrink-h-min' | 'stretchShrink-w-min-nudgeScale' |
                              'stretchShrink-h-min-nudgeScale' | 'stretchShrink-w-min-nudgeAmount' | 'stretchShrink-h-min-nudgeAmount';

export type SrcryPropType = {prop: SrcryProperties, value: string | number}

export type MtSizeOptionType = '--'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|
                      '12'|'13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|
                      '23'|'24'|'25'|'26'|'27'|'28'|'29'|'30'|'31'|'32'|'33'|
                      '34'|'35'|'36'|'37'|'38'|'39'|'40'|'41'|'42'|'43'|'44';


export interface AnalyzerBoxDimension{ width: number; height: number; }

export interface AnalyzerBoxPrimative{ active: boolean; elementSize: AnalyzerBoxDimension; }

export interface AnalyzerBoxCore extends AnalyzerBoxPrimative{ coreSize: AnalyzerBoxDimension; nudgeSize: AnalyzerBoxDimension; }

export interface CrushGapAnalyzer extends AnalyzerBoxPrimative{ gapSize: AnalyzerBoxDimension; }

export interface BaseSizeAnalyzer extends AnalyzerBoxCore{}

export interface EdgeChaseAnalyzer extends AnalyzerBoxPrimative{ gapSize: AnalyzerBoxCore; }

export interface ChaseStopAnalyzer extends AnalyzerBoxCore{}



export interface SrcryReaderDimension{
    w: number;
    h: number;
}

export interface SrcryReaderCoreSize { coreSize: SrcryReaderDimension; }
export interface SrcryReaderNudgeSize { nudgeSize: SrcryReaderDimension; }
export interface SrcryReaderFullSize { fullSize: SrcryReaderDimension; }
export interface SrcryReaderElementSize { elementSize: SrcryReaderDimension; }

export interface SrcryReaderPrimative extends SrcryReaderCoreSize, SrcryReaderNudgeSize, SrcryReaderFullSize{}

export interface CrushGapReader extends SrcryReaderDimension{}

export interface BaseSizeReader extends SrcryReaderPrimative{}

export interface EdgeChaseReader{
    gapSize: SrcryReaderPrimative;
    elementSize: SrcryReaderDimension;
}

export interface ChaseStopReader extends SrcryReaderPrimative{}

export interface SquishGrowthReader extends SrcryReaderFullSize{ maxSize: SrcryReaderPrimative }
export interface StretchShrinkReader extends SrcryReaderFullSize{ minSize: SrcryReaderPrimative }



/*export {
    BoxScaleOptionType,
    BoxSizeOptionType,
    BoxSpeedOptionType,
    BoxSizeParams,
    MtSizeOptionType,
    FontSizeOptionType,
    FontSpeedOptionType,
    FontSizeParams,
    LineSizeOptionType,
    LineSpeedOptionType,
    NudgeAmountRange,
    WindowSize,
    SrcryPropType,
    AnalyzerBoxDimension,
    AnalyzerBoxPrimative,
    AnalyzerBoxCore,
    CrushGapAnalyzer,
    BaseSizeAnalyzer,
    EdgeChaseAnalyzer,
    ChaseStopAnalyzer,
    SrcryReaderPrimative,
    SrcryReaderCoreSize,
    SrcryReaderDimension,
    SrcryReaderElementSize,
    SrcryReaderFullSize,
    SrcryReaderNudgeSize
};*/