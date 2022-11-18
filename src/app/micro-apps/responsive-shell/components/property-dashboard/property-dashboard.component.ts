import { animateChild } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BoxSizeParams, MtSizeOptionType } from '@srcry-types';
import { Observable } from 'rxjs';
import { BaseSizeSelectors } from 'src/shared/states/srcry-box/sub-states/base-size/base-size-state.selectors';
//import { BaseSizeState } from 'src/shared/states/srcry-box/sub-states/base-size/base-size.state';
import { BaseSizeActions as acn } from 'src/shared/states/srcry-box/sub-states/base-size/base-size-state.actions';
import { PropertyDashboardService } from './property-dashboard.service';
import { SizeReaderType } from './pages/base-size-example/srcry-box-reader/srcry-box-reader.component';


export interface PropertyDashLink{
  name: string;
  path: SizeReaderType;
}

export const TABS: PropertyDashLink[] = [
  {name: 'Crush Gap', path: 'crush-gap'},
  {name: 'Base Size', path: 'base-size'},
  {name: 'Edge Chase', path: 'edge-chase'},
  {name: 'Chase Stop', path: 'chase-stop'},
  {name: 'Squish Growth', path: 'squish-growth'},
  {name: 'Stretch Shrink', path: 'stretch-shrink'},
]


@Component({
  selector: 'property-dashboard',
  templateUrl: './property-dashboard.component.html',
  styleUrls: ['./property-dashboard.component.css']
})
export class PropertyDashboardComponent implements OnInit {

  Tabs: PropertyDashLink[] | undefined;
  CurrentTab: string = 'base-size';


  

  //BaseSizeW = this.store.select(BaseSizeSelectors.getBaseSizeW);

  constructor(private store: Store, private service: PropertyDashboardService) { }

  ngOnInit(): void {
    this.Tabs = TABS;
  }

  public setCurrentTab(tab: SizeReaderType):void{
    this.CurrentTab = tab;
    this.service.setCurrentTab(tab);
  }

  /*public someDispatch():void{
    this.store.dispatch(new acn.SetBaseSizeW({size: 'loMed', scale: '2', speed: '8'}));
  }*/

}
