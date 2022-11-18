import { AfterContentChecked, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, ElementRef, Input, NgModuleRef, NgZone, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { ResponsiveShellService, StylingObserver } from './responsive-shell.service';
import { Select, Store } from '@ngxs/store';
import { SrcryBoxStateModel } from 'src/shared/states/srcry-box/srcry-box-state.model';
import { SrcryStylesChannelService } from './srcry-styles-channel.service';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseSizeExampleModule } from './components/property-dashboard/pages/base-size-example/base-size-example.module';

export type WindowSize = {width: number, height: number};



@Component({
  selector: 'responsive-shell',
  templateUrl: './responsive-shell.component.html',
  styleUrls: ['./responsive-shell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveShellComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked {

  @Input() IframePath!: string;
  BlankPath: string = '/';
  Styles: StylingObserver = {};
  WindowDimensions: WindowSize = {
    width: 0,
    height: 0
  };

  //URL = this.sanitize.bypassSecurityTrustResourceUrl(this.IframePath);
  URL = this.sanitize.bypassSecurityTrustResourceUrl(this.IframePath);
  URLB = this.sanitize.bypassSecurityTrustResourceUrl('about:blank');

  public iFramePath(){
    return this.sanitize.bypassSecurityTrustResourceUrl(this.IframePath);
  }
  
  //@ViewChild('resizeFrame', {static: false}) ResizeFrame!: ElementRef;
  @ViewChild('responsiveShell', {static: false}) ResponsiveShell!: ElementRef;

  @ViewChild('responsiveWindow', {static: false}) ResponsiveWindow!: ElementRef;
  @ViewChild('tinker', {static: false}) Tinker!: ElementRef;

 

  TestData!: SrcryBoxStateModel;
  ToggleIFrame: boolean = true;

  StyleIframe: boolean = false;

  FirefoxCheck : boolean = false;

  @Input() ComponentInjector! : Type<Component>;
  @Input() WindowSizeReadoutToggle : boolean = false;
  @Input() StartWidth! : string;
  @Input() StartHeight! : string;
  @Input() DataChannelName : string = 'none';
  @Input() DataChannelType : string = 'none';

  private useComponent(): void{
    //const compRef = this.vcRef.createComponent(this.ComponentInjector);
  }



  constructor(
      private data: ResponsiveShellService,
      private sanitize: DomSanitizer,
      private store: Store,
      private dataB: SrcryStylesChannelService,
      private vcRef: ViewContainerRef,
      private moduleRef: NgModuleRef<BaseSizeExampleModule>,
      private resolver: ComponentFactoryResolver,
      private cdr: ChangeDetectorRef,
      private zone: NgZone
    ){
      this.WindowDimensions = {
        width: this.ResponsiveWindow?.nativeElement.offsetWidth,
        height: this.ResponsiveWindow?.nativeElement.offsetHeight
    };
  }

  ngOnInit(): void {
    this.fireFoxChecker();
    
    //this.createComponent();
  }
  
  ngAfterViewInit(): void{
    //this.fireFoxChecker();
    const shellObserver = new ResizeObserver(item =>{
      this.zone.run(()=>{ this.sizeListener();});
    });
    
    shellObserver.observe(this.ResponsiveShell.nativeElement);
    
    setTimeout(()=>{
      if(!this.FirefoxCheck){  this.createComponent(); }
    },1000);
    //this.cdr.detectChanges();
  }
  
  ngAfterViewChecked():void{
    
  }

  ngAfterContentChecked(): void {
      this.cdr.detectChanges();
  }

  private fireFoxChecker():void{
    if(navigator.userAgent.indexOf('Firefox') !== -1){ this.FirefoxCheck = true; }
  }

  public createComponent(): void{
    //const compFactory = this.resolver.resolveComponentFactory(BaseSizeExampleComponent);
    //const styles: string = './base-size-example.component.css';
    
    //const frame = this.ResponsiveWindow?.nativeElement.contentDocument || this.ResponsiveWindow?.nativeElement.contentWindow;
    const frame = this.ResponsiveWindow?.nativeElement.contentDocument || this.ResponsiveWindow?.nativeElement.contentWindow;
    //const frame = this.ResponsiveWindow?.nativeElement.contentDocument;


    const componentInstance : ComponentRef<any>  = this.vcRef.createComponent(this.ComponentInjector);
    
    if(this.DataChannelName !== 'none' && (<ComponentRef<any>>componentInstance.instance).hasOwnProperty('DataChannel')){
      //console.log('by golly this has an Input()!!!');

      //componentInstance.instance['DataChannel'] = this.DataChannelName;
      componentInstance.instance.DataChannel = this.DataChannelName;
      
      //componentInstance.instance['DataChannelType'] = this.DataChannelType;
      componentInstance.instance.DataChannelType = this.DataChannelType;
    }
    
    //console.log(componentInstance);

    const srcryStyles = document.createElement('style');
    //console.log(frame);
    srcryStyles.innerText = "*{ padding : 0; margin : 0; box-sizing: border-box; overflow: hidden; } body{ display : grid; place-items: center; min-height: 0px; max-height: 100vh; grid-template-columns: 1fr; grid-template-rows: 1fr; } "

    const srcryLink = document.createElement('link');
    srcryLink.rel = 'stylesheet';
    srcryLink.type = 'text/css';
    srcryLink.href = 'styles.css';

    //const paragraph = document.createElement('paragraph');

    //paragraph.innerText = "testing testing";

    frame.head.appendChild(srcryStyles);
    frame.head.appendChild(srcryLink);
    frame.body.appendChild(componentInstance.location.nativeElement);
    //console.log(frame.body[componentInstance.location.nativeElement]);
    //frame.body.appendChild(paragraph);
  }

  private initalizeComponent():void{

  }

  public iframeInit():void {
    this.data.getStyleObject().subscribe(a => {
      this.TestData = {...a};
      this.dataB.setStyles(a);
    });
  }


  /*public sizeListener(entry: ResizeObserverEntry[]):void{
    this.WindowDimensions = {
      width  : Math.floor(entry[0].contentRect.width),
      height : Math.floor(entry[0].contentRect.height)
    };
  }*/
  
  private sizeListener():void{
    this.WindowDimensions = {
      width  : Math.floor(this.ResponsiveShell.nativeElement.offsetWidth),
      height : Math.floor(this.ResponsiveShell.nativeElement.offsetHeight)
    };
  }

}
