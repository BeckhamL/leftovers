import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { ButtonComponent } from "./button/button.component";
import { MaterialCommonModule } from "../material-common/material-common.module";
import { MatButtonModule } from "@angular/material/button";
@NgModule({
  declarations: [FooterComponent, ButtonComponent],
  imports: [BrowserModule, MatButtonModule, MaterialCommonModule],
  exports: [FooterComponent, ButtonComponent, MaterialCommonModule],
  providers: []
})
export class SiteCommonModule {}
