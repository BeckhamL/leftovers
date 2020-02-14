import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class MainModule { }
