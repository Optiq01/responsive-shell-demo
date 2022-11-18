import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

export type BoxSizeOptionType = '--'|'micro'|'xTiny'|'tiny'|'xSmall'|'small'|'loMed'|'hiMed'|'large'|'jumbo';

const BOXSIZEOPTIONS : BoxSizeOptionType[] = [
  '--','micro','xTiny','tiny','xSmall','small','loMed','hiMed','large','jumbo'
];

@Component({
  selector: 'box-size',
  templateUrl: './box-size.component.html',
  styleUrls: ['./box-size.component.css']
})
export class BoxSizeComponent implements OnInit, OnDestroy {

  SizeOptions : BoxSizeOptionType[] | undefined;

  @Input() DefaultSelection: BoxSizeOptionType | undefined;
  @Output() UpdateSelection: EventEmitter<BoxSizeOptionType> = new EventEmitter<BoxSizeOptionType>();

  constructor() { }

  ngOnInit(): void {
    this.SizeOptions = BOXSIZEOPTIONS;
  }

  public checkForDefault(scale: BoxSizeOptionType) : boolean {
    return (
      this.DefaultSelection !== undefined ? 
        (scale === this.DefaultSelection ? true : false):
        (scale === '--' ? true : false)
      );
  }

  public updateSelection(selection: BoxSizeOptionType) : void {
    //console.log(selection);
    this.UpdateSelection.emit(selection);
  }

  ngOnDestroy() : void {
    this.SizeOptions = undefined;
    this.DefaultSelection = undefined;
  }

}
