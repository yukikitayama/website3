import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PageComponent } from './page/page.component';
import { CardComponent } from './card/card.component';
import { FeaturedCardComponent } from './featured-card/featured-card.component';
import { PagesComponent } from './pages/pages.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageItemComponent } from './page-item/page-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PageComponent,
    CardComponent,
    FeaturedCardComponent,
    PagesComponent,
    PageListComponent,
    PageItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
