import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from 'src/app/components/component.module';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {environment} from '../../../environments/environemnt'

//Components
import { FormMenuComponent } from './form-menu/form-menu.component';
import { MenuIconFormComponent } from './menu-icon-form/menu-icon-form.component';
import { FormsModule } from '@angular/forms';
import {FrontImageFormComponent} from './front-image-form/front-image-form.component'

import { CustomerModule } from './customer-reporter-form/customer.module';

import { UtensilsModule } from './utensils-form/utensils.module';
import { PromotionModule } from './promotion-form/promotion.module';
import { LoginComponent } from './login/login.component';
import { ArticlesFormComponent } from './articles-form/articles-form.component';
import { CreateArticlesFormComponent } from './articles-form/create-articles-form/create-articles-form.component';

@NgModule({
  declarations: [FormMenuComponent, MenuIconFormComponent, LoginComponent, ArticlesFormComponent, CreateArticlesFormComponent, FrontImageFormComponent],
  imports: [
    CommonModule,
    ComponentModule,    
    FormsModule,
    CustomerModule,
    UtensilsModule,
    PromotionModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
})
export class AdminModule {}
