import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environementPropertyPlaces } from 'src/app/model/models';
import { ApiService } from 'src/app/mock/api.service';

@Component({
  selector: 'app-environment-images',
  templateUrl: './environment-images.component.html',
  styleUrls: ['./environment-images.component.scss'],
})
export class EnvironmentImagesComponent {
  constructor(private api: ApiService) {}

  environmentImages: environementPropertyPlaces = {
    comment: '',
    category: '',
    image: '',
  };

  onSubmit(form: NgForm) {
    this.api.createCollection(this.environmentImages);
  }
}
