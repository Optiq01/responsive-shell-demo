import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { SquishGrowthActions as acn } from 'src/shared/states/srcry-box/sub-states/squish-growth/squish-growth-sate.actions';

@Component({
  selector: 'squish-growth-h-max-nudge-amount-input',
  templateUrl: './squish-growth-h-max-nudge-amount-input.component.html',
  styleUrls: ['./squish-growth-h-max-nudge-amount-input.component.css']
})
export class SquishGrowthHMaxNudgeAmountInputComponent implements OnInit {

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
    this.store.dispatch(new acn.SetSquishGrowthHMaxNudgeAmount(this.Size));
    this.closeFrame();
  }

  public cancelSelection():void{ this.closeFrame(); }

}
