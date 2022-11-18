import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';


export type BoxScaleOptionType = '--'|'1'|'2';

const BOXSCALEOPTIONS : BoxScaleOptionType[] = ['--','1','2'];

@Component({
  selector: 'box-scale',
  templateUrl: './box-scale.component.html',
  styleUrls: ['./box-scale.component.css']
})
export class BoxScaleComponent implements OnInit, OnDestroy {

  SizeOptions : BoxScaleOptionType[] | undefined;

  @Input() DefaultSelection: BoxScaleOptionType | undefined;
  @Output() UpdateSelection: EventEmitter<BoxScaleOptionType> = new EventEmitter<BoxScaleOptionType>();

  constructor() { }

  ngOnInit(): void {
    this.SizeOptions = BOXSCALEOPTIONS;
  }

  public checkForDefault(scale: BoxScaleOptionType) : boolean {
    return (
      this.DefaultSelection !== undefined ? 
        (scale === this.DefaultSelection ? true : false):
        (scale === '--' ? true : false)
      );
  }

  public updateSelection(selection: BoxScaleOptionType) : void {
    console.log(selection);
    this.UpdateSelection.emit(selection);
  }

  ngOnDestroy() : void {
    this.SizeOptions = undefined;
    this.DefaultSelection = undefined;
  }

}
