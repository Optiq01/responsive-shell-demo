import { BoxScaleOptionType } from "./fields/inputs/primatives/box-scale/box-scale.component";
import { BoxSizeOptionType } from "./fields/inputs/primatives/box-size/box-size.component";
import { BoxSpeedOptionType } from "./fields/inputs/primatives/box-speed/box-speed.component";
import { BoxSizeParams } from "./fields/inputs/box-size-input/box-size-input.component";
import { MtSizeOptionType } from "./fields/inputs/primatives/mt-size/mt-size.component";
import { FontSizeOptionType } from "./fields/inputs/primatives/font-size/font-size.component";
import { FontSpeedOptionType } from "./fields/inputs/primatives/font-speed/font-speed.component";
import { FontSizeParams } from "./fields/inputs/font-size-input/font-size-input.component";
import { LineSizeOptionType } from "./fields/inputs/primatives/line-size/line-size.component";
import { LineSpeedOptionType } from "./fields/inputs/primatives/line-speed/line-speed.component";
import { NudgeAmountRange } from "./fields/inputs/primatives/nudge-amount/nudge-amount.component";
import { WindowSize } from "./micro-apps/responsive-shell/responsive-shell.component";
import { SrcryPropType } from "./micro-apps/responsive-shell/components/property-dashboard/components/srcry-field/srcry-field.component";


interface AnalyzerBoxDimension{ width: number; height: number; }

interface AnalyzerBoxPrimative{ active: boolean; elementSize: AnalyzerBoxDimension; }

interface AnalyzerBoxCore extends AnalyzerBoxPrimative{ coreSize: AnalyzerBoxDimension; nudgeSize: AnalyzerBoxDimension; }

interface CrushGapAnalyzer extends AnalyzerBoxPrimative{ gapSize: AnalyzerBoxDimension; }

interface BaseSizeAnalyzer extends AnalyzerBoxCore{}

interface EdgeChaseAnalyzer extends AnalyzerBoxPrimative{ gapSize: AnalyzerBoxCore; }

interface ChaseStopAnalyzer extends AnalyzerBoxCore{}



interface SrcryReaderDimension{
    w: number;
    h: number;
}

interface SrcryReaderCoreSize { coreSize: SrcryReaderDimension; }
interface SrcryReaderNudgeSize { nudgeSize: SrcryReaderDimension; }
interface SrcryReaderFullSize { fullSize: SrcryReaderDimension; }
interface SrcryReaderElementSize { elementSize: SrcryReaderDimension; }

interface SrcryReaderPrimative extends SrcryReaderCoreSize, SrcryReaderNudgeSize, SrcryReaderFullSize{}

interface CrushGapReader extends SrcryReaderDimension{}

interface BaseSizeReader extends SrcryReaderPrimative{}

interface EdgeChaseReader{
    gapSize: SrcryReaderPrimative;
    elementSize: SrcryReaderDimension;
}

interface ChaseStopReader extends SrcryReaderPrimative{}

interface SquishGrowthReader extends SrcryReaderFullSize{ maxSize: SrcryReaderPrimative }
interface StretchShrinkReader extends SrcryReaderFullSize{ minSize: SrcryReaderPrimative }



export {
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
};