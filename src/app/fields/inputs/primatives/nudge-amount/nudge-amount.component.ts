import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

export type NudgeAmountRange = { min: -999; max: 999; };

@Component({
  selector: 'nudge-amount',
  templateUrl: './nudge-amount.component.html',
  styleUrls: ['./nudge-amount.component.css']
})
export class NudgeAmountComponent implements OnInit, OnDestroy {

  Amount : number = 0;
  Range : NudgeAmountRange = {min: -999, max: 999};

  @Input() DefaultSelection: number | undefined;
  @Output() UpdateSelection: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.checkForDefault();
  }

  private checkForDefault() : void {
    if(this.DefaultSelection !== undefined){this.Amount = this.DefaultSelection; }
    else{this.Amount = 0; }
  }

  public updateSelection(selection: number) : void {
    console.log(selection);
    this.UpdateSelection.emit(selection);
  }

  ngOnDestroy() : void {
    this.Amount = 0;
    this.DefaultSelection = undefined;
  }

}
