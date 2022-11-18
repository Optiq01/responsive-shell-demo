import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { MtSizeOptionType } from '@srcry-types';
import { SquishGrowthActions as acn } from 'src/shared/states/srcry-box/sub-states/squish-growth/squish-growth-sate.actions';

@Component({
  selector: 'squish-growth-h-max-nudge-scale-input',
  templateUrl: './squish-growth-h-max-nudge-scale-input.component.html',
  styleUrls: ['./squish-growth-h-max-nudge-scale-input.component.css']
})
export class SquishGrowthHMaxNudgeScaleInputComponent implements OnInit {

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
    this.store.dispatch(new acn.SetSquishGrowthHMaxNudgeScale(this.Size));
    this.closeFrame();
  }

  public cancelSelection():void{ this.closeFrame(); }

}
