import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

export type FontSpeedOptionType = '--'|'1'|'2'|'3'|'4'|'5';

const FONTSPEEDOPTIONS: FontSpeedOptionType[] = [
  '--','1','2','3','4','5'
];

@Component({
  selector: 'font-speed',
  templateUrl: './font-speed.component.html',
  styleUrls: ['./font-speed.component.css']
})
export class FontSpeedComponent implements OnInit, OnDestroy {

  SizeOptions : FontSpeedOptionType[] | undefined;

  @Input() DefaultSelection: FontSpeedOptionType | undefined;
  @Output() UpdateSelection: EventEmitter<FontSpeedOptionType> = new EventEmitter<FontSpeedOptionType>();

  constructor() { }

  ngOnInit(): void {
    this.SizeOptions = FONTSPEEDOPTIONS;
  }

  public checkForDefault(scale: FontSpeedOptionType) : boolean {
    return (
      this.DefaultSelection !== undefined ? 
        (scale === this.DefaultSelection ? true : false):
        (scale === '--' ? true : false)
      );
  }

  public updateSelection(selection: FontSpeedOptionType) : void {
    console.log(selection);
    this.UpdateSelection.emit(selection);
  }

  ngOnDestroy() : void {
    this.SizeOptions = undefined;
    this.DefaultSelection = undefined;
  }

}
