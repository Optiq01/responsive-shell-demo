import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrariesIntroPageComponent } from './libraries-intro-page.component';



@NgModule({
  declarations: [
    LibrariesIntroPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    LibrariesIntroPageComponent
  ]
})
export class LibrariesIntroPageModule { }
