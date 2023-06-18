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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BtnComponent,
    ContainerRouteIconsComponent,
    MockUtensilsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
