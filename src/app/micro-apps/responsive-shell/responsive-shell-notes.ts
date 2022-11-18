/*import { AfterViewChecked, AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Input, NgModuleRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { ResponsiveShellService, StylingObserver } from './responsive-shell.service';
import { Observable } from 'rxjs';
//import { DomSanitizer } from '@angular/platform-browser';
import { Select, Store } from '@ngxs/store';
import { SrcryBoxStateModel } from 'src/shared/states/srcry-box/srcry-box-state.model';
import { SrcryBoxSelectors } from 'src/shared/states/srcry-box/srcry-box.selectors';
import { SrcryStylesChannelService } from './srcry-styles-channel.service';
import { BaseSizeExampleComponent } from './components/property-dashboard/pages/base-size-example/base-size-example.component';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseSizeExampleModule } from './components/property-dashboard/pages/base-size-example/base-size-example.module';
import { BaseSizeBoxModule } from './components/property-dashboard/pages/base-size-example/base-size-box/base-size-box.module';
import { NgModuleResolver } from '@angular/compiler';

export type WindowSize = {width: number, height: number};



@Component({
  selector: 'responsive-shell',
  templateUrl: './responsive-shell.component.html',
  styleUrls: ['./responsive-shell.component.css']
})
export class ResponsiveShellComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @Input() IframePath: string = 'base-size-example';
  BlankPath: string = '/';
  Styles: StylingObserver = {};
  WindowDimensions: WindowSize = {
    width: 0,
    height: 0
  };

  URL = this.sanitize.bypassSecurityTrustResourceUrl(this.IframePath);

  @ViewChild('resizeFrame', {static: false}) ResizeFrame!: ElementRef;

  @ViewChild('responsiveWindow', {static: false}) ResponsiveWindow!: ElementRef;
  @ViewChild('tinker', {static: false}) Tinker!: ElementRef;

  //@Select(SrcryBoxSelectors.getSrcryBoxStyles) Styles$!: Observable<SrcryBoxStateModel>;

  TestData!: SrcryBoxStateModel;
  ToggleIFrame: boolean = true;

  StyleIframe: boolean = false;

  //CompRef: ComponentRef<BaseSizeExampleComponent> | undefined;

  @Input() ComponentInjector! : Type<Component>;
  @Input() WindowSizeReadoutToggle : boolean = false;

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
      private resolver: ComponentFactoryResolver
    ){
      this.WindowDimensions = {
        width: this.ResizeFrame?.nativeElement.offsetWidth,
        height: this.ResizeFrame?.nativeElement.offsetHeight
    };
  }

  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void{
    this.createComponent();
  }

  ngAfterViewChecked(){
  }

  public createComponent(): void{
    //const compFactory = this.resolver.resolveComponentFactory(BaseSizeExampleComponent);
    //const styles: string = './base-size-example.component.css';
    
    const frame = this.ResponsiveWindow?.nativeElement.contentDocument || this.ResponsiveWindow?.nativeElement.contentWindow;

    //const componentInstance : ComponentRef<BaseSizeExampleComponent> = this.vcRef.createComponent(BaseSizeExampleComponent, {ngModuleRef: this.moduleRef});
    const componentInstance : ComponentRef<unknown> = this.vcRef.createComponent(this.ComponentInjector);

    const srcryStyles = document.createElement('style');
    console.log(frame);
    srcryStyles.innerText = "* { padding : 0; margin : 0; box-sizing: border-box; overflow: hidden; } body { display : grid; place-items: center; height: 100vh; max-height: 100vh; } "

    const srcryLink = document.createElement('link');
    srcryLink.rel = 'stylesheet';
    srcryLink.type = 'text/css';
    srcryLink.href = 'styles.css';

    frame.head.appendChild(srcryStyles);
    frame.head.appendChild(srcryLink);
    frame.body.appendChild(componentInstance.location.nativeElement);
  }

  public iframeInit():void {
    this.data.getStyleObject().subscribe(a => {
      this.TestData = {...a};
      this.dataB.setStyles(a);
    });
  }


  public sizeListener(entry: ResizeObserverEntry[]):void{
    this.WindowDimensions = {
      width  : Math.floor(entry[0].contentRect.width),
      height : Math.floor(entry[0].contentRect.height)
    };
  }

}*/
