import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EdgeChaseReadout } from '../../property-dashboard/pages/base-size-example/srcry-box-reader/srcry-box-reader.component';

const DEFAULT : EdgeChaseReadout = {
  edgeChaseMaster : {w: 0, h:0},
  edgeChaseCore   : {w:0, h:0},
  edgeChaseNudge  : {w: 0, h: 0},
  elementSize     : {w: 0, h: 0},
  currentBehavior : {w: 'error', h: 'error'}
};

@Injectable({
  providedIn: 'root'
})
export class EdgeChaseAnalyzerService {

  Params : BehaviorSubject<EdgeChaseReadout> = new BehaviorSubject<EdgeChaseReadout>(DEFAULT);
  EdgeChaseParams : Observable<EdgeChaseReadout> = this.Params.asObservable();

  constructor() { }

  public setEdgeChaseParams(params: EdgeChaseReadout): void { this.Params.next(params); }

  public getEdgeChaseParams(): Observable<EdgeChaseReadout> { return this.EdgeChaseParams; }
}
