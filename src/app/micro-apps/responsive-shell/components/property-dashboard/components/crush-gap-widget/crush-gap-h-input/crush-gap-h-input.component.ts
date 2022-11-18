import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { MtSizeOptionType } from '@srcry-types';
import { CrushGapActions as acn } from 'src/shared/states/srcry-box/sub-states/crush-gap/crush-gap-state.actions';

@Component({
  selector: 'crush-gap-h-input',
  templateUrl: './crush-gap-h-input.component.html',
  styleUrls: ['./crush-gap-h-input.component.css']
})
export class CrushGapHInputComponent implements OnInit {

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
    this.store.dispatch(new acn.SetCrushGapH(this.Size));
    this.closeFrame();
  }

  public cancelSelection():void{ this.closeFrame(); }

}
