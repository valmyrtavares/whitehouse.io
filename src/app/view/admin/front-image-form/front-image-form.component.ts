import { Component, createComponent } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { HttpClient } from '@angular/common/http';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
type frontImage = {
  image:string
}

@Component({
  selector: 'app-front-image-form',
  standalone: false,  
  templateUrl: './front-image-form.component.html',
  styleUrl: './front-image-form.component.scss'
})
export class FrontImageFormComponent {

  constructor(private storage: AngularFireStorage,private http: HttpClient, private newApi: ApiRealtimeDatabaseService,){}
 
newImage: any; 


ngOnInit() {
 this.fetchFrontImage()
}
  async onFileChange(event:any){
    const file = event.target.files[0]
    if(file){
     const path = `frontImageHome/${file.name}`
     const uploadTask = await this.storage.upload(path, file)
     this.newImage = await uploadTask.ref.getDownloadURL();
     this.updateFrontImage({image:this.newImage})
    }
  }

  fetchFrontImage(){
    this.newApi.getData('frontImageHome').subscribe((data) => {         
        this.newImage = data[0].image;       
    });
  }
  

  updateFrontImage(data:frontImage) {
    this.http
      .put(
        `https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/frontImageHome/fasldkfjf1k2j.json`,
        data
      )
      .subscribe((res) => {
       
      });
  }



}
