import { Injectable } from "@angular/core";
import { BaseSizeAnalyzerService } from "../../../../analyzer-window/base-size-analyzer/base-size-analyzer.service";
import { ChaseStopAnalyzerService } from "../../../../analyzer-window/chase-stop-analyzer/chase-stop-analyzer.service";
import { CrushGapAnalyzerService } from "../../../../analyzer-window/crush-gap-analyzer/crush-gap-analyzer.service";
import { EdgeChaseAnalyzerService } from "../../../../analyzer-window/edge-chase-analyzer/edge-chase-analyzer.service";
import { SquishGrowthAnalyzerService } from "../../../../analyzer-window/squish-growth-analyzer/squish-growth-analyzer.service";
import { StretchShrinkAnalyzerService } from "../../../../analyzer-window/stretch-shrink-analyzer/stretch-shrink-analyzer.service";
import { BaseSizeReadout, ChaseStopReadout, CrushGapReadout, EdgeChaseReadout, SquishGrowthReadout, StretchShrinkReadout } from "./srcry-box-reader.component";

@Injectable({ providedIn: 'root'})

export class SrcryBoxReaderService {

    constructor(
        private crushGapService: CrushGapAnalyzerService,
        private squishGrowthService : SquishGrowthAnalyzerService,
        private baseSizeService: BaseSizeAnalyzerService,
        private edgeChaseService: EdgeChaseAnalyzerService,
        private chaseStopService: ChaseStopAnalyzerService,
        private stretchShrinkService: StretchShrinkAnalyzerService
    ){}

    public setCrushSizeReadings(params: CrushGapReadout): void{
        this.crushGapService.setCrushGapParams(params);
    }

    public setBaseSizeReadings(params: BaseSizeReadout): void{
        this.baseSizeService.setBaseSizeParams(params);
    }

    public setSquishGrowthReadings(params: SquishGrowthReadout) : void {
        this.squishGrowthService.setAnalyzer(params);
    }

    public setEdgeChaseReadings(params: EdgeChaseReadout): void{
        this.edgeChaseService.setEdgeChaseParams(params);
    }

    public setChaseStopReadings(params: ChaseStopReadout): void{
        this.chaseStopService.setChaseStopProps(params);
    }

    public setStretchShrinkReadings(params: StretchShrinkReadout): void{
        this.stretchShrinkService.setStretchShrinkProps(params);
    }
}