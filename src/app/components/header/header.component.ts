import { Component  } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage'; 
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';

@Component({
  selector: 'taba-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private storage: AngularFireStorage,private newApi: ApiRealtimeDatabaseService,){}

  newImage: any;  
  
  ngOnInit(){
    this.fetchFrontImage()
  }
   

    fetchFrontImage(){
      this.newApi.getData('frontImageHome').subscribe((data) => {         
          this.newImage = data[0].image;       
      });
    }
  }