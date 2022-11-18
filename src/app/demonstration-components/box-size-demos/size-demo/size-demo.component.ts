import { ThisReceiver } from '@angular/compiler';
import { AfterContentChecked, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { SizeDemoService } from './size-demo.service';

@Component({
  selector: 'size-demo',
  templateUrl: './size-demo.component.html',
  styleUrls: ['./size-demo.component.css'],
  providers: [SizeDemoService],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SizeDemoComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked {

  @Input()DataChannel : string = '';
  @Input()DataChannelType : string = '';

  Styles: string = '';
  Loaded : boolean = false;

  constructor(private service: SizeDemoService, private cdr : ChangeDetectorRef, private zone: NgZone) { }

  ngOnInit(): void {
    this.service.getSize().subscribe(a => { this.Styles = a; });
    this.service.setChannel(this.DataChannel, this.DataChannelType);
    //console.log(this.DataChannel, this.DataChannelType);

  }
  
  ngAfterViewInit(): void {
    //console.log(this.DataChannel);
    //console.log( this.Styles); 

    /*setTimeout(()=>{
      if(!this.Loaded){
        this.service.notifyLoadCompletion();
        this.Loaded = true;
      }
  
    }, 1000);*/
    
    //this.cdr.detectChanges();
  }
  
  ngAfterViewChecked(): void {
    
    //this.cdr.detectChanges();
  }
  
  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
    
  }

  public createChannel():void{
    this.service.setChannel(this.DataChannel, this.DataChannelType);
  }

}
