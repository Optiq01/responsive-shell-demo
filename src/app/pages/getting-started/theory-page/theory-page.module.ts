import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheoryPageComponent } from './theory-page.component';
import { SvgPhotoComponentModule } from 'src/app/demonstration-components/svg-photo-component/svg-photo-component.module';
import { EquationComponentModule } from 'src/app/demonstration-components/equation-component/equation-component.module';



@NgModule({
  declarations: [
    TheoryPageComponent
  ],
  imports: [
    CommonModule,
    SvgPhotoComponentModule,
    EquationComponentModule
  ],
  exports: [
    CommonModule,
    TheoryPageComponent
  ]
})
export class TheoryPageModule { }
