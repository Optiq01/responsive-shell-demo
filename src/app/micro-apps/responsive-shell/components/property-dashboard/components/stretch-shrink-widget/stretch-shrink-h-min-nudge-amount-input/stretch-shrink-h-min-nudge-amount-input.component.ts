import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { StretchShrinkActions as acn } from 'src/shared/states/srcry-box/sub-states/stretch-shrink/stretch-shrink-state.actions';

@Component({
  selector: 'stretch-shrink-h-min-nudge-amount-input',
  templateUrl: './stretch-shrink-h-min-nudge-amount-input.component.html',
  styleUrls: ['./stretch-shrink-h-min-nudge-amount-input.component.css']
})
export class StretchShrinkHMinNudgeAmountInputComponent implements OnInit {

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
    this.store.dispatch(new acn.SetStretchShrinkHMinNudgeAmount(this.Size));
    this.closeFrame();
  }

  public cancelSelection():void{ this.closeFrame(); }

}
