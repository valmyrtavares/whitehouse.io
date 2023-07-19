import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import { customerReportersEdit } from 'src/app/model/models';

@Component({
  selector: 'taba-create-customer-reporter-form',
  templateUrl: './create-customer-reporter-form.component.html',
  styleUrls: ['./create-customer-reporter-form.component.scss'],
})
export class CreateCustomerReporterFormComponent implements OnInit {
  @Input() customerReporter: customerReportersEdit;
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();

  CustomerReportersEditable: customerReportersEdit;
  constructor(private newApi: ApiRealtimeDatabaseService) {}

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
    this.newApi.updateImage('customersReporters', form.value.id, form.value);
  }
}
