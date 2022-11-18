import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LineSizeOptionType, LineSpeedOptionType } from '@srcry-types';

export type LineSizeParams = {size: LineSizeOptionType, speed: LineSpeedOptionType};

@Component({
  selector: 'line-size-input',
  templateUrl: './line-size-input.component.html',
  styleUrls: ['./line-size-input.component.css']
})
export class LineSizeInputComponent implements OnInit {

  @Input() DefaultSelection: LineSizeParams | undefined;
  @Output() UpdateSelection: EventEmitter<LineSizeParams> = new EventEmitter<LineSizeParams>();
  Selection: LineSizeParams = {size: '--', speed: '--'};

  constructor() { }

  ngOnInit(): void {
    this.checkForDefaultValues();
  }

  private checkForDefaultValues() : void {
    if(this.DefaultSelection !== undefined){ this.Selection = this.DefaultSelection; }
  }

  private checkForFullValue() : boolean {
    return(
      this.Selection.size !== '--' &&
      this.Selection.speed !== '--' ?
      true : false
    );
  }

  private updateSelection() : void {
    if(this.checkForFullValue()){
      this.UpdateSelection.emit(this.Selection);
      console.log(this.Selection);
    }
  }

  public updateSize(newSize: LineSizeOptionType) : void {
    this.Selection.size = newSize;
    this.updateSelection();
  }
  
  public updateSpeed(newSpeed: LineSpeedOptionType) : void {
    this.Selection.speed = newSpeed;
    this.updateSelection();
  }


  ngOnDestroy() : void {
    this.DefaultSelection = undefined;
    this.Selection = {size:'--', speed:'--'};
  }

}
