import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoxSizeDemoType } from 'src/app/demonstration-components/box-size-demos/size-demo/size-demo-control/size-demo-control.component';
import { SizeDemoComponent } from 'src/app/demonstration-components/box-size-demos/size-demo/size-demo.component';
import { VariationBoxSizePayload } from 'src/app/demonstration-components/box-size-demos/variation-demo/box-size-variant/box-size-variant.component';
import { VariationDemoComponent } from 'src/app/demonstration-components/box-size-demos/variation-demo/variation-demo.component';

@Component({
  selector: 'box-size-page',
  templateUrl: './box-size-page.component.html',
  styleUrls: ['./box-size-page.component.css']
})
export class BoxSizePageComponent implements OnInit {


  BoxSizeChannel! : BroadcastChannel;

  SizeDemo! : any;

  SizeDemoSizeSettingA: BoxSizeDemoType = {
    width: {size: 'loMed', scale:'1', speed: '11'},
    height:{size: 'xSmall', scale:'1', speed: '5'}
  };
  SizeDemoSizeSettingB: BoxSizeDemoType = {
    width: {size: 'xSmall', scale:'1', speed: '11'},
    height:{size: 'xTiny', scale:'2', speed: '2'}
  };
  SizeDemoSizeSettingC: BoxSizeDemoType = {
    width: {size: 'micro', scale:'1', speed: '3'},
    height:{size: 'micro', scale:'2', speed: '6'}
  };

  VariationDemo! : any;

  LoadedChannel  : string = 'none';

  VariantAdata   : VariationBoxSizePayload = {
    fullWidth : 0,
    coreWidth : 0,
    remainderWidth : 0,
    coreSetting : ''
  };

  constructor(
    private router: Router,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.SizeDemo = SizeDemoComponent;
    this.VariationDemo = VariationDemoComponent;
    this.BoxSizeChannel = new BroadcastChannel('boxSizeChannel');
    this.BoxSizeChannel.onmessage = (message)=>{
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
    this.BoxSizeChannel.postMessage(data);
    //console.log(data);
  }

  

  public previousPage(): void { this.router.navigateByUrl('libraries'); }

  public nextPage(): void { this.router.navigateByUrl('measuring-tape'); }

}
