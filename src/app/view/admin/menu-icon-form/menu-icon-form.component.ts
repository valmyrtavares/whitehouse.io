import { Component, OnInit, ViewChild, createComponent } from '@angular/core';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import { environmentPropetyModelEdit } from 'src/app/model/models';
import { NgForm } from '@angular/forms';
import { UsefulFunctionsService } from 'src/app/mock/useful-functions.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-menu-icon-form',
  templateUrl: './menu-icon-form.component.html',
  styleUrls: ['./menu-icon-form.component.scss'],
})
export class MenuIconFormComponent implements OnInit {
  apiEnvironmentProperty: environmentPropetyModelEdit[];
  currentId: string;
  editField: boolean = false;
  newImages: any;

  @ViewChild('productEdit', { static: false }) form: NgForm;

  constructor(
    private newApi: ApiRealtimeDatabaseService,
    private imageChange: UsefulFunctionsService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.fetchEnvironmentPromotions('environementProperty');
  }

  async onFileChange(event:any){  //load image and send the file to firebase storage
    const file = event.target.files[0]
    if(file){
     const path = `imagePlacesHouse/${file.name}`
     const uploadTask = await this.storage.upload(path, file)
     this.newImages = await uploadTask.ref.getDownloadURL(); //take the image's url
      
    }
  }

  fetchEnvironmentPromotions(data) {
    this.newApi
      .getData(data)
      .subscribe((data: environmentPropetyModelEdit[]) => {
        this.apiEnvironmentProperty = data;     
      });
  }

  onEditClicked(id: string) {
    debugger
    this.currentId = id;
    this.editField = true;
    let PromotionObj = this.apiEnvironmentProperty.find((item) => {
      return item.id === id;
    });  
    if (PromotionObj) {
      this.form.setValue({
        comment: PromotionObj.comment,
        route: PromotionObj.route,
        label: PromotionObj.label,
        image: PromotionObj.image,
      });
    }
  }

  onEdit(form: NgForm) {    
    if(this.newImages ){
      form.value.image = this.newImages
      }  
    this.editField = false;   
    form.value
   
    this.newApi.updateImage('environementProperty', this.currentId, form.value);
    setTimeout(() => {
      this.fetchEnvironmentPromotions('environementProperty');
    }, 1000);
  }
  showModel() {
    this.editField = false;
    this.newImages=""
  }
}
