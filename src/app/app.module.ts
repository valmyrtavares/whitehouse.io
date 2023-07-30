import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './view/home/home.component';
// import { MockUtensilsComponent } from './view/home/mock-utensils/mock-utensils.component';
//import { FooterComponent } from './view/footer/footer.component';
//import { ShowcaseComponent } from './view/showcase/showcase.component';
//import { PromotionComponent } from './view/promotion/promotion.component';
//import { UtensilsComponent } from './view/utensils/utensils.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './view/admin/admin.module';
import { ComponentModule } from './components/component.module';
import { EnvironmentImagesModule } from './view/admin/environment-images/environment-images.module';
import { ViewModule } from './view/view.module';

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    //MockUtensilsComponent,
    // FooterComponent,
    //ShowcaseComponent,
    //PromotionComponent,
    //UtensilsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    ComponentModule,
    EnvironmentImagesModule,
    ViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
