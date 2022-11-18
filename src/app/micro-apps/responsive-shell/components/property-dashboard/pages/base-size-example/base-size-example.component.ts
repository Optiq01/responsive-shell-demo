import { AfterViewInit, Component, OnDestroy, OnInit, NgZone, AfterViewChecked, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { StylingObserver } from 'src/app/micro-apps/responsive-shell/responsive-shell.service';
import { SrcryBoxStateModel } from 'src/shared/states/srcry-box/srcry-box-state.model';
import { SrcryBoxSelectors as sel, SrcryBoxSelectors } from 'src/shared/states/srcry-box/srcry-box.selectors';
import { BaseSizeSelectors as selB } from 'src/shared/states/srcry-box/sub-states/base-size/base-size-state.selectors';
import { SrcryBoxState } from 'src/shared/states/srcry-box/srcry-box.state';
import { ResponsiveShellService } from 'src/app/micro-apps/responsive-shell/responsive-shell.service';
import { SrcryStylesChannelService } from 'src/app/micro-apps/responsive-shell/srcry-styles-channel.service';
import { BaseSizeExampleService } from './base-size-example.service';
//import { style } from '@angular/animations';
import { BaseSizeAnalyzer } from '@srcry-types';
import { AnalyzerService } from '../../../analyzer-window/analyzer.service';
import { SizeReaderType } from './srcry-box-reader/srcry-box-reader.component';
//import { ElementRef } from '@angular/core';

export interface CoreSizeReaderProp{ 'width': string; }

@Component({
  selector: 'base-size-example',
  templateUrl: './base-size-example.component.html',
  /*styles: [
    ':host { grid-area: 1/1/2/2; display: grid; width: 100%; height: auto; max-height: 100vh; place-items: center; padding: 0; box-sizing: border-box; place-self: center; }',
  
  '.boxShell{ grid-area: 1/1/2/2; display: grid; background-color:cadetblue; overflow: hidden; --edgeWidth: calc(var(--baseSize-w-nudge-master) / 2); --edgeHeight: calc(var(--baseSize-h-nudge-master) / 2); grid-template-columns: var(--edgeWidth) auto var(--edgeWidth); grid-template-rows: var(--edgeHeight) auto var(--edgeHeight); }',
  
  '.coreBox{ display: block; grid-area: 2/2/3/3; background-color: orange; }',
  
  '.reader{ grid-area: 2/2/3/3; display: block; opacity: 0; height: 0; }'
  ],*/
  styleUrls: ['./base-size-example.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BaseSizeExampleComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {

  //BoxStyles: SrcryBoxStateModel | undefined;
  @Select(sel.getSrcryBoxStyles) BoxStyles$!: Observable<SrcryBoxStateModel>;

  SrcryStyleChannel:BroadcastChannel = new BroadcastChannel('srcry-styles');

  SrcryStyles : BehaviorSubject<any> = new BehaviorSubject<SrcryBoxStateModel | undefined>(undefined);

  Loaded: boolean = false;
  //BoxStyles!: BehaviorSubject<SrcryBoxStateModel>;

  //BoxStyles$: Observable<SrcryBoxStateModel>;
  TestProp$! :any;

  AnalyzerTab: SizeReaderType = 'base-size';
  
  @ViewChild('coreSizeWReader', {static: false}) CoreSizeWReader!: ElementRef;
  @ViewChild('nudgeSizeWReader', {static: false}) NudgeSizeWReader!: ElementRef;

  @ViewChild('coreSizeHReader', {static: false}) CoreSizeHReader!: ElementRef;
  @ViewChild('nudgeSizeHReader', {static: false}) NudgeSizeHReader!: ElementRef;

  //@ViewChild('fullWReader', {static: false}) FullWReader!: ElementRef;
  //@ViewChild('fullHReader', {static: false}) FullHReader!: ElementRef;
  @ViewChild('fullBoxReader', {static: false}) FullBoxReader!: ElementRef;
  
  constructor(private store: Store,
    private data: ResponsiveShellService,
    private dataB: BaseSizeExampleService,
    private zone: NgZone,
    private analyzer: AnalyzerService
    ) {
    //this.initStyles();
    //this. BoxStyles$ = this.store.select(sel.getSrcryBoxStyles);
    //console.log(this.BoxStyles$);
  }

  ngOnInit(): void {

    this.SrcryStyleChannel.addEventListener('message', event =>{
      this.SrcryStyles.next(event.data.data);

      //this.CoreSizeW.next({'width': event.data.data['--baseSize-w']});
      //this.NudgeSizeW.next({'width': })
      //console.log(this.CoreSizeW);

      //console.log(event.data.data);
    });

    this.analyzer.getCurrentTab().subscribe(a => this.AnalyzerTab = a);

    //document.getElementById('responsiveWindow')?.addEventListener('resize', ()=>{ this.updateAnalyzer();});

    window.frames[0].window.addEventListener('resize', ()=>{
      //this.updateAnalyzer();
      //console.log(window.frames);
    });

    //this.styleBody();

  }

  ngAfterViewInit():void{
    this.SrcryStyleChannel.postMessage({
      type: 'init',
      data: 'init'
    });
    //this.styleBody();
    //this.updateAnalyzer();
  }
  
  ngAfterViewChecked():void{
    /*this.SrcryStyleChannel.postMessage({
      type: 'init',
      data: 'init'
    });*/
    //this.initAnalyzer();
  }

  ngOnDestroy():void{
    //this.BoxStyles = undefined;
  }

  private initAnalyzer(): void {
    if(!this.Loaded && this.FullBoxReader.nativeElement.offsetWidth > 0){
      //this.updateAnalyzer();
      this.Loaded = true;
      //console.log('loaded');
    }
  }

  private styleBody():void{
    const styles = document.createElement('style');

    /*styles.innerText = `
    * { padding : 0; margin : 0; box-sizing: border-box; overflow: hidden; } `+
    `body { display : grid; place-items: center; height: 100vh; max-height:100vh; }`;*/

    
    //console.log(window.document.head);
    //window.document.body.appendChild(styles);

    
  }

  private readSizes():void{

    const baseSizeW: number = this.FullBoxReader.nativeElement.style.width;

    //console.log(baseSizeW);

  }

  private updateAnalyzer():void{
    const params: BaseSizeAnalyzer = {
      active: true,
      coreSize: {
        width: this.CoreSizeWReader.nativeElement.offsetWidth,
        height: this.CoreSizeHReader.nativeElement.offsetWidth
      },
      nudgeSize: {
        width: this.NudgeSizeWReader.nativeElement.offsetWidth,
        height: this.NudgeSizeHReader.nativeElement.offsetWidth
      },
      elementSize: {
        width: this.FullBoxReader.nativeElement.offsetWidth,
        height: this.FullBoxReader.nativeElement.offsetHeight
      }
    };

    this.SrcryStyleChannel.postMessage({
      type:'baseSize-analyzer',
      data: params
    });

    //console.log('analyzer updated');
    this.readSizes();
  }

  private initStyles():void{
    //this.store.select(sel.getBaseSizeW).subscribe(a => this.TestProp$ = a);
    /*this.store.select(sel.getSrcryBoxStyles).subscribe(a => {
      this.TestProp = a.crushGapW;
      console.log(this.TestProp);
    });*/
    //this.store.select(sel.getSrcryBoxStyles).subscribe(a=> {this.BoxStyles = a; console.log(a);});
    //this.store.select(SrcryBoxSelectors.getSrcryBoxStyles).subscribe(a => this.TestProp$ = a);
  }

}
