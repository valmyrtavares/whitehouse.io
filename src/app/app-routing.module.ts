import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './view/showcase/showcase.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'showcase/:id', component: ShowcaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
