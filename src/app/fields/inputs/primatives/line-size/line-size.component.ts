import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

export type LineSizeOptionType = '--'|'ultraFine'|'fine'|'narrow'|'semiBold'|'bold'|'wide'|'ultraWide';

const LINESIZEOPTIONS: LineSizeOptionType[] = [
  '--','ultraFine','fine','narrow','semiBold','bold','wide','ultraWide'
];

@Component({
  selector: 'line-size',
  templateUrl: './line-size.component.html',
  styleUrls: ['./line-size.component.css']
})
export class LineSizeComponent implements OnInit, OnDestroy {

  SizeOptions : LineSizeOptionType[] | undefined;

  @Input() DefaultSelection: LineSizeOptionType | undefined;
  @Output() UpdateSelection: EventEmitter<LineSizeOptionType> = new EventEmitter<LineSizeOptionType>();

  constructor() { }

  ngOnInit(): void {
    this.SizeOptions = LINESIZEOPTIONS;
  }

  public checkForDefault(scale: LineSizeOptionType) : boolean {
    return (
      this.DefaultSelection !== undefined ? 
        (scale === this.DefaultSelection ? true : false):
        (scale === '--' ? true : false)
      );
  }

  public updateSelection(selection: LineSizeOptionType) : void {
    console.log(selection);
    this.UpdateSelection.emit(selection);
  }

  ngOnDestroy() : void {
    this.SizeOptions = undefined;
    this.DefaultSelection = undefined;
  }

}
