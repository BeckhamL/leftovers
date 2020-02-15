import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SiteCommonModule } from './components/site-common/site-common.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    SiteCommonModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class MainModule { }
