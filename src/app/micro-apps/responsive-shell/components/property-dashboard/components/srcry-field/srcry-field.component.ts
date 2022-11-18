import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SrcryProperties } from 'src/app/micro-apps/responsive-shell/responsive-shell.service';

export type SrcryPropType = {prop: SrcryProperties, value: string | number}

@Component({
  selector: 'srcry-field',
  templateUrl: './srcry-field.component.html',
  styleUrls: ['./srcry-field.component.css']
})
export class SrcryFieldComponent implements OnInit, AfterViewInit {

  //@Input() Params: SrcryPropType | undefined = {prop: 'baseSize-h-nudgeAmount', value: 17};
  @Input() Param: SrcryProperties | undefined;
  @Input() Value: string | number = '--';
  @Input() ValueType: boolean = true;
  @Output() Selection : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    //this.initValueType();
  }
  
  ngAfterViewInit(): void {
  }

  updateSelection(): void { this.Selection.emit(this.Param)};

}
