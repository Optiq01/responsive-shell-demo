import { Component, Input, OnInit } from '@angular/core';

export type EquationType = 'add' | 'subtract' | 'multiply' | 'divide';

export interface DemoEquation {
  numberA : string;
  equation : EquationType;
  numberB : string;
  result : string;
}

export const DEMOEQUATION: DemoEquation = {
  numberA: '77mm',
  equation: 'divide',
  numberB: '1.618',
  result: '47.589mm'
}

@Component({
  selector: 'equation-component',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  @Input() Equation! : DemoEquation;

  constructor() { }

  ngOnInit(): void {
    //this.Equation = DEMOEQUATION;
  }

}
