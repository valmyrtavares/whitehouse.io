import { Component } from '@angular/core';
import { environementPropertyPlaces } from 'src/app/model/models';
import { NgForm } from '@angular/forms';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';

@Component({
  selector: 'taba-create-images-environment',
  templateUrl: './create-images-environment.component.html',
  styleUrls: ['./create-images-environment.component.scss'],
})
export class CreateImagesEnvironmentComponent {
  constructor(private newApi: ApiRealtimeDatabaseService) {}
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
