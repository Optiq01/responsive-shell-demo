import { Component, ComponentRef, OnInit, Type } from '@angular/core';
import { BaseSizeExampleComponent } from 'src/app/micro-apps/responsive-shell/components/property-dashboard/pages/base-size-example/base-size-example.component';
import { ChaseStopExampleComponent } from 'src/app/micro-apps/responsive-shell/components/property-dashboard/pages/chase-stop-example/chase-stop-example.component';

@Component({
  selector    : 'home-page',
  templateUrl : './home-page.component.html',
  styleUrls   : ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  TestComponentA! : any;
  TestComponentB! : any;

  constructor() { }

  ngOnInit(): void {
    this.TestComponentA = BaseSizeExampleComponent;
    this.TestComponentB = ChaseStopExampleComponent;
  }

}
