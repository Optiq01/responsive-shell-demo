import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { BoxSizeParams, MtSizeOptionType } from '@srcry-types';
import { SquishGrowthActions as acn } from 'src/shared/states/srcry-box/sub-states/squish-growth/squish-growth-sate.actions';

@Component({
  selector: 'squish-growth-h-max-input',
  templateUrl: './squish-growth-h-max-input.component.html',
  styleUrls: ['./squish-growth-h-max-input.component.css']
})
export class SquishGrowthHMaxInputComponent implements OnInit {

  @Input() DefaultSize: BoxSizeParams | undefined;
  Size: BoxSizeParams = {size: 'micro', scale:'1', speed:'1'};
  @Output() CloseFrame: EventEmitter<null> = new EventEmitter<null>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.setDefault();
  }

  private setDefault(): void {
    if(this.DefaultSize !== undefined){ this.Size = {...this.DefaultSize}; }
  }
  
  private closeFrame():void{ this.CloseFrame.emit(); }

  public updateSize(size: BoxSizeParams):void{ this.Size = {...size}; }

  public saveSelection():void{
    this.store.dispatch(new acn.SetSquishGrowthHMax(this.Size));
    this.closeFrame();
  }

  public cancelSelection():void{ this.closeFrame(); }

}
