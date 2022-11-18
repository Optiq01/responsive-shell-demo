import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSpeedComponent } from './font-speed.component';



@NgModule({
  declarations: [
    FontSpeedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FontSpeedComponent
  ],
  bootstrap: [FontSpeedComponent]
})
export class FontSpeedModule { }
