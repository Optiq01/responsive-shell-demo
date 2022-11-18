import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { ChaseStopActions as acn } from 'src/shared/states/srcry-box/sub-states/chase-stop/chase-stop-state.actions';
import { BoxSizeParams } from '@srcry-types';

@Component({
  selector: 'chase-stop-h-input',
  templateUrl: './chase-stop-h-input.component.html',
  styleUrls: ['./chase-stop-h-input.component.css']
})
export class ChaseStopHInputComponent implements OnInit {

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

      this.store.dispatch(new acn.SetChaseStopH(this.Size));
      console.log(this.Size);
      this.closeFrame();
    }
  }

}
