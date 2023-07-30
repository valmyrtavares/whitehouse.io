import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from 'src/app/components/component.module';
import { FormsModule } from '@angular/forms';
import { CreateImagesEnvironmentComponent } from './create-images-environment/create-images-environment.component';
import { EnvironmentImagesComponent } from './environment-images.component';

//Components

@NgModule({
  declarations: [CreateImagesEnvironmentComponent, EnvironmentImagesComponent],
  imports: [CommonModule, FormsModule],
})
export class EnvironmentImagesModule {}
