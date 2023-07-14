import { Component } from '@angular/core';
import { environementPropertyPlaces } from 'src/app/model/models';
import { NgForm } from '@angular/forms';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import { UsefulFunctionsService } from 'src/app/mock/useful-functions.service';

@Component({
  selector: 'taba-create-images-environment',
  templateUrl: './create-images-environment.component.html',
  styleUrls: ['./create-images-environment.component.scss'],
})
export class CreateImagesEnvironmentComponent {
  constructor(
    private newApi: ApiRealtimeDatabaseService,
    private url: UsefulFunctionsService
  ) {}
  environmentImages: environementPropertyPlaces = {
    comment: '',
    category: '',
    image: '',
  };

  onSubmit(form: NgForm) {
    form.value.image = this.url.transformUrl(form.value.image);
    this.newApi.createCollection('environementPropertyPlaces', form.value);
    console.log(form.value);
  }
}
//            https://www.cp4.com.br/wp-content/uploads/2019/02/Paris.jpg
