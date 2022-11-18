import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigClassIntroPageComponent } from './pages/config-classes/config-class-intro-page/config-class-intro-page.component';
import { DemonstrationComponent } from './pages/demonstration/demonstration.component';
import { BoxSizeDemoPageComponent } from './pages/firefox-page/demo-pages/box-size-demo-page/box-size-demo-page.component';
import { LineSizeDemoPageComponent } from './pages/firefox-page/demo-pages/line-size-demo-page/line-size-demo-page.component';
import { LineSizeDemoPageModule } from './pages/firefox-page/demo-pages/line-size-demo-page/line-size-demo-page.module';
import { SrcryBoxDemoPageComponent } from './pages/firefox-page/demo-pages/srcry-box-demo-page/srcry-box-demo-page.component';
import { TextSizeDemoPageComponent } from './pages/firefox-page/demo-pages/text-size-demo-page/text-size-demo-page.component';
import { FirefoxPageComponent } from './pages/firefox-page/firefox-page.component';
import { GettingStartedIntroPageComponent } from './pages/getting-started/getting-started-intro-page/getting-started-intro-page.component';
//import { BaseSizeExampleComponent } from './micro-apps/responsive-shell/components/property-dashboard/pages/base-size-example/base-size-example.component';
//import { ResponsiveShellComponent } from './micro-apps/responsive-shell/responsive-shell.component';
//import { GettingStartedIntroPageComponent } from './pages/getting-started/getting-started-intro-page/getting-started-intro-page.component';
import { SetupPageComponent } from './pages/getting-started/setup-page/setup-page.component';
import { TheoryPageComponent } from './pages/getting-started/theory-page/theory-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BoxSizePageComponent } from './pages/libraries/box-size-page/box-size-page.component';
import { FontSizePageComponent } from './pages/libraries/font-size-page/font-size-page.component';
import { LibrariesIntroPageComponent } from './pages/libraries/libraries-intro-page/libraries-intro-page.component';
import { LineSizePageComponent } from './pages/libraries/line-size-page/line-size-page.component';
import { MeasuringTapePageComponent } from './pages/libraries/measuring-tape-page/measuring-tape-page.component';

const routes: Routes = [
  //{path: 'responsive-shell', component: ResponsiveShellComponent},
  //{path: 'base-size-example', component: BaseSizeExampleComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'getting-started', component: GettingStartedIntroPageComponent},
  {path: 'theory', component: TheoryPageComponent},
  {path: 'setup', component: SetupPageComponent},
  {path: 'libraries', component: LibrariesIntroPageComponent},
  {path: 'box-size', component: BoxSizePageComponent},
  {path: 'measuring-tape', component: MeasuringTapePageComponent},
  {path: 'font-size', component: FontSizePageComponent},
  {path: 'line-size', component: LineSizePageComponent},
  {path: 'configuration-class-intro', component: ConfigClassIntroPageComponent},
  {path: 'firefox-page', component: FirefoxPageComponent},
  //{path: '', redirectTo: '/responsive-shell', pathMatch: 'full'}
  {path: 'srcry-box-demo', component: SrcryBoxDemoPageComponent},
  {path: 'text-size-demo', component: TextSizeDemoPageComponent},
  {path: 'line-size-demo', component: LineSizeDemoPageComponent},
  {path: 'box-size-demo', component: BoxSizeDemoPageComponent},
  {path: 'demonstration-page', component: DemonstrationComponent},
  {path: '', redirectTo: '/demonstration-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
