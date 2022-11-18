import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { SquishGrowthActions as acn } from 'src/shared/states/srcry-box/sub-states/squish-growth/squish-growth-sate.actions';

@Component({
  selector: 'squish-growth-w-start-input',
  templateUrl: './squish-growth-w-start-input.component.html',
  styleUrls: ['./squish-growth-w-start-input.component.css']
})
export class SquishGrowthWStartInputComponent implements OnInit {

  @Input() DefaultSize: string | undefined;
  Size: string = '1px';
  @Output() CloseFrame: EventEmitter<null> = new EventEmitter<null>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.setDefault();
  }

  private setDefault(): void {
    if(this.DefaultSize !== undefined){ this.Size = this.DefaultSize; }
  }
  
  private closeFrame():void{ this.CloseFrame.emit(); }

  public updateSize(size: string):void{ this.Size = size; }

  public saveSelection():void{
    this.store.dispatch(new acn.SetSquishGrowthWStart(this.Size));
    this.closeFrame();
  }

  public cancelSelection():void{ this.closeFrame(); }

}
