import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SiteCommonModule } from './components/site-common/site-common.module';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    SiteCommonModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class MainModule { }
