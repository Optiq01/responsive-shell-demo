import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SizeReaderType } from '../property-dashboard/pages/base-size-example/srcry-box-reader/srcry-box-reader.component';
import { PropertyDashLink } from '../property-dashboard/property-dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class AnalyzerService {

  CurrentTab: BehaviorSubject<SizeReaderType> = new BehaviorSubject<SizeReaderType>('base-size');
  TabSubscription: Observable<SizeReaderType> = this.CurrentTab.asObservable();

  public setCurrentTab(tab: SizeReaderType): void{ this.CurrentTab.next(tab); }

  public getCurrentTab(): Observable<SizeReaderType>{ return this.TabSubscription; }

  constructor() { }
}
