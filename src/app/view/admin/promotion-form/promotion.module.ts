import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from 'src/app/components/component.module';
import { FormsModule } from '@angular/forms';
import { PromotionFormComponent } from './promotion-form.component';
import { CreationPromotionComponent } from './creation-promotion/creation-promotion.component';

//Components

@NgModule({
  declarations: [PromotionFormComponent, CreationPromotionComponent],
  imports: [CommonModule, FormsModule],
})
export class PromotionModule {}
