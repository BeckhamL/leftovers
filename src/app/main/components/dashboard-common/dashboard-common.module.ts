import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialCommonModule } from "../material-common/material-common.module";
import { MatButtonModule } from "@angular/material/button";
import { TabGroupComponent } from "./tab-group/tab-group.component";
import { MatTabsModule } from "@angular/material/tabs";
@NgModule({
  declarations: [TabGroupComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MaterialCommonModule,
    MatTabsModule
  ],
  exports: [MaterialCommonModule, TabGroupComponent],
  providers: []
})
export class DashboardCommonModule {}
