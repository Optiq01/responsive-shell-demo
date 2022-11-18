import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { BoxSizeParams } from '@srcry-types';
import { BaseSizeActions as acn } from 'src/shared/states/srcry-box/sub-states/base-size/base-size-state.actions';
import { SrcryBoxActions as acnB } from 'src/shared/states/srcry-box/srcry-box-state.actions';

@Component({
  selector: 'base-size-h-input',
  templateUrl: './base-size-h-input.component.html',
  styleUrls: ['./base-size-h-input.component.css']
})
export class BaseSizeHInputComponent implements OnInit {

  @Input() DefaultSize: BoxSizeParams | undefined;
  Size: BoxSizeParams = {size: '--', scale: '--', speed: '--'};
  @Output() CloseFrame: EventEmitter<null> = new EventEmitter<null>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.setDefault();
  }

  private setDefault():void{
    if(this.DefaultSize !== undefined){this.Size = {...this.DefaultSize}; }
  }

  public updateSize(size: BoxSizeParams):void{ this.Size = {...size}; }

  private closeFrame():void{ this.CloseFrame.emit(); }

  public cancelSelection():void{ this.closeFrame(); }

  public saveSelection():void{
    if(this.Size.size !== '--' && this.Size.scale !== '--' && this.Size.speed !== '--'){

      this.store.dispatch(new acn.SetBaseSizeH(this.Size));
      console.log(this.Size);
      this.closeFrame();
    }
  }

}
