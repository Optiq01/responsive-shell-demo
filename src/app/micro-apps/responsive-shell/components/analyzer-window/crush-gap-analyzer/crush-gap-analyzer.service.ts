import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CrushGapReadout } from '../../property-dashboard/pages/base-size-example/srcry-box-reader/srcry-box-reader.component';
import { SrcryBoxReaderService } from '../../property-dashboard/pages/base-size-example/srcry-box-reader/srcry-box-reader.service';

const DEFAULT : CrushGapReadout = {
  crushSize: { w: 0, h: 0},
  elementSize: { w: 0, h: 0},
  currentBehavior: {w: 'error', h: 'error'}
}

@Injectable({
  providedIn: 'root'
})
export class CrushGapAnalyzerService {

  CrushGapParams : BehaviorSubject<CrushGapReadout> = new BehaviorSubject<CrushGapReadout>(DEFAULT);

  constructor() {}

  public setCrushGapParams(params: CrushGapReadout): void { this.CrushGapParams.next(params); }

  public getCrushGapParams(): BehaviorSubject<CrushGapReadout>{ return this.CrushGapParams; }
}
