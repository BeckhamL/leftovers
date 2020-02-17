import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { ButtonComponent } from "./button/button.component";
import { MaterialCommonModule } from "../material-common/material-common.module";
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import { EditModalComponent } from './edit-modal/edit-modal.component';
@NgModule({
  declarations: [FooterComponent, ButtonComponent, EditModalComponent],
  imports: [BrowserModule, MatButtonModule, MaterialCommonModule, MatIconModule],
  exports: [FooterComponent, ButtonComponent, MaterialCommonModule],
  providers: [],
  entryComponents: [EditModalComponent]
})
export class SiteCommonModule {}
