import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { ButtonComponent } from "./button/button.component";
import { MaterialCommonModule } from "../material-common/material-common.module";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { EditModalComponent } from "./edit-modal/edit-modal.component";
import { ConfirmationModalComponent } from "./confirmation-modal/confirmation-modal.component";
import { RouterModule } from '@angular/router';
import { IngredientListViewComponent } from './ingredient-list-view/ingredient-list-view.component';
@NgModule({
  declarations: [
    FooterComponent,
    ButtonComponent,
    EditModalComponent,
    ConfirmationModalComponent,
    IngredientListViewComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MaterialCommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [FooterComponent, ButtonComponent, MaterialCommonModule, IngredientListViewComponent],
  providers: [],
  entryComponents: [EditModalComponent, ConfirmationModalComponent]
})
export class SiteCommonModule {}
