import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public previousPage(): void { this.router.navigateByUrl('theory'); }

  public nextPage(): void { this.router.navigateByUrl('libraries'); }

}
