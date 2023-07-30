import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from 'src/app/components/component.module';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { PromotionComponent } from './promotion/promotion.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { UtensilsComponent } from './utensils/utensils.component';
import { HomeComponent } from './home/home.component';
import { MockUtensilsComponent } from './home/mock-utensils/mock-utensils.component';
import { AppRoutingModule } from '../app-routing.module';

//Components

@NgModule({
  declarations: [
    FooterComponent,
    PromotionComponent,
    ShowcaseComponent,
    UtensilsComponent,
    HomeComponent,
    MockUtensilsComponent,
  ],
  imports: [CommonModule, FormsModule, AppRoutingModule, ComponentModule],
  exports: [FooterComponent],
})
export class ViewModule {}
