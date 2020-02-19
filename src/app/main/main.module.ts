import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { SiteCommonModule } from './components/site-common/site-common.module';
import { MaterialCommonModule } from './components/material-common/material-common.module';
import { DashboardCommonModule } from './components/dashboard-common/dashboard-common.module';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import { PreferencesStepperComponent } from './preferences/preferences-stepper/preferences-stepper.component';
@NgModule({
  declarations: [
    DashboardComponent,
    PageNotFoundComponent,
    PreferencesComponent,
    PreferencesStepperComponent
  ],
  imports: [
    BrowserModule,
    SiteCommonModule,
    MaterialCommonModule,
    DashboardCommonModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    DashboardComponent,
    PageNotFoundComponent,
    PreferencesComponent,
    PreferencesStepperComponent
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class MainModule { }
