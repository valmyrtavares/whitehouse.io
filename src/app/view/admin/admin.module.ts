import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from 'src/app/components/component.module';

//Components
import { FormMenuComponent } from './form-menu/form-menu.component';
import { MenuIconFormComponent } from './menu-icon-form/menu-icon-form.component';
import { FormsModule } from '@angular/forms';

import { CustomerModule } from './customer-reporter-form/customer.module';

import { UtensilsModule } from './utensils-form/utensils.module';
import { PromotionModule } from './promotion-form/promotion.module';

@NgModule({
  declarations: [FormMenuComponent, MenuIconFormComponent],
  imports: [
    CommonModule,
    ComponentModule,
    FormsModule,
    CustomerModule,
    UtensilsModule,
    PromotionModule,
  ],
})
export class AdminModule {}
