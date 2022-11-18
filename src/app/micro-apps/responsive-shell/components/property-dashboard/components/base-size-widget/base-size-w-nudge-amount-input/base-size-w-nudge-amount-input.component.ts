import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Store } from '@ngxs/store';
import { BaseSizeActions as acn } from 'src/shared/states/srcry-box/sub-states/base-size/base-size-state.actions';

@Component({
  selector: 'base-size-w-nudge-amount-input',
  templateUrl: './base-size-w-nudge-amount-input.component.html',
  styleUrls: ['./base-size-w-nudge-amount-input.component.css']
})
export class BaseSizeWNudgeAmountInputComponent implements OnInit {

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
    this.store.dispatch(new acn.SetBaseSizeWNudgeAmount(this.Size));
    this.closeFrame();
  }

  public cancelSelection():void{ this.closeFrame(); }

}
