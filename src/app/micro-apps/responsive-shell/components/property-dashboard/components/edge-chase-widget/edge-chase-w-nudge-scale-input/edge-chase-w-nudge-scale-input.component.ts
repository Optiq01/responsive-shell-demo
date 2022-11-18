import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { MtSizeOptionType } from '@srcry-types';
import { EdgeChaseActions as acn } from 'src/shared/states/srcry-box/sub-states/edge-chase/edge-chase-state.actions';

@Component({
  selector: 'edge-chase-w-nudge-scale-input',
  templateUrl: './edge-chase-w-nudge-scale-input.component.html',
  styleUrls: ['./edge-chase-w-nudge-scale-input.component.css']
})
export class EdgeChaseWNudgeScaleInputComponent implements OnInit {

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
    this.store.dispatch(new acn.SetEdgeChaseWNudgeScale(this.Size));
    this.closeFrame();
  }

  public cancelSelection():void{ this.closeFrame(); }

}
