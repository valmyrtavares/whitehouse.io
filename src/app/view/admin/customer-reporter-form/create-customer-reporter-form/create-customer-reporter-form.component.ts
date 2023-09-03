import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import { customerReportersEdit } from 'src/app/model/models';
import { Router } from '@angular/router';

@Component({
  selector: 'taba-create-customer-reporter-form',
  templateUrl: './create-customer-reporter-form.component.html',
  styleUrls: ['./create-customer-reporter-form.component.scss'],
})
export class CreateCustomerReporterFormComponent implements OnInit {
  @Input() customerReporter: customerReportersEdit;
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();

  CustomerReportersEditable: customerReportersEdit;
  constructor(
    private newApi: ApiRealtimeDatabaseService,
    private router: Router
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
    this.newApi.updateImage('customersReporters', form.value.id, form.value);
    this.router.navigate([`/showcase/${form.value.category}`]);
  }
  closeForm() {
    this.parentFunction.emit(false);
  }
}
