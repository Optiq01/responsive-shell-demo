import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const ALLSIZES : string[] = [
  'text-caption-1',
  'text-widget-1',
  'text-article-1',
  'text-subtitle-1',
  'text-title-1',
  'text-headline-1',
  'text-jumbotron-1'
];

const CAPTIONSIZES : string[] = [
  'text-caption-1',
  'text-caption-2',
  'text-caption-3',
  'text-caption-4',
  'text-caption-5'
];

const WIDGETSIZES : string[] = [
  'text-widget-1',
  'text-widget-2',
  'text-widget-3',
  'text-widget-4',
  'text-widget-5'
];

const ARTICLESIZES : string[] = [
  'text-article-1',
  'text-article-2',
  'text-article-3',
  'text-article-4',
  'text-article-5'
];

const SUBTITLESIZES : string[] = [
  'text-subtitle-1',
  'text-subtitle-2',
  'text-subtitle-3',
  'text-subtitle-4',
  'text-subtitle-5'
];

const TITLESIZES : string[] = [
  'text-title-1',
  'text-title-2',
  'text-title-3',
  'text-title-4',
  'text-title-5'
];

const HEADLINESIZES : string[] = [
  'text-headline-1',
  'text-headline-2',
  'text-headline-3',
  'text-headline-4',
  'text-headline-5'
];

const JUMBOTRONSIZES : string[] = [
  'text-jumbotron-1',
  'text-jumbotron-2',
  'text-jumbotron-3',
  'text-jumbotron-4',
  'text-jumbotron-5'
];


@Injectable({
  providedIn: 'root'
})
export class TextMeasurementService {

  SizeData : BehaviorSubject<string[]> = new BehaviorSubject<string[]>(ALLSIZES);
  Sizes : Observable<string[]> = this.SizeData.asObservable();

  constructor() { }

  public setSize(size: string): void {
    switch(size){
      case 'caption'   : this.SizeData.next(CAPTIONSIZES);   break;
      case 'widget'    : this.SizeData.next(WIDGETSIZES);    break;
      case 'article'   : this.SizeData.next(ARTICLESIZES);   break;
      case 'subtitle'  : this.SizeData.next(SUBTITLESIZES);  break;
      case 'title'     : this.SizeData.next(TITLESIZES);     break;
      case 'headline'  : this.SizeData.next(HEADLINESIZES);  break;
      case 'jumbotron' : this.SizeData.next(JUMBOTRONSIZES); break;
      case 'all'       : this.SizeData.next(ALLSIZES);       break;
    }
  }

  public getSize(): Observable<string[]> { return this.Sizes; }
}
