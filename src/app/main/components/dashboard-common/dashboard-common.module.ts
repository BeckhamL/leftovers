import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialCommonModule } from "../material-common/material-common.module";
import { MatButtonModule } from "@angular/material/button";
import { TabGroupComponent } from "./tab-group/tab-group.component";
import { MatTabsModule } from "@angular/material/tabs";
import { InputListComponent } from "./input-list/input-list.component";
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [TabGroupComponent, InputListComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MaterialCommonModule,
    MatTabsModule,
    MatListModule
  ],
  exports: [MaterialCommonModule, TabGroupComponent, InputListComponent],
  providers: []
})
export class DashboardCommonModule {}
