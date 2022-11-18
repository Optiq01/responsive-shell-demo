import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupPageComponent } from './setup-page.component';



@NgModule({
  declarations: [
    SetupPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SetupPageComponent
  ]
})
export class SetupPageModule { }
