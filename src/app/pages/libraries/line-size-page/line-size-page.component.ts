import { Component, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { LineSizeDemoComponent } from 'src/app/demonstration-components/line-size-demo/line-size-demo.component';
import { LineSizeDemoService } from 'src/app/demonstration-components/line-size-demo/line-size-demo.service';

@Component({
  selector: 'line-size-page',
  templateUrl: './line-size-page.component.html',
  styleUrls: ['./line-size-page.component.css']
})
export class LineSizePageComponent implements OnInit {

  LineSizeDemo : any = LineSizeDemoComponent;

  constructor(private router: Router, private lineService : LineSizeDemoService) { }

  ngOnInit(): void {

    this.lineService.setShowSize(true);
  }

  public previousPage(): void { this.router.navigateByUrl('font-size'); }

  public nextPage(): void { this.router.navigateByUrl('configuration-class-intro'); }

}
