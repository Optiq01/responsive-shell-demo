import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

export type LineSpeedOptionType = '--'|'1'|'2'|'3'|'4'|'5'|'6';

const LINESPEEDOPTIONS: LineSpeedOptionType[] = ['--','1','2','3','4','5','6'];

@Component({
  selector: 'line-speed',
  templateUrl: './line-speed.component.html',
  styleUrls: ['./line-speed.component.css']
})
export class LineSpeedComponent implements OnInit, OnDestroy {

  SizeOptions : LineSpeedOptionType[] | undefined;

  @Input() DefaultSelection: LineSpeedOptionType | undefined;
  @Output() UpdateSelection: EventEmitter<LineSpeedOptionType> = new EventEmitter<LineSpeedOptionType>();

  constructor() { }

  ngOnInit(): void {
    this.SizeOptions = LINESPEEDOPTIONS;
  }

  public checkForDefault(scale: LineSpeedOptionType) : boolean {
    return (
      this.DefaultSelection !== undefined ? 
        (scale === this.DefaultSelection ? true : false):
        (scale === '--' ? true : false)
      );
  }

  public updateSelection(selection: LineSpeedOptionType) : void {
    console.log(selection);
    this.UpdateSelection.emit(selection);
  }

  ngOnDestroy() : void {
    this.SizeOptions = undefined;
    this.DefaultSelection = undefined;
  }

}
