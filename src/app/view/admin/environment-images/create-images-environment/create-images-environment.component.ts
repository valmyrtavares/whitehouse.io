import { Component, EventEmitter, Output } from '@angular/core';
import { environementPropertyPlaces } from 'src/app/model/models';
import { NgForm } from '@angular/forms';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import { UsefulFunctionsService } from 'src/app/mock/useful-functions.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'taba-create-images-environment',
  templateUrl: './create-images-environment.component.html',
  styleUrls: ['./create-images-environment.component.scss'],
})
export class CreateImagesEnvironmentComponent {
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();
  constructor(
    private newApi: ApiRealtimeDatabaseService,
    private url: UsefulFunctionsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {}
  newImages:any;
  clickableButton:boolean= true;
  

  stayOnThePage: boolean = false;
  environmentImages: environementPropertyPlaces = {
    comment: '',
    category: '',
    image: '',
  };

  
  closeFormCreate() {
    this.parentFunction.emit();
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

  onSubmit(form: NgForm) {
    
    form.value.image = this.newImages
    this.newApi.createCollection('environementPropertyPlaces', form.value);
    this.newApi.getData('environementPropertyPlaces').subscribe((data) => {
      if (!this.stayOnThePage) {
        this.router.navigate([`/showcase/${form.value.category}`]);
      }
      this.parentFunction.emit();
      form.reset();
      this.newImages=""
    });
  }
}
