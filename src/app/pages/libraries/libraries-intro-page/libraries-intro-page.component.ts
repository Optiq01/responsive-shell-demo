import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'libraries-intro-page',
  templateUrl: './libraries-intro-page.component.html',
  styleUrls: ['./libraries-intro-page.component.css']
})
export class LibrariesIntroPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  public nextPage(): void { this.router.navigateByUrl('box-size'); }

  public previousPage(): void { this.router.navigateByUrl('setup'); }

}
