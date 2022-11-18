import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FontSizeOptionType, FontSpeedOptionType } from '@srcry-types';

export type FontSizeParams = {size: FontSizeOptionType, speed: FontSpeedOptionType};

@Component({
  selector: 'font-size-input',
  templateUrl: './font-size-input.component.html',
  styleUrls: ['./font-size-input.component.css']
})
export class FontSizeInputComponent implements OnInit, OnDestroy {

  @Input() DefaultSelection: FontSizeParams | undefined;
  @Output() UpdateSelection: EventEmitter<FontSizeParams> = new EventEmitter<FontSizeParams>();
  Selection: FontSizeParams = {size: '--', speed: '--'};

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

  public updateSize(newSize: FontSizeOptionType) : void {
    this.Selection.size = newSize;
    this.updateSelection();
  }
  
  public updateSpeed(newSpeed: FontSpeedOptionType) : void {
    this.Selection.speed = newSpeed;
    this.updateSelection();
  }


  ngOnDestroy() : void {
    this.DefaultSelection = undefined;
    this.Selection = {size:'--', speed:'--'};
  }

}
