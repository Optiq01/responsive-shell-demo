import { Component, OnInit } from '@angular/core';
import { AnalyzerService } from './analyzer.service';

@Component({
  selector: 'analyzer-window',
  templateUrl: './analyzer-window.component.html',
  styleUrls: ['./analyzer-window.component.css']
})
export class AnalyzerWindowComponent implements OnInit {

  CurrentTab!: string;

  constructor(private service: AnalyzerService) { }

  ngOnInit(): void {
    this.service.getCurrentTab().subscribe(a => this.CurrentTab = a);
  }

}
