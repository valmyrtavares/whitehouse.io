import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from 'src/app/components/component.module';
import { FormsModule } from '@angular/forms';
import { UtensilsFormComponent } from './utensils-form.component';
import { CategoryUtensilsFormComponent } from './category-utensils-form/category-utensils-form.component';
import { AddEditComponent } from './add-edit/add-edit.component';

//Components

@NgModule({
  declarations: [
    UtensilsFormComponent,
    CategoryUtensilsFormComponent,
    AddEditComponent,
  ],
  imports: [CommonModule, FormsModule, ComponentModule],
})
export class UtensilsModule {}
