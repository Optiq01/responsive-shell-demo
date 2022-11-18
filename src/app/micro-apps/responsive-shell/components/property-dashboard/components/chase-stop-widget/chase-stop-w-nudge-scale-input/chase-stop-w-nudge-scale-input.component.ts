import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { MtSizeOptionType } from '@srcry-types';
import { ChaseStopActions as acn } from 'src/shared/states/srcry-box/sub-states/chase-stop/chase-stop-state.actions';

@Component({
  selector: 'chase-stop-w-nudge-scale-input',
  templateUrl: './chase-stop-w-nudge-scale-input.component.html',
  styleUrls: ['./chase-stop-w-nudge-scale-input.component.css']
})
export class ChaseStopWNudgeScaleInputComponent implements OnInit {

  @Input() DefaultSize: MtSizeOptionType | undefined;
  Size: MtSizeOptionType = '1';
  @Output() CloseFrame: EventEmitter<null> = new EventEmitter<null>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.setDefault();
  }

  private setDefault(): void {
    if(this.DefaultSize !== undefined){ this.Size = this.DefaultSize; }
  }
  
  private closeFrame():void{ this.CloseFrame.emit(); }

  public updateSize(size: MtSizeOptionType):void{ this.Size = size; }

  public saveSelection():void{
    this.store.dispatch(new acn.SetChaseStopWNudgeScale(this.Size));
    this.closeFrame();
  }

  public cancelSelection():void{ this.closeFrame(); }

}
