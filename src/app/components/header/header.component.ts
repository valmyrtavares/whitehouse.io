import { Component  } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage'; 

@Component({
  selector: 'taba-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private storage: AngularFireStorage){}

  imagem: any;
    
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