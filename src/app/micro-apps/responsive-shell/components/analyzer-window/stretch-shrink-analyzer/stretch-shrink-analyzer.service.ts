import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StretchShrinkReadout } from '../../property-dashboard/pages/base-size-example/srcry-box-reader/srcry-box-reader.component';

const DEFAULT : StretchShrinkReadout = {
  stretchShrinkMaster : {w: 0, h: 0},
  stretchShrinkMinCore : {w: 0, h: 0},
  stretchShrinkMinNudge : {w: 0, h: 0},
  elementSize : {w: 0, h: 0},
  currentBehavior : {w: 'error', h: 'error'}
}

@Injectable({
  providedIn: 'root'
})
export class StretchShrinkAnalyzerService {

  Props : BehaviorSubject<StretchShrinkReadout> = new BehaviorSubject<StretchShrinkReadout>(DEFAULT);
  StretchShrinnkProps : Observable<StretchShrinkReadout> = this.Props.asObservable();

  constructor() { }

  public setStretchShrinkProps(props: StretchShrinkReadout): void { this.Props.next(props); }

  public getStretchShrinkProps(): Observable<StretchShrinkReadout> { return this.StretchShrinnkProps; }
}
