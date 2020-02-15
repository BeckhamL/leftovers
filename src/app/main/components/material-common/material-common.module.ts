import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
@NgModule({

  imports: [
    BrowserModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule
  ],
  exports: [
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule
  ],
  providers: []
})
export class MaterialCommonModule { }
