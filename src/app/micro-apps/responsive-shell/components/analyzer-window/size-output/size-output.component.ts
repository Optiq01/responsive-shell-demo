import { Component, Input, OnInit } from '@angular/core';
import { AnalyzerBoxDimension, SrcryReaderDimension } from '@srcry-types';

@Component({
  selector: 'size-output',
  templateUrl: './size-output.component.html',
  styleUrls: ['./size-output.component.css']
})
export class SizeOutputComponent implements OnInit {

  @Input() Size!: SrcryReaderDimension;
  @Input() Title: string ='';

  constructor() { }

  ngOnInit(): void {
    console.log(this.Size);
  }

}
