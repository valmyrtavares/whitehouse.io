import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BtnComponent } from './components/btn/btn.component';
import { ContainerRouteIconsComponent } from './components/container-route-icons/container-route-icons.component';
import { MockUtensilsComponent } from './view/home/mock-utensils/mock-utensils.component';
import { FooterComponent } from './view/footer/footer.component';
import { ShowcaseComponent } from './view/showcase/showcase.component';
import { PromotionComponent } from './view/promotion/promotion.component';
import { UtensilsComponent } from './view/utensils/utensils.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { HamburguerBtnComponent } from './components/hamburguer-btn/hamburguer-btn.component';
import { EnvironmentImagesComponent } from './view/admin/environment-images/environment-images.component';
import { HttpClientModule } from '@angular/common/http';
import { FormMenuComponent } from './view/admin/form-menu/form-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BtnComponent,
    ContainerRouteIconsComponent,
    MockUtensilsComponent,
    FooterComponent,
    ShowcaseComponent,
    PromotionComponent,
    UtensilsComponent,
    SearchComponent,
    HamburguerBtnComponent,
    EnvironmentImagesComponent,
    FormMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
