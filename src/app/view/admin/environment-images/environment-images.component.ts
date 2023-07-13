import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  environementPropertyPlaces,
  environementPropertyPlacesEdit,
  getEnvironementPropertyPlaces,
} from 'src/app/model/models';
import { ApiService } from 'src/app/mock/api.service';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';

@Component({
  selector: 'app-environment-images',
  templateUrl: './environment-images.component.html',
  styleUrls: ['./environment-images.component.scss'],
})
export class EnvironmentImagesComponent {
  //variables
  createNewEnviromentImages: boolean = true;
  environmentImagesformData: any;
  editField: boolean = true;
  currentId: string = '';

  @ViewChild('productEdit', { static: false }) form: NgForm;

  constructor(
    private api: ApiService,
    private newApi: ApiRealtimeDatabaseService
  ) {}

  ngOnInit() {
    this.fetchEnvironmentImages();
  }

  environmentImages: environementPropertyPlaces = {
    comment: '',
    category: '',
    image: '',
  };

  environmentImagesEdit: environementPropertyPlacesEdit = {
    comment: '',
    category: '',
    image: '',
  };

  deleteImage(id: string) {
    this.newApi
      .deleteImage('environementPropertyPlaces', id)
      .subscribe((res) => {
        console.log(res);
        this.fetchEnvironmentImages();
      });
  }

  fetchEnvironmentImages() {
    this.newApi.getData('environementPropertyPlaces').subscribe((data) => {
      this.environmentImagesformData = data;
      console.log(this.environmentImagesformData);
    });
  }

  onEditClicked(id: string) {
    this.editField = false;
    this.currentId = id;
    let environmentImagesEdit = this.environmentImagesformData.find((item) => {
      return item.id === id;
    });
    console.log(environmentImagesEdit);
    if (environmentImagesEdit) {
      this.form.setValue({
        image: environmentImagesEdit.image,
        comment: '',
        category: environmentImagesEdit.category,
      });
    }
  }
  onEdit(form: NgForm) {
    this.editField = true;
    this.newApi.updateImage('environementPropertyPlaces', this.currentId, form);
  }
}
