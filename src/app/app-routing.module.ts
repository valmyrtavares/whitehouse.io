import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './view/showcase/showcase.component';
import { HomeComponent } from './view/home/home.component';
import { PromotionComponent } from './view/promotion/promotion.component';
import { UtensilsComponent } from './view/utensils/utensils.component';
import { EnvironmentImagesComponent } from './view/admin/environment-images/environment-images.component';
import { FormMenuComponent } from './view/admin/form-menu/form-menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'showcase/:id', component: ShowcaseComponent },
  { path: 'promotion', component: PromotionComponent },
  { path: 'utensils', component: UtensilsComponent },
  {
    path: 'places-form',
    component: EnvironmentImagesComponent,
  },
  { path: 'menu-form', component: FormMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
