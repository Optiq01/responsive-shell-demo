import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BoxSizeOptionType, BoxSpeedOptionType, BoxScaleOptionType } from '@srcry-types';

export type BoxSizeParams = {
  size: BoxSizeOptionType;
  scale: BoxScaleOptionType;
  speed: BoxSpeedOptionType;
}

@Component({
  selector: 'box-size-input',
  templateUrl: './box-size-input.component.html',
  styleUrls: ['./box-size-input.component.css']
})
export class BoxSizeInputComponent implements OnInit, OnDestroy {

  @Input() DefaultSelection: BoxSizeParams | undefined;
  @Output() UpdateSelection: EventEmitter<BoxSizeParams> = new EventEmitter<BoxSizeParams>();
  Selection: BoxSizeParams = {size: '--', scale: '--', speed: '--'};

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
      this.Selection.scale !== '--' &&
      this.Selection.speed !== '--' ?
      true : false
    );
  }

  private updateSelection() : void {
    if(this.checkForFullValue()){
      this.UpdateSelection.emit(this.Selection);
      //console.log(this.Selection);
    }
  }

  public updateSize(newSize: BoxSizeOptionType) : void {
    this.Selection.size = newSize;
    this.updateSelection();
  }
  
  public updateScale(newScale: BoxScaleOptionType) : void {
    this.Selection.scale = newScale;
    this.updateSelection();
  }
  
  public updateSpeed(newSpeed: BoxSpeedOptionType) : void {
    this.Selection.speed = newSpeed;
    this.updateSelection();
  }


  ngOnDestroy() : void {
    this.DefaultSelection = undefined;
    this.Selection = {size:'--', scale:'--', speed:'--'};
  }

}
