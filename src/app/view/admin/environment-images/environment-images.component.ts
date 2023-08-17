import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  environementPropertyPlaces,
  environementPropertyPlacesEdit,
  getEnvironementPropertyPlaces,
} from 'src/app/model/models';
import { ApiService } from 'src/app/mock/api.service';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import { Router } from '@angular/router';
import { UsefulFunctionsService } from 'src/app/mock/useful-functions.service';

@Component({
  selector: 'app-environment-images',
  templateUrl: './environment-images.component.html',
  styleUrls: ['./environment-images.component.scss'],
})
export class EnvironmentImagesComponent {
  //variables
  createNewEnviromentImages: boolean = false;
  environmentImagesformData: any;
  editField: boolean = true;
  currentId: string = '';
  stayOnThePage: boolean = false;

  @ViewChild('productEdit', { static: false }) form: NgForm;

  constructor(
    private api: ApiService,
    private newApi: ApiRealtimeDatabaseService,
    private router: Router,
    private url: UsefulFunctionsService
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
    form.value.image = this.url.transformUrl(form.value.image);
    this.editField = true;
    this.newApi.updateImage(
      'environementPropertyPlaces',
      this.currentId,
      form.value
    );
    this.newApi.getData('environementPropertyPlaces').subscribe((data) => {
      if (!this.stayOnThePage) {
        this.router.navigate([`/showcase/${form.value.category}`]);
      }

      form.reset();
    });

    setTimeout(() => {
      this.fetchEnvironmentImages();
    }, 1000);
  }
  closeFormEdit() {
    this.editField = true;
  }
  parentFunction() {
    this.createNewEnviromentImages = false;
    setTimeout(() => {
      this.fetchEnvironmentImages();
    }, 1000);
  }
  openCreateForm() {
    this.createNewEnviromentImages = true;
  }
}
