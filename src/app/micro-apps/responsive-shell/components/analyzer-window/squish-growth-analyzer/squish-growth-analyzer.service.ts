import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SquishGrowthReadout } from '../../property-dashboard/pages/base-size-example/srcry-box-reader/srcry-box-reader.component';

const DEFAULT : SquishGrowthReadout = {
  squishGrowthMaster: {w: 0, h: 0},
  squishGrowthMaxCore: {w: 0, h:0},
  squishGrowthMaxNudge: {w: 0, h: 0},
  elementSize: {w: 0, h: 0},
  currentBehavior: {w: 'error', h: 'error'}
}

@Injectable({
  providedIn: 'root'
})
export class SquishGrowthAnalyzerService {

  AnalyzerProps: BehaviorSubject<SquishGrowthReadout> = new BehaviorSubject<SquishGrowthReadout>(DEFAULT);
  PropObserver : Observable<SquishGrowthReadout> = this.AnalyzerProps.asObservable();

  constructor() { }

  public setAnalyzer(props: SquishGrowthReadout): void {
    this.AnalyzerProps.next(props);
  }

  public getAnalyzerProps(): Observable<SquishGrowthReadout> { return this.PropObserver; }
}
