import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import { customerReportersEdit } from 'src/app/model/models';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'taba-create-customer-reporter-form',
  templateUrl: './create-customer-reporter-form.component.html',
  styleUrls: ['./create-customer-reporter-form.component.scss'],
})
export class CreateCustomerReporterFormComponent implements OnInit {
  @Input() customerReporter: customerReportersEdit;
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();
  newImages:any

  CustomerReportersEditable: customerReportersEdit;
  constructor(
    private newApi: ApiRealtimeDatabaseService,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    // CustomerReportersEditable: {
    //   id: '',
    //   label: '',
    //   image?: this.customerReporter.image,
    //   route: '',
    //   category: '',
    //   comment: '',
    // };
    console.log(this.customerReporter);
  }
  onSubmit(form: NgForm) {
    this.parentFunction.emit(false);
    debugger
    if(this.newImages ){
      form.value.image = this.newImages
    }  
    this.newApi.updateImage('customersReporters', form.value.id, form.value);
    this.router.navigate([`/showcase/${form.value.category}`]);
  }
  closeForm() {
    this.parentFunction.emit(false);
  }
  async onFileChange(event:any){
    const file = event.target.files[0]
    if(file){
     const path = `imageCustomerReporter/${file.name}`
     const uploadTask = await this.storage.upload(path, file)
     this.newImages = await uploadTask.ref.getDownloadURL(); 
    }
  }
}
