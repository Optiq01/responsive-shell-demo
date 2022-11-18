import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { StretchShrinkActions as acn } from 'src/shared/states/srcry-box/sub-states/stretch-shrink/stretch-shrink-state.actions';


@Component({
  selector: 'stretch-shrink-w-speed-input',
  templateUrl: './stretch-shrink-w-speed-input.component.html',
  styleUrls: ['./stretch-shrink-w-speed-input.component.css']
})
export class StretchShrinkWSpeedInputComponent implements OnInit {

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
    this.store.dispatch(new acn.SetStretchShrinkWSpeed(this.Size));
    this.closeFrame();
  }

  public cancelSelection():void{ this.closeFrame(); }

}
