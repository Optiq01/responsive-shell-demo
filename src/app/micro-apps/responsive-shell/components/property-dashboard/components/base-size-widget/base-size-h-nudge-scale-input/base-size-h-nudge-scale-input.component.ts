import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { MtSizeOptionType } from '@srcry-types';
import { BaseSizeActions as acn } from 'src/shared/states/srcry-box/sub-states/base-size/base-size-state.actions';

@Component({
  selector: 'base-size-h-nudge-scale-input',
  templateUrl: './base-size-h-nudge-scale-input.component.html',
  styleUrls: ['./base-size-h-nudge-scale-input.component.css']
})
export class BaseSizeHNudgeScaleInputComponent implements OnInit {

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
    this.store.dispatch(new acn.SetBaseSizeHNudgeScale(this.Size));
    this.closeFrame();
  }

  public cancelSelection():void{ this.closeFrame(); }

}
