import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './view/showcase/showcase.component';
import { HomeComponent } from './view/home/home.component';
import { PromotionComponent } from './view/promotion/promotion.component';
import { UtensilsComponent } from './view/utensils/utensils.component';
import { EnvironmentImagesComponent } from './view/admin/environment-images/environment-images.component';
import { FormMenuComponent } from './view/admin/form-menu/form-menu.component';
import { CustomerReporterFormComponent } from './view/admin/customer-reporter-form/customer-reporter-form.component';
import { PromotionFormComponent } from './view/admin/promotion-form/promotion-form.component';
import { MenuIconFormComponent } from './view/admin/menu-icon-form/menu-icon-form.component';
import { UtensilsFormComponent } from './view/admin/utensils-form/utensils-form.component';
import { AdminGuardService } from './mock/admin-guard.service';
import { LoginComponent } from './view/admin/login/login.component';
import { ArticlesFormComponent } from './view/admin/articles-form/articles-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'showcase/:id', component: ShowcaseComponent },
  { path: 'promotion', component: PromotionComponent },
  { path: 'utensils', component: UtensilsComponent },
  {
    path: 'places-form',
    component: EnvironmentImagesComponent,
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'menu-form',
    component: FormMenuComponent,
    canActivate: [AdminGuardService],
  },
  { path: 'customer-form', component: CustomerReporterFormComponent },
  { path: 'form-promotion', component: PromotionFormComponent },
  { path: 'form-icon-menu', component: MenuIconFormComponent },
  { path: 'form-utensils', component: UtensilsFormComponent },
  { path: 'form-articles', component: ArticlesFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
