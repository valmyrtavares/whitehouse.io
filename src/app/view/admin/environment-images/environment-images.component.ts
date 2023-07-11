import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environementPropertyPlaces } from 'src/app/model/models';
import { ApiService } from 'src/app/mock/api.service';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';

@Component({
  selector: 'app-environment-images',
  templateUrl: './environment-images.component.html',
  styleUrls: ['./environment-images.component.scss'],
})
export class EnvironmentImagesComponent {
  constructor(
    private api: ApiService,
    private newApi: ApiRealtimeDatabaseService
  ) {}

  environmentImages: environementPropertyPlaces = {
    comment: '',
    category: '',
    image: '',
  };

  onSubmit(form: NgForm) {
    this.newApi.createCollection('environementPropertyPlaces', form.value);
    console.log(form.value);
  }
}
