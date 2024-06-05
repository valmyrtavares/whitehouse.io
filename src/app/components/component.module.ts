import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './btn/btn.component';
import { AppRoutingModule } from '../app-routing.module';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HamburguerBtnComponent } from './hamburguer-btn/hamburguer-btn.component';
import { ContainerRouteIconsComponent } from './container-route-icons/container-route-icons.component';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {environment} from '../../environments/environemnt'

@NgModule({
  declarations: [
    BtnComponent,
    SearchComponent,
    HeaderComponent,
    HamburguerBtnComponent,
    ContainerRouteIconsComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  exports: [
    BtnComponent,
    SearchComponent,
    HeaderComponent,
    HamburguerBtnComponent,
    ContainerRouteIconsComponent,
  ],
})
export class ComponentModule {}
