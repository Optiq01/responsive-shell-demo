import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { StretchShrinkActions as acn } from 'src/shared/states/srcry-box/sub-states/stretch-shrink/stretch-shrink-state.actions';

@Component({
  selector: 'stretch-shrink-h-start-input',
  templateUrl: './stretch-shrink-h-start-input.component.html',
  styleUrls: ['./stretch-shrink-h-start-input.component.css']
})
export class StretchShrinkHStartInputComponent implements OnInit {

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
    this.store.dispatch(new acn.SetStretchShrinkHStart(this.Size));
    this.closeFrame();
  }

  public cancelSelection():void{ this.closeFrame(); }

}
