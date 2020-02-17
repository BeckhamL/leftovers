import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialCommonModule } from "../material-common/material-common.module";
import { MatButtonModule } from "@angular/material/button";
import { TabGroupComponent } from "./tab-group/tab-group.component";
import { MatTabsModule } from "@angular/material/tabs";
import { InputListComponent } from "./input-list/input-list.component";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { ListItemComponent } from './list-item/list-item.component';
@NgModule({
  declarations: [TabGroupComponent, InputListComponent, ListItemComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MaterialCommonModule,
    MatTabsModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [MaterialCommonModule, TabGroupComponent, InputListComponent],
  providers: []
})
export class DashboardCommonModule {}
