import { AfterContentChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, OnChanges, OnInit, Self, SimpleChanges, ViewChild, ɵsetCurrentInjector } from '@angular/core';
import { SrcryReaderDimension } from '@srcry-types';
import { AnalyzerService } from '../../../../analyzer-window/analyzer.service';
import { SrcryBoxReaderService } from './srcry-box-reader.service';

export type SizeReaderType = 'crush-gap' | 'squish-growth' | 'base-size' |
                             'edge-chase' | 'chase-stop' | 'stretch-shrink';

export type BehaviorType = 'crush gap' | 'squish growth' | 'base size' | 'edge chase' |
                           'chase stop' | 'stretch shrink' | 'error';

export interface CurrentBehaviorReadout { w: BehaviorType; h: BehaviorType; }

export interface ElementReadout { elementSize : SrcryReaderDimension; }

export interface CrushGapReadout extends ElementReadout {
  crushSize : SrcryReaderDimension;
  currentBehavior : CurrentBehaviorReadout;
}

export interface SquishGrowthReadout extends ElementReadout {
  squishGrowthMaster   : SrcryReaderDimension;
  squishGrowthMaxCore  : SrcryReaderDimension;
  squishGrowthMaxNudge : SrcryReaderDimension;
  currentBehavior      : CurrentBehaviorReadout;
}

export interface BaseSizeReadout extends ElementReadout {
  baseSizeMaster  : SrcryReaderDimension;
  baseSizeCore    : SrcryReaderDimension;
  baseSizeNudge   : SrcryReaderDimension;
  currentBehavior : CurrentBehaviorReadout;
}

export interface EdgeChaseReadout extends ElementReadout {
  edgeChaseMaster : SrcryReaderDimension;
  edgeChaseCore   : SrcryReaderDimension;
  edgeChaseNudge  : SrcryReaderDimension;
  currentBehavior : CurrentBehaviorReadout;
}

export interface ChaseStopReadout extends ElementReadout {
  chaseStopMaster : SrcryReaderDimension;
  chaseStopCore   : SrcryReaderDimension;
  chaseStopNudge  : SrcryReaderDimension;
  currentBehavior : CurrentBehaviorReadout;
}

export interface StretchShrinkReadout extends ElementReadout {
  stretchShrinkMaster   : SrcryReaderDimension;
  stretchShrinkMinCore  : SrcryReaderDimension;
  stretchShrinkMinNudge : SrcryReaderDimension;
  currentBehavior : CurrentBehaviorReadout;
}

export interface SrcryNudgeReadout{
  positive : boolean;
  size     : string;
}

export interface BehaviorReadoutSingle{
  element: number;
  crushGap: number;
  squishGrowth: number;
  baseSize: number;
  edgeChase: number;
  chaseStop: number;
  chaseStopToggle: number;
  stretchShrink: number;
  stretchShrinkEquation: number;

}

export interface BehaviorReadout{
  element: SrcryReaderDimension;
  crushGap: SrcryReaderDimension;
  squishGrowth: SrcryReaderDimension;
  baseSize: SrcryReaderDimension;
  edgeChase: SrcryReaderDimension;
  chaseStop: SrcryReaderDimension;
  chaseStopToggle: SrcryReaderDimension;
  stretchShrink: SrcryReaderDimension;
  stretchShrinkEquation: SrcryReaderDimension;

}

export interface BehaviorResults{
  width: string;
  height: string;
}

/*export enum SrcryNudgeProp {
  BaseSizeWnudgeSize = 'BaseSizeWnudgeSize',
  BaseSizeHnudgeSize = 'BaseSizeHnudgeSize',
  EdgeChaseWnudgeSize = 'EdgeChaseWnudgeSize',
  EdgeChaseHnudgeSize = 'EdgeChaseHnudgeSize',
  ChaseStopWnudgeSize = 'ChaseStopWnudgeSize',
  ChaseStopHnudgeSize = 'ChaseStopHnudgeSize'
}*/

export type SrcryNudgeProp = 'BaseSizeWnudgeSize' | 'BaseSizeHnudgeSize' | 'EdgeChaseWnudgeSize' |
                             'EdgeChaseHnudgeSize' | 'ChaseStopWnudgeSize' | 'ChaseStopHnudgeSize';



@Component({
  selector: 'srcry-box-reader',
  templateUrl: './srcry-box-reader.component.html',
  styleUrls: ['./srcry-box-reader.component.css']
})
export class SrcryBoxReaderComponent implements OnInit, AfterViewInit, OnChanges {

  Size: SizeReaderType = 'base-size';

  @ViewChild('triggerFrame', {static: false}) TriggerFrame! : ElementRef;

  @ViewChild('elementSizeWreader', { static: true }) ElementSizeWreader! : ElementRef;
  @ViewChild('elementSizeHreader', { static: true }) ElementSizeHreader! : ElementRef;

  /*ElementSize : SrcryReaderDimension = { w: 0, h: 0 };*/
  
  
  
  @ViewChild('crushWmasterReader', { static: false }) CrushWmasterReader! : ElementRef;
  @ViewChild('crushHmasterReader', { static: false }) CrushHmasterReader! : ElementRef;
  
  @ViewChild('crushWelementReader', { static: false }) CrushWelementReader! : ElementRef;
  @ViewChild('crushHelementReader', { static: false }) CrushHelementReader! : ElementRef;
  
  /*CrushMasterSize    : SrcryReaderDimension = { w: 0, h: 0 };*/
  
  
  
  @ViewChild('squishGrowthWmasterReader', { static: false }) SquishGrowthWmasterReader! : ElementRef;
  @ViewChild('squishGrowthHmasterReader', { static: false }) SquishGrowthHmasterReader! : ElementRef;
  
  @ViewChild('squishGrowthWmaxCoreSizeReader', { static: false }) SquishGrowthWmaxCoreSizeReader! : ElementRef;
  @ViewChild('squishGrowthHmaxCoreSizeReader', { static: false }) SquishGrowthHmaxCoreSizeReader! : ElementRef;
  
  @ViewChild('squishGrowthWmaxNudgeSizeReader', { static: false }) SquishGrowthWmaxNudgeSizeReader! : ElementRef;
  @ViewChild('squishGrowthHmaxNudgeSizeReader', { static: false }) SquishGrowthHmaxNudgeSizeReader! : ElementRef;
  
  /*SquishGrowthMasterSize   : SrcryReaderDimension = { w: 0, h: 0 };
  SquishGrowthMaxCoreSize  : SrcryReaderDimension = { w: 0, h: 0 };
  SquishGrowthMaxNudgeSize : SrcryReaderDimension = { w: 0, h: 0 };*/
  SquishGrowthMaxWnudgeSize: boolean = true;
  SquishGrowthMaxHnudgeSize: boolean = true;
  
  
  
  @ViewChild('baseSizeWmasterReader', { static: false }) BaseSizeWmasterReader! : ElementRef;
  @ViewChild('baseSizeHmasterReader', { static: false }) BaseSizeHmasterReader! : ElementRef;

  @ViewChild('baseSizeWcoreReader',  { static: false }) BaseSizeWcoreReader!  : ElementRef;
  @ViewChild('baseSizeHcoreReader',  { static: false }) BaseSizeHcoreReader!  : ElementRef;
  
  @ViewChild('baseSizeWnudgeReader', { static: false }) BaseSizeWnudgeReader! : ElementRef;
  @ViewChild('baseSizeHnudgeReader', { static: false }) BaseSizeHnudgeReader! : ElementRef;

  BaseSizeWnudgeSize: boolean = true;
  BaseSizeHnudgeSize: boolean = true;
  
  /*BaseSizeMasterSize : SrcryReaderDimension = { w: 0, h: 0 };
  BaseSizeCoreSize   : SrcryReaderDimension = { w: 0, h: 0 };
  BaseSizeNudgeSize  : SrcryReaderDimension = { w: 0, h: 0 };*/
  
  
  
  @ViewChild('edgeChaseWmasterReader', { static: false }) EdgeChaseWmasterReader! : ElementRef;
  @ViewChild('edgeChaseHmasterReader', { static: false }) EdgeChaseHmasterReader! : ElementRef;
 
  @ViewChild('edgeChaseWelementReader', { static: false }) EdgeChaseWelementReader! : ElementRef;
  @ViewChild('edgeChaseHelementReader', { static: false }) EdgeChaseHelementReader! : ElementRef;

  @ViewChild('edgeChaseWcoreReader', { static: false }) EdgeChaseCoreSizeWreader! : ElementRef;
  @ViewChild('edgeChaseHcoreReader', { static: false }) EdgeChaseCoreSizeHreader! : ElementRef;
  
  @ViewChild('edgeChaseNudgeSizeWreader', { static: false }) EdgeChaseNudgeSizeWreader! : ElementRef;
  @ViewChild('edgeChaseNudgeSizeHreader', { static: false }) EdgeChaseNudgeSizeHreader! : ElementRef;
  
  EdgeChaseWnudgeSize: boolean = true;
  EdgeChaseHnudgeSize: boolean = true;

  /*EdgeChaseMasterSize : SrcryReaderDimension = { w: 0, h: 0 };
  EdgeChaseCoreSize   : SrcryReaderDimension = { w: 0, h: 0 };
  EdgeChaseNudgeSize  : SrcryReaderDimension = { w: 0, h: 0 };*/
  
  
  
  @ViewChild('chaseStopWmasterReader', { static: false }) ChaseStopWmasterReader! : ElementRef;
  @ViewChild('chaseStopHmasterReader', { static: false }) ChaseStopHmasterReader! : ElementRef;

  @ViewChild('chaseStopWcoreReader',  { static: false }) ChaseStopCoreSizeWreader!  : ElementRef;
  @ViewChild('chaseStopHcoreReader',  { static: false }) ChaseStopCoreSizeHreader!  : ElementRef;
  
  @ViewChild('chaseStopWnudgeReader', { static: false }) ChaseStopNudgeSizeWreader! : ElementRef;
  @ViewChild('chaseStopHnudgeReader', { static: false }) ChaseStopNudgeSizeHreader! : ElementRef;

  @ViewChild('chaseStopToggleW', { static: false }) ChaseStopToggleW! : ElementRef;
  @ViewChild('chaseStopToggleH', { static: false }) ChaseStopToggleH! : ElementRef;
  
  ChaseStopWnudgeSize: boolean = true;
  ChaseStopHnudgeSize: boolean = true;
  /*ChaseStopMasterSize : SrcryReaderDimension = { w: 0, h: 0 };
  ChaseStopCoreSize   : SrcryReaderDimension = { w: 0, h: 0 };
  ChaseStopNudgeSize  : SrcryReaderDimension = { w: 0, h: 0 };*/
  
  
  
  @ViewChild('stretchShrinkWmasterReader', { static: false }) StretchShrinkWmasterReader! : ElementRef;
  @ViewChild('stretchShrinkHmasterReader', { static: false }) StretchShrinkHmasterReader! : ElementRef;
  
  @ViewChild('stretchShrinkWminCoreSizeReader', { static: false }) StretchShrinkWminCoreSizeReader! : ElementRef;
  @ViewChild('stretchShrinkHminCoreSizeReader', { static: false }) StretchShrinkHminCoreSizeReader! : ElementRef;
  
  @ViewChild('stretchShrinkWminNudgeSizeReader', { static: false }) StretchShrinkWminNudgeSizeReader! : ElementRef;
  @ViewChild('stretchShrinkHminNudgeSizeReader', { static: false }) StretchShrinkHminNudgeSizeReader! : ElementRef;
  
  @ViewChild('stretchShrinkWequation', { static: false }) StretchShrinkWequation! : ElementRef;
  @ViewChild('stretchShrinkHequation', { static: false }) StretchShrinkHequation! : ElementRef;
  
  StretchShrinkMinWnudgeSize: boolean = true;
  StretchShrinkMinHnudgeSize: boolean = true;
  /*StretchShrinkMasterSize   : SrcryReaderDimension = { w: 0, h: 0 };
  StretchShrinkMinCoreSize  : SrcryReaderDimension = { w: 0, h: 0 };
  StretchShrinkMinNudgeSize : SrcryReaderDimension = { w: 0, h: 0 };*/

  //TriggerObserver! : ResizeObserver;


  constructor(
    private readerService: SrcryBoxReaderService,
    private zone: NgZone,
    @Self() private host: ElementRef,
    private changeDetector: ChangeDetectorRef,
    private analyzer: AnalyzerService
  ) {}

  ngOnInit(): void {
    this.analyzer.getCurrentTab().subscribe(a => {
      this.Size = a;
      this.setReaders();
    })
    window.frames[0].addEventListener('resize', ()=>{ this.setReaders(); });
  
    const TriggerObserver = new ResizeObserver(entry =>{
      this.zone.run((entry)=> { this.setReaders(); });
    });
    TriggerObserver.observe(this.TriggerFrame.nativeElement);
    
    
  }
  
  ngAfterViewInit() : void {
    this.setReaders();
  }

  ngOnChanges(): void {
      //this.setReaders();
      //console.log(this.setNudge('var(--baseSize-w)'));
  }

  private setNudge(element: ElementRef, reader: string): void{
    
    const styles = window.getComputedStyle(element.nativeElement);
    const nudgeAmount   : string  = styles.getPropertyValue('right').replace('px', '');
    const nudgeScale    : string  = styles.getPropertyValue('left').replace('px','');
    const positiveCheck : boolean = this.positiveChecker(nudgeAmount);

    const toggler = (value: boolean)=>{
      switch(reader){
        case 'BaseSizeWnudgeSize': this.BaseSizeWnudgeSize = value; break;
        case 'BaseSizeHnudgeSize': this.BaseSizeHnudgeSize = value; break;
        case 'SquishGrowthmaxWnudgeSize' : this.SquishGrowthMaxWnudgeSize = value; break;
        case 'SquishGrowthmaxHnudgeSize' : this.SquishGrowthMaxHnudgeSize = value; break;
        case 'EdgeChaseWnudgeSize': this.EdgeChaseWnudgeSize = value; break;
        case 'EdgeChaseHnudgeSize': this.EdgeChaseHnudgeSize = value; break;
        case 'ChaseStopWnudgeSize': this.ChaseStopWnudgeSize = value; break;
        case 'ChaseStopHnudgeSize': this.ChaseStopHnudgeSize = value; break;
      }
    };

    //console.log(nudgeAmount);

    if(positiveCheck){
      const equation: number = Number(nudgeAmount) * Number(nudgeScale);

      console.log(equation);
      element.nativeElement.style.width = `${equation}px`;
      toggler(true);
      //this[reader as SrcryNudgeProp] = true;
    }
    else{
      const equation: number = Number(this.createPositiveNumber(nudgeAmount)) * Number(nudgeScale);

      console.log(equation);
      element.nativeElement.style.width = `${equation}px`;
      toggler(false);
      ///this[reader as SrcryNudgeProp] = false;
    }
  }

  private prepNudge(num: number, positive: boolean):number{
    if(positive){ return num; }
    else{ return this.createNegativeNumber(num); }
  }

  private positiveChecker(num : string): boolean {
    const splitter = num.toString().split('');

    if(splitter[0] === '-'){ return false; }
    else{ return true; }
  }

  private createPositiveNumber(num: string): string {
    const splitter: string[] = num.split('');
    const newNumber: string[] = [];

    splitter.forEach(a =>{ if(a !== '-'){ newNumber.push(a);} });

    return newNumber.join('');
  }

  private createNegativeNumber(num: number): number{
    const splitter: string[] = ['-'];

    num.toString().split('').forEach(a => {
      splitter.push(a);
    });
    console.log(Number(splitter.join('')));

    return Number(splitter.join(''));

  }

  private getElementSize(): SrcryReaderDimension {
    return {
      w: this.ElementSizeWreader.nativeElement.offsetWidth,
      h: this.ElementSizeHreader.nativeElement.offsetWidth
    };
  }



  private getCrushSize(): SrcryReaderDimension{
    return {
      w: this.CrushWmasterReader.nativeElement.offsetWidth,
      h: this.CrushHmasterReader.nativeElement.offsetWidth
    };
  }
  
  private getCrushElementSize(): SrcryReaderDimension{
    return {
      w: this.CrushWelementReader.nativeElement.offsetWidth,
      h: this.CrushHelementReader.nativeElement.offsetWidth
    };
  }



  private getSquishGrowthMaster(): SrcryReaderDimension{
    return {
      w: this.SquishGrowthWmasterReader.nativeElement.offsetWidth,
      h: this.SquishGrowthHmasterReader.nativeElement.offsetWidth
    }
  }
  
  private getSquishGrowthMaxNudge(): SrcryReaderDimension{
    return {
      w: this.SquishGrowthWmaxNudgeSizeReader.nativeElement.offsetWidth,
      h: this.SquishGrowthHmaxNudgeSizeReader.nativeElement.offsetWidth
    }
  }
  
  private getSquishGrowthMaxCore(): SrcryReaderDimension{
    return {
      w: this.SquishGrowthWmaxCoreSizeReader.nativeElement.offsetWidth,
      h: this.SquishGrowthHmaxCoreSizeReader.nativeElement.offsetWidth
    }
  }



  private getBaseSizeMaster(): SrcryReaderDimension{
    return {
      w: this.BaseSizeWmasterReader.nativeElement.offsetWidth,
      h: this.BaseSizeHmasterReader.nativeElement.offsetWidth
    }
  }

  private getBaseSizeCore(): SrcryReaderDimension{
    return {
      w: this.BaseSizeWcoreReader.nativeElement.offsetWidth,
      h: this.BaseSizeHcoreReader.nativeElement.offsetWidth
    }
  }

  private getBaseSizeNudge(): SrcryReaderDimension{
    console.log(this.prepNudge(this.BaseSizeWnudgeReader.nativeElement.offsetWidth, this.BaseSizeWnudgeSize));
    return {
      w: this.prepNudge(this.BaseSizeWnudgeReader.nativeElement.offsetWidth, this.BaseSizeWnudgeSize),
      h: this.prepNudge(this.BaseSizeHnudgeReader.nativeElement.offsetWidth, this.BaseSizeHnudgeSize)
    }
  }
  
  
  
  private getEdgeChaseMaster(): SrcryReaderDimension{
    return {
      w: this.EdgeChaseWmasterReader.nativeElement.offsetWidth,
      h: this.EdgeChaseHmasterReader.nativeElement.offsetWidth
    };
  }
  
  private getEdgeChaseElement(): SrcryReaderDimension{
    return {
      w: this.EdgeChaseWelementReader.nativeElement.offsetWidth,
      h: this.EdgeChaseHelementReader.nativeElement.offsetWidth
    };
  }

  private getEdgeChaseCore(): SrcryReaderDimension{
    return {
      w: this.EdgeChaseCoreSizeWreader.nativeElement.offsetWidth,
      h: this.EdgeChaseCoreSizeHreader.nativeElement.offsetWidth
    };
  }

  private getEdgeChaseNudge(): SrcryReaderDimension{
    return {
      w: this.EdgeChaseNudgeSizeWreader.nativeElement.offsetWidth,
      h: this.EdgeChaseNudgeSizeHreader.nativeElement.offsetWidth
    }
  }
  
  
  
  private getChaseStopMaster(): SrcryReaderDimension{
    return {
      w: this.ChaseStopWmasterReader.nativeElement.offsetWidth,
      h: this.ChaseStopHmasterReader.nativeElement.offsetWidth
    }
  }

  private getChaseStopCore(): SrcryReaderDimension{
    return {
      w: this.ChaseStopCoreSizeWreader.nativeElement.offsetWidth,
      h: this.ChaseStopCoreSizeHreader.nativeElement.offsetWidth
    }
  }

  private getChaseStopNudge(): SrcryReaderDimension{
    return {
      w: this.ChaseStopNudgeSizeWreader.nativeElement.offsetWidth,
      h: this.ChaseStopNudgeSizeHreader.nativeElement.offsetWidth
    };
  }
  
  private getChaseStopToggle(): SrcryReaderDimension{
    return {
      w: this.ChaseStopToggleW.nativeElement.offsetWidth,
      h: this.ChaseStopToggleH.nativeElement.offsetWidth
    };
  }



  private getStretchShrinkMaster(): SrcryReaderDimension{
    return {
      w: this.StretchShrinkWmasterReader.nativeElement.offsetWidth,
      h: this.StretchShrinkHmasterReader.nativeElement.offsetWidth
    }
  }
  
  private getStretchShrinkMinNudge(): SrcryReaderDimension{
    return {
      w: this.StretchShrinkWminNudgeSizeReader.nativeElement.offsetWidth,
      h: this.StretchShrinkHminNudgeSizeReader.nativeElement.offsetWidth
    }
  }
  
  private getStretchShrinkMinCore(): SrcryReaderDimension{
    return {
      w: this.StretchShrinkWminCoreSizeReader.nativeElement.offsetWidth,
      h: this.StretchShrinkHminCoreSizeReader.nativeElement.offsetWidth
    };
  }
  
  private getStretchShrinkEquation(): SrcryReaderDimension{
    return {
      w: this.StretchShrinkWequation.nativeElement.offsetWidth,
      h: this.StretchShrinkHequation.nativeElement.offsetWidth
    };
  }

  public triggerSizes(entry: ResizeObserverEntry){ this.setReaders(); console.log(entry); }



  private calulateBaseSizeCore(size: number, nudge: number, positive: boolean): number{
    if(positive){ return size + nudge; }
    else{ return size - nudge; }
  }

  private determineBehaviors(params: BehaviorReadout): CurrentBehaviorReadout{

    const width: BehaviorReadoutSingle = {
      element:       params.element.w,
      crushGap:      params.crushGap.w,
      squishGrowth:  params.squishGrowth.w,
      baseSize:      params.baseSize.w,
      edgeChase:     params.edgeChase.w,
      chaseStop:     params.chaseStop.w,
      chaseStopToggle: params.chaseStopToggle.w,
      stretchShrink: params.stretchShrink.w,
      stretchShrinkEquation: params.stretchShrinkEquation.w
    };
    
    const height: BehaviorReadoutSingle = {
      element:       params.element.h,
      crushGap:      params.crushGap.h,
      squishGrowth:  params.squishGrowth.h,
      baseSize:      params.baseSize.h,
      edgeChase:     params.edgeChase.h,
      chaseStop:     params.chaseStop.h,
      chaseStopToggle: params.chaseStopToggle.h,
      stretchShrink: params.stretchShrink.h,
      stretchShrinkEquation: params.stretchShrinkEquation.h
    };

    return {
            w: this.determineDimensionBehavior(width),
            h: this.determineDimensionBehavior(height)
           }
    
  }

  private determineDimensionBehavior(params: BehaviorReadoutSingle): BehaviorType{
    console.log(params);
    if(params.element === params.crushGap){ return 'crush gap'; }
    else if (params.element === params.squishGrowth){ return 'squish growth'; }
    else if(params.element === params.baseSize){ return 'base size'; }
    else if(params.element === params.edgeChase){ return 'edge chase'; }
    else if(params.element === params.chaseStop){ return 'chase stop'; }
    else if(params.element === params.stretchShrink){
      if(params.stretchShrinkEquation < params.chaseStopToggle){ return 'stretch shrink'; }
      else if(params.stretchShrinkEquation === params.chaseStopToggle){ return 'chase stop'; }
      else{ return 'error'; }
      
    }
    else{ return 'error'; }
  }



  private setReaders(): void{
    //const tester = this.setNudge(this.BaseSizeWnudgeReader, 'BaseSizeWnudgeSize');
    const currentBehavior : CurrentBehaviorReadout = this.determineBehaviors({
      element               : this.getElementSize(),
      crushGap              : this.getCrushElementSize(),
      squishGrowth          : this.getSquishGrowthMaster(),
      baseSize              : this.getBaseSizeMaster(),
      edgeChase             : this.getEdgeChaseElement(),
      chaseStop             : this.getChaseStopMaster(),
      chaseStopToggle       : this.getChaseStopToggle(),
      stretchShrink         : this.getStretchShrinkMaster(),
      stretchShrinkEquation : this.getStretchShrinkEquation()
    });

    switch(this.Size){
      case 'crush-gap':
        this.readerService.setCrushSizeReadings({
          crushSize: this.getCrushSize(),
          elementSize: this.getElementSize(),
          currentBehavior: currentBehavior
        });
        break;
        
      case 'squish-growth':
        this.setNudge(this.SquishGrowthWmaxNudgeSizeReader, 'SquishGrowthMaxWnudgeSize');
        this.setNudge(this.SquishGrowthHmaxNudgeSizeReader, 'SquishGrowthMaxHnudgeSize');
        this.readerService.setSquishGrowthReadings({
          squishGrowthMaster   : this.getSquishGrowthMaster(),
          squishGrowthMaxCore  : this.getSquishGrowthMaxCore(),
          squishGrowthMaxNudge : this.getSquishGrowthMaxNudge(),
          elementSize          : this.getElementSize(),
          currentBehavior      : currentBehavior
        });
        break;

      case 'base-size':
        this.setNudge(this.BaseSizeWnudgeReader, 'BaseSizeWnudgeSize');
        this.setNudge(this.BaseSizeHnudgeReader, 'BaseSizeHnudgeSize');
        this.readerService.setBaseSizeReadings({
          baseSizeMaster  : this.getBaseSizeMaster(),
          baseSizeCore    : this.getBaseSizeCore(),
          baseSizeNudge   : this.getBaseSizeNudge(),
          elementSize     : this.getElementSize(),
          currentBehavior : currentBehavior
        });
        break;
        
      case 'edge-chase':
        this.setNudge(this.EdgeChaseNudgeSizeWreader, 'EdgeChaseWnudgeSize');
        this.setNudge(this.EdgeChaseNudgeSizeHreader, 'EdgeChaseHnudgeSize');
        this.readerService.setEdgeChaseReadings({
          edgeChaseMaster : this.getEdgeChaseMaster(),
          edgeChaseCore   : this.getEdgeChaseCore(),
          edgeChaseNudge  : this.getEdgeChaseNudge(),
          elementSize     : this.getElementSize(),
          currentBehavior : currentBehavior
        });
        break;

      case 'chase-stop':
        this.setNudge(this.ChaseStopNudgeSizeWreader, 'ChaseStopWnudgeSize');
        this.setNudge(this.ChaseStopNudgeSizeHreader, 'ChaseStopHnudgeSize');
        this.readerService.setChaseStopReadings({
          chaseStopMaster : this.getChaseStopMaster(),
          chaseStopCore   : this.getChaseStopCore(),
          chaseStopNudge  : this.getChaseStopNudge(),
          elementSize     : this.getElementSize(),
          currentBehavior : currentBehavior
        });
        break;

      case 'stretch-shrink':
        this.setNudge(this.StretchShrinkWminNudgeSizeReader, 'StretchShrinkMinWnudgeSize');
        this.setNudge(this.StretchShrinkHminNudgeSizeReader, 'StretchShrinkMinHnudgeSize');
        this.readerService.setStretchShrinkReadings({
          stretchShrinkMaster   : this.getStretchShrinkMaster(),
          stretchShrinkMinCore  : this.getStretchShrinkMinCore(),
          stretchShrinkMinNudge : this.getStretchShrinkMinNudge(),
          elementSize           : this.getElementSize(),
          currentBehavior       : currentBehavior
        });
        break;
    }
  
  }

}
