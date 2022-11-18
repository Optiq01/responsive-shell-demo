import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChaseStopReadout } from '../../property-dashboard/pages/base-size-example/srcry-box-reader/srcry-box-reader.component';

const DEFAULT : ChaseStopReadout = {
  chaseStopMaster : {w:0, h:0},
  chaseStopCore   : {w:0, h:0},
  chaseStopNudge  : {w:0, h:0},
  elementSize     : {w:0, h:0},
  currentBehavior : {w: 'error', h: 'error'}
}

@Injectable({
  providedIn: 'root'
})
export class ChaseStopAnalyzerService {

  Props : BehaviorSubject<ChaseStopReadout> = new BehaviorSubject<ChaseStopReadout>(DEFAULT);
  ChaseStopProps : Observable<ChaseStopReadout> = this.Props.asObservable();

  constructor() { }

  public setChaseStopProps(props: ChaseStopReadout): void { this.Props.next(props); }

  public getChaseStopProps(): Observable<ChaseStopReadout> { return this.ChaseStopProps; }

}
