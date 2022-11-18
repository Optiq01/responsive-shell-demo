import { Component, Input, OnInit } from '@angular/core';

export type ParamOutputType = {value : string | number, title: string}

@Component({
  selector: 'param-output',
  templateUrl: './param-output.component.html',
  styleUrls: ['./param-output.component.css']
})
export class ParamOutputComponent implements OnInit {

  @Input() Param : ParamOutputType = {value: 111, title: 'Demo Title'};

  constructor() { }

  ngOnInit(): void {
  }

}
