import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { GettingStartedIntroPageModule } from './getting-started/getting-started-intro-page/getting-started-intro-page.module';
import { SetupPageModule } from './getting-started/setup-page/setup-page.module';
import { TheoryPageModule } from './getting-started/theory-page/theory-page.module';
import { HomePageModule } from './home-page/home-page.module';
import { BoxSizePageModule } from './libraries/box-size-page/box-size-page.module';
import { MeasuringTapePageModule } from './libraries/measuring-tape-page/measuring-tape-page.module';
import { FontSizePageModule } from './libraries/font-size-page/font-size-page.module';
import { LineSizePageModule } from './libraries/line-size-page/line-size-page.module';
import { GettingStartedIntroPageModule } from './getting-started/getting-started-intro-page/getting-started-intro-page.module';
import { DemonstrationModule } from './demonstration/demonstration.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GettingStartedIntroPageModule,
    SetupPageModule,
    TheoryPageModule,
    HomePageModule,
    BoxSizePageModule,
    MeasuringTapePageModule,
    FontSizePageModule,
    LineSizePageModule,
    DemonstrationModule
  ],
  exports: [
    CommonModule,
    GettingStartedIntroPageModule,
    SetupPageModule,
    TheoryPageModule,
    HomePageModule,
    BoxSizePageModule,
    MeasuringTapePageModule,
    FontSizePageModule,
    LineSizePageModule,
    DemonstrationModule
  ]
})
export class PagesModule { }
