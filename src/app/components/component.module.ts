import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './btn/btn.component';
import { AppRoutingModule } from '../app-routing.module';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HamburguerBtnComponent } from './hamburguer-btn/hamburguer-btn.component';
import { ContainerRouteIconsComponent } from './container-route-icons/container-route-icons.component';

@NgModule({
  declarations: [
    BtnComponent,
    SearchComponent,
    HeaderComponent,
    HamburguerBtnComponent,
    ContainerRouteIconsComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [
    BtnComponent,
    SearchComponent,
    HeaderComponent,
    HamburguerBtnComponent,
    ContainerRouteIconsComponent,
  ],
})
export class ComponentModule {}
