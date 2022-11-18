import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BoxSizeParams } from '@srcry-types';
import { SizeDemoService } from '../size-demo.service';
import { CreateBoxSizeSetting } from '../../../../functions/create-box-size-setting'
import { CreateSrcryValue } from 'src/app/functions/create-srcry-value';
import { SizeDemoControlService } from './size-demo-control.service';

export type BoxSizeDemoType = {width: BoxSizeParams, height: BoxSizeParams};

@Component({
  selector: 'size-demo-control',
  templateUrl: './size-demo-control.component.html',
  styleUrls: ['./size-demo-control.component.css'],
  providers: [SizeDemoService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SizeDemoControlComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @Input() Size! : BoxSizeDemoType;
  @Input() DataChannel : string = '';
  @Input() DataChannelType : string = '';
  @Input() ChannelTarget   : string = '';

  @Input() set InitChannelData(target: string) { 
    if(target === this.DataChannelType){
      this.ChannelData.emit({
        messageType: 'data',
        target: this.DataChannelType,
        payload: this.Properties
      });
    }
  }
  
  @Output() ChannelData : EventEmitter<any> = new EventEmitter<any>();
  Properties: string = '';
  WidthOutput: string ='';
  HeightOutput: string = '';
  Loaded: boolean = false;

  constructor(private service : SizeDemoControlService) { }

  ngOnInit(): void {
    this.loadSize();
    //this.service.setChannel(this.DataChannel, this.DataChannelType);
    
  }
  
  ngAfterViewInit(): void {
    //this.service.setProperties(this.Properties);
    //this.service.sendData(this.Properties);
      //console.log(this.DataChannel, this.DataChannelType, this.Size);
      //console.log(this.Properties);
  }

  ngAfterViewChecked(): void{
    
  }

  private loadSize(): void {
    const width  : string = CreateSrcryValue(CreateBoxSizeSetting(this.Size.width));
    const height : string = CreateSrcryValue(CreateBoxSizeSetting(this.Size.height));

    //this.service.updateSize(`width:${width}; height:${height};`);
    this.Properties = `width:${width}; height:${height};`;
    this.WidthOutput = width;
    this.HeightOutput = height;
  }

  public reSend():void {
    //this.service.sendData(this.Properties);
    //console.log(this.Properties);

  }

  public createChannel():void{
    this.service.setChannel(this.DataChannel, this.DataChannelType);
  }

}
