import { Component  } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage'; 

@Component({
  selector: 'taba-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private storage: AngularFireStorage){}

  imagem: any ="https://firebasestorage.googleapis.com/v0/b/projeto-primeiro-de92d.appspot.com/o/header%2F4X3A8577.JPG?alt=media&token=5775ad7d-f47e-4bfe-909c-a53c7e915520"    
    async onFileChange(event: any){
      const file = event.target.files[0]     
      if(file){
       const path = `header/${file.name}`;
       const uploadTask = await this.storage.upload(path, file)
       const url = await uploadTask.ref.getDownloadURL();
       console.log(url)
       this.imagem = url 

      }
    }
  }