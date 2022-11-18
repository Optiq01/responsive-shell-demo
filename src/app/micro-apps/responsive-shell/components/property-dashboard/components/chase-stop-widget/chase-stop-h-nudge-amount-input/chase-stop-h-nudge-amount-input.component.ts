import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { ChaseStopActions as acn } from 'src/shared/states/srcry-box/sub-states/chase-stop/chase-stop-state.actions';

@Component({
  selector: 'chase-stop-h-nudge-amount-input',
  templateUrl: './chase-stop-h-nudge-amount-input.component.html',
  styleUrls: ['./chase-stop-h-nudge-amount-input.component.css']
})
export class ChaseStopHNudgeAmountInputComponent implements OnInit {

  @Input() DefaultSize: number | undefined;
  Size: number = 0;
  @Output() CloseFrame: EventEmitter<null> = new EventEmitter<null>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.setDefault();
  }

  private setDefault(): void {
    if(this.DefaultSize !== undefined){ this.Size = this.DefaultSize; }
  }
  
  private closeFrame():void{ this.CloseFrame.emit(); }

  public updateSize(size: number):void{ this.Size = size; }

  public saveSelection():void{
    this.store.dispatch(new acn.SetChaseStopHNudgeAmount(this.Size));
    this.closeFrame();
  }

  public cancelSelection():void{ this.closeFrame(); }

}
