import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { StylingObserver } from 'src/app/micro-apps/responsive-shell/responsive-shell.serviceB';

@Component({
  selector: 'base-size-box',
  templateUrl: './base-size-box.component.html',
  styleUrls: ['./base-size-box.component.css']
})
export class BaseSizeBoxComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
