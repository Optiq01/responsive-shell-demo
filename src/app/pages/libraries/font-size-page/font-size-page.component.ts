import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TextMeasurementComponent } from 'src/app/demonstration-components/text-demos/text-measurement/text-measurement.component';

@Component({
  selector: 'font-size-page',
  templateUrl: './font-size-page.component.html',
  styleUrls: ['./font-size-page.component.css']
})
export class FontSizePageComponent implements OnInit {
  TextDemoComponent! : any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.TextDemoComponent = TextMeasurementComponent;
  }

  public previousPage(): void { this.router.navigateByUrl('measuring-tape'); }

  public nextPage(): void { this.router.navigateByUrl('line-size'); }

}
