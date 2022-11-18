import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type BoxSpeedOptionType = '--'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11';

const BOXSPEEDOPTIONS : BoxSpeedOptionType[] = [
  '--','1','2','3','4','5','6','7','8','9','10','11'
]

@Component({
  selector: 'box-speed',
  templateUrl: './box-speed.component.html',
  styleUrls: ['./box-speed.component.css']
})
export class BoxSpeedComponent implements OnInit {

  SizeOptions : BoxSpeedOptionType[] | undefined;

  @Input() DefaultSelection: BoxSpeedOptionType | undefined;
  @Output() UpdateSelection: EventEmitter<BoxSpeedOptionType> = new EventEmitter<BoxSpeedOptionType>();

  constructor() { }

  ngOnInit(): void {
    this.SizeOptions = BOXSPEEDOPTIONS;
  }

  public checkForDefault(scale: BoxSpeedOptionType) : boolean {
    return (
      this.DefaultSelection !== undefined ? 
        (scale === this.DefaultSelection ? true : false):
        (scale === '--' ? true : false)
      );
  }

  public updateSelection(selection: BoxSpeedOptionType) : void {
    console.log(selection);
    this.UpdateSelection.emit(selection);
  }

  ngOnDestroy() : void {
    this.SizeOptions = undefined;
    this.DefaultSelection = undefined;
  }

}
