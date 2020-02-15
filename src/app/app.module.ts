import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCommonModule } from './main/components/material-common/material-common.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    BrowserAnimationsModule,
    MaterialCommonModule
  ],
  exports: [
    MaterialCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
