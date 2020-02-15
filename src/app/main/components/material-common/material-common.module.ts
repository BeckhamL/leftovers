import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({

  imports: [
    BrowserModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: []
})
export class MaterialCommonModule { }
