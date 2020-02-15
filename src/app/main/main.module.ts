import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SiteCommonModule } from './components/site-common/site-common.module';
import { MaterialCommonModule } from './components/material-common/material-common.module';
import { DashboardCommonModule } from './components/dashboard-common/dashboard-common.module';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    SiteCommonModule,
    MaterialCommonModule,
    DashboardCommonModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class MainModule { }
