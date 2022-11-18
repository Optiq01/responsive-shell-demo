import { Component, OnInit, NgZone } from '@angular/core';
import { BoxSizeDemoType } from 'src/app/demonstration-components/box-size-demos/size-demo/size-demo-control/size-demo-control.component';
import { SizeDemoComponent } from 'src/app/demonstration-components/box-size-demos/size-demo/size-demo.component';
import { VariationBoxSizePayload } from 'src/app/demonstration-components/box-size-demos/variation-demo/box-size-variant/box-size-variant.component';
import { VariationDemoComponent } from 'src/app/demonstration-components/box-size-demos/variation-demo/variation-demo.component';
import { SrcryBoxDemoComponent } from 'src/app/demonstration-components/srcry-box-demo/srcry-box-demo.component';
import { TextSizeDemoComponent } from 'src/app/demonstration-components/text-size-demo/text-size-demo.component';

@Component({
  selector: 'demonstration-page',
  templateUrl: './demonstration.component.html',
  styleUrls: ['./demonstration.component.css']
})
export class DemonstrationComponent implements OnInit {

  SrcryBoxDemo! : any;
  TextSizeDemo! : any;

  SizeDemo! : any;
  VariationDemo! : any;

  SizeDemoSetting: BoxSizeDemoType = {
    width: {size: 'loMed', scale:'1', speed: '11'},
    height:{size: 'xSmall', scale:'1', speed: '5'}
  };

  SrcryDataChannel! : BroadcastChannel;

  LoadedChannel  : string = 'none';

  VariantAdata   : VariationBoxSizePayload = {
    fullWidth : 0,
    coreWidth : 0,
    remainderWidth : 0,
    coreSetting : ''
  };

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
    this.SrcryBoxDemo = SrcryBoxDemoComponent;
    this.TextSizeDemo = TextSizeDemoComponent;
    this.SizeDemo = SizeDemoComponent;
    this.VariationDemo = VariationDemoComponent;

    this.SrcryDataChannel = new BroadcastChannel('srcryDataChannel');
    this.SrcryDataChannel.onmessage = (message)=>{
      this.zone.run(()=>{

        if(message.data.messageType === 'notification'){
          this.LoadedChannel = message.data.source;
        }

        if(message.data.messageType === 'box-readings'){
          if(message.data.source === 'variantA'){
            this.VariantAdata = message.data.data;
          }
        }
        
      });
    };
  }

  public postData(data:any){
    this.SrcryDataChannel.postMessage(data);
    //console.log(data);
  }

}
