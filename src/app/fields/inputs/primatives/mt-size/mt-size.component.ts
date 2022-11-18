import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

export type MtSizeOptionType = '--'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|
                      '12'|'13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|
                      '23'|'24'|'25'|'26'|'27'|'28'|'29'|'30'|'31'|'32'|'33'|
                      '34'|'35'|'36'|'37'|'38'|'39'|'40'|'41'|'42'|'43'|'44';

const MTSIZEOPTIONS: MtSizeOptionType[] = [
  '--','1','2','3','4','5','6','7','8','9','10','11',
  '12','13','14','15','16','17','18','19','20','21','22',
  '23','24','25','26','27','28','29','30','31','32','33',
  '34','35','36','37','38','39','40','41','42','43','44'
];

@Component({
  selector: 'mt-size',
  templateUrl: './mt-size.component.html',
  styleUrls: ['./mt-size.component.css']
})
export class MtSizeComponent implements OnInit, OnDestroy {

  SizeOptions : MtSizeOptionType[] | undefined;

  @Input() DefaultSelection: MtSizeOptionType | undefined;
  @Output() UpdateSelection: EventEmitter<MtSizeOptionType> = new EventEmitter<MtSizeOptionType>();

  constructor() { }

  ngOnInit(): void {
    this.SizeOptions = MTSIZEOPTIONS;
  }

  public checkForDefault(scale: MtSizeOptionType) : boolean {
    return (
      this.DefaultSelection !== undefined ? 
        (scale === this.DefaultSelection ? true : false):
        (scale === '--' ? true : false)
      );
  }

  public updateSelection(selection: MtSizeOptionType) : void {
    console.log(selection);
    this.UpdateSelection.emit(selection);
  }

  ngOnDestroy() : void {
    this.SizeOptions = undefined;
    this.DefaultSelection = undefined;
  }

}
