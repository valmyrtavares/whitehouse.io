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

  async onFileChange(event:any){
    const file = event.target.files[0]
    if(file){
     const path = `imagePlacesHouse/${file.name}`
     const uploadTask = await this.storage.upload(path, file)
     this.newImages = await uploadTask.ref.getDownloadURL();
      
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
    this.currentId = id;
    this.editField = true;
    let PromotionObj = this.apiEnvironmentProperty.find((item) => {
      return item.id === id;
    });
    console.log(PromotionObj);
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
    form.value.image = this.newImages    
    this.editField = false;   
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
