import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MtSizeDemoComponent } from 'src/app/demonstration-components/mt-size-demo/mt-size-demo.component';

@Component({
  selector: 'measuring-tape-page',
  templateUrl: './measuring-tape-page.component.html',
  styleUrls: ['./measuring-tape-page.component.css']
})
export class MeasuringTapePageComponent implements OnInit {
  
  MtDemoComponent! : any;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.MtDemoComponent = MtSizeDemoComponent;

  }
 
  public previousPage(): void{ this.router.navigateByUrl('box-size'); }

  public nextPage(): void{ this.router.navigateByUrl('font-size'); }

}
