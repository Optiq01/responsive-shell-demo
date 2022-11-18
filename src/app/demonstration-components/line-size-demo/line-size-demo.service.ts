import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineSizeDemoService {

  ShowSize : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  ShowSizeObserver  : Observable<boolean> = this.ShowSize.asObservable();

  constructor() { }

  public setShowSize(toggle : boolean): void { this.ShowSize.next(toggle); }

  public getShowSize() : Observable<boolean> { return this.ShowSizeObserver; }

}
