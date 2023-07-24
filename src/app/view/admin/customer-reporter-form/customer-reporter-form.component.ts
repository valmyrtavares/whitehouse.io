import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import { customerReportersEdit } from 'src/app/model/models';

@Component({
  selector: 'app-customer-reporter-form',
  templateUrl: './customer-reporter-form.component.html',
  styleUrls: ['./customer-reporter-form.component.scss'],
})
export class CustomerReporterFormComponent implements OnInit {
  constructor(
    private newApi: ApiRealtimeDatabaseService,
    private cdr: ChangeDetectorRef
  ) {}
  customerReporterList: customerReportersEdit[];
  customerReporter: customerReportersEdit;
  showForm: boolean = false;

  ngOnInit() {
    this.getReporterData('customersReporters');
  }
  getReporterData(data: string) {
    this.newApi.getData(data).subscribe((data: customerReportersEdit[]) => {
      console.log(data);
      this.customerReporterList = data;
    });
  }
  editCustomer(data) {
    this.customerReporter = data;
    this.showForm = true;
  }
  parentFunction(e: boolean) {
    this.showForm = e;
    setTimeout(() => {
      this.getReporterData('customersReporters');
    }, 1000);
  }
}
