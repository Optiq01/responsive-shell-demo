import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquationComponent } from './equation.component';



@NgModule({
  declarations: [
    EquationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    EquationComponent
  ]
})
export class EquationComponentModule { }
