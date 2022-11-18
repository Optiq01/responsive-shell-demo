import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LineSizeDemoComponent } from 'src/app/demonstration-components/line-size-demo/line-size-demo.component';
import { SrcryBoxDemoComponent } from 'src/app/demonstration-components/srcry-box-demo/srcry-box-demo.component';
import { TextSizeDemoComponent } from 'src/app/demonstration-components/text-size-demo/text-size-demo.component';

@Component({
  selector: 'app-getting-started-intro-page',
  templateUrl: './getting-started-intro-page.component.html',
  styleUrls: ['./getting-started-intro-page.component.css']
})
export class GettingStartedIntroPageComponent implements OnInit {

  SrcryBoxDemo! : any;
  TextSizeDemo! : any;
  LineSizeDemo! : any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.SrcryBoxDemo = SrcryBoxDemoComponent;
    this.TextSizeDemo = TextSizeDemoComponent;
    this.LineSizeDemo = LineSizeDemoComponent;
  }

  //public previousPage(): void { this.router.navigateByUrl('theory'); }

  public nextPage(): void { this.router.navigateByUrl('theory'); }

}
