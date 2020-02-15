import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
@NgModule({
    declarations: [
      FooterComponent,
      ButtonComponent
    ],
    imports: [
      BrowserModule
    ],
    exports: [
        FooterComponent,
        ButtonComponent
    ],
    providers: []
  })
  export class SiteCommonModule { }
  