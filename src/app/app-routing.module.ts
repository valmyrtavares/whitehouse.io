import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './view/showcase/showcase.component';
import { HomeComponent } from './view/home/home.component';
import { PromotionComponent } from './view/promotion/promotion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'showcase/:id', component: ShowcaseComponent },
  { path: 'promotion', component: PromotionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
