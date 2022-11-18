import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { BoxSizeParams, MtSizeOptionType } from '@srcry-types';
import { SquishGrowthActions as acn } from 'src/shared/states/srcry-box/sub-states/squish-growth/squish-growth-sate.actions';

@Component({
  selector: 'squish-growth-w-max-input',
  templateUrl: './squish-growth-w-max-input.component.html',
  styleUrls: ['./squish-growth-w-max-input.component.css']
})
export class SquishGrowthWMaxInputComponent implements OnInit {

  @Input() DefaultSize: BoxSizeParams | undefined;
  Size: BoxSizeParams = {size: '--', scale: '--', speed: '--'};
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
    if(this.Size.size !== '--' && this.Size.scale !== '--' && this.Size.speed !== '--'){

      this.store.dispatch(new acn.SetSquishGrowthWMax(this.Size));
      this.closeFrame();

    }
  }

  public cancelSelection():void{ this.closeFrame(); }

}
