import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

export type FontSizeOptionType = '--'|'captionText'|'widgetText'|'articleText'|'subtitleText'|
                           'titleText'|'headlineText'|'jumbotronText';
                           
const FONTSIZEOPTIONS: FontSizeOptionType[] = [
    '--','captionText','widgetText','articleText','subtitleText',
    'titleText','headlineText','jumbotronText'
  ];


@Component({
  selector: 'font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent implements OnInit, OnDestroy {

  SizeOptions : FontSizeOptionType[] | undefined;

  @Input() DefaultSelection: FontSizeOptionType | undefined;
  @Output() UpdateSelection: EventEmitter<FontSizeOptionType> = new EventEmitter<FontSizeOptionType>();

  constructor() { }

  ngOnInit(): void {
    this.SizeOptions = FONTSIZEOPTIONS;
  }

  public checkForDefault(scale: FontSizeOptionType) : boolean {
    return (
      this.DefaultSelection !== undefined ? 
        (scale === this.DefaultSelection ? true : false):
        (scale === '--' ? true : false)
      );
  }

  public updateSelection(selection: FontSizeOptionType) : void {
    console.log(selection);
    this.UpdateSelection.emit(selection);
  }

  ngOnDestroy() : void {
    this.SizeOptions = undefined;
    this.DefaultSelection = undefined;
  }

}
