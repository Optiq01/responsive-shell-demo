import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { BoxSizeParams } from '@srcry-types';
import { EdgeChaseActions as acn } from 'src/shared/states/srcry-box/sub-states/edge-chase/edge-chase-state.actions';

@Component({
  selector: 'edge-chase-w-input',
  templateUrl: './edge-chase-w-input.component.html',
  styleUrls: ['./edge-chase-w-input.component.css']
})
export class EdgeChaseWInputComponent implements OnInit {

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

  public updateSize(size: BoxSizeParams):void{ this.Size = size; }

  private closeFrame():void{ this.CloseFrame.emit(); }

  public cancelSelection():void{ this.closeFrame(); }

  public saveSelection():void{
    if(this.Size.size !== '--' && this.Size.scale !== '--' && this.Size.speed !== '--'){

      this.store.dispatch(new acn.SetEdgeChaseW(this.Size));
      this.closeFrame();
    }
  }

}
