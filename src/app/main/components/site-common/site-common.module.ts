import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { ButtonComponent } from "./button/button.component";
import { MaterialCommonModule } from "../material-common/material-common.module";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { EditModalComponent } from "./edit-modal/edit-modal.component";
import { ConfirmationModalComponent } from "./confirmation-modal/confirmation-modal.component";
import { RouterModule } from "@angular/router";
import { IngredientListViewComponent } from "./ingredient-list-view/ingredient-list-view.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { FloatingNavButtonComponent } from "./floating-nav-button/floating-nav-button.component";

@NgModule({
  declarations: [
    FooterComponent,
    ButtonComponent,
    EditModalComponent,
    ConfirmationModalComponent,
    IngredientListViewComponent,
    FloatingNavButtonComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MaterialCommonModule,
    MatIconModule,
    RouterModule,
    MatDividerModule,
    MatListModule
  ],
  exports: [
    FooterComponent,
    ButtonComponent,
    MaterialCommonModule,
    IngredientListViewComponent,
    FloatingNavButtonComponent
  ],
  providers: [],
  entryComponents: [EditModalComponent, ConfirmationModalComponent]
})
export class SiteCommonModule {}
