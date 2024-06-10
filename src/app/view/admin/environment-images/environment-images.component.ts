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
import { AngularFireStorage } from '@angular/fire/compat/storage';

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
  newImages:any=undefined
  clickableButton:boolean= true;

  @ViewChild('productEdit', { static: false }) form: NgForm;

  constructor(
    private api: ApiService,
    private newApi: ApiRealtimeDatabaseService,
    private router: Router,
    private url: UsefulFunctionsService,
    private storage: AngularFireStorage
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
      console.log("environementPropertyPlaces    ",  data)
     
    });
  }

  //Method called from edit button getting the id object
  onEditClicked(id: string) {
    this.editField = false;
    this.currentId = id;
    let environmentImagesEdit = this.environmentImagesformData.find((item) => {
      return item.id === id;
    });  
    if (environmentImagesEdit) {
      this.form.setValue({
        image: environmentImagesEdit.image,
        comment: '',
        category: environmentImagesEdit.category,
      });
    }
  }
  //Method called in upload new image
  async onFileChange(event:any){  //load image and send the file to firebase storage
    const file = event.target.files[0]
    if(file){
      this.clickableButton=false;
     const path = `imagePlacesHouse/${file.name}`
     const uploadTask = await this.storage.upload(path, file)
     this.newImages = await uploadTask.ref.getDownloadURL(); //take the image's url      
    this.newImages ? this.clickableButton=true : this.clickableButton=false;
    }
  }

  onEdit(form: NgForm) {
    form.value.image =  this.newImages;
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
