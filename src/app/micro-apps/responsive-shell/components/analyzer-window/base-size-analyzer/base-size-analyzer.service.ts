import { Injectable } from '@angular/core';
import { BaseSizeAnalyzer } from '@srcry-types';
import { BehaviorSubject } from 'rxjs';
import { BaseSizeReadout } from '../../property-dashboard/pages/base-size-example/srcry-box-reader/srcry-box-reader.component';



const DEFAULT: BaseSizeReadout = {
  elementSize: {w: 0, h:0},
  baseSizeMaster: {w: 0, h: 0},
  baseSizeCore: {w: 0, h: 0},
  baseSizeNudge: {w: 0, h: 0},
  currentBehavior: { w: 'error', h: 'error' }
}



@Injectable({
  providedIn: 'root'
})
export class BaseSizeAnalyzerService {

  BaseSizeParams: BehaviorSubject<BaseSizeReadout> = new BehaviorSubject<BaseSizeReadout>(DEFAULT);

  constructor() { }

  public setBaseSizeParams(params: BaseSizeReadout):void{ this.BaseSizeParams.next(params); /*console.log(params);*/ }

  public getBaseSizeParams(): BehaviorSubject<BaseSizeReadout>{ return this.BaseSizeParams;}
}
