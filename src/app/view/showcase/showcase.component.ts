import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockService } from '../../mock/mock.service';
import { ApiService } from '../../mock/api.service';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import {
  environementPropertyPlaces,
  customerReporters,
} from 'src/app/model/models';

@Component({
  selector: 'taba-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent {
  id: string;
  imagesData: any; //environementPropertyPlaces[] | customerReporters[];
  imagesDataFiltered: environementPropertyPlaces[] | customerReporters[];
  constructor(
    private route: ActivatedRoute,
    private data: MockService,
    private api: ApiService,
    private newApi: ApiRealtimeDatabaseService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    if (
      this.id === 'firstCustomer' ||
      this.id === 'secondCustomer' ||
      this.id === 'thirdCustomer'
    ) {
      this.api.getData('customersReporters').subscribe((data) => {
        this.imagesData = data;
        this.filterData(this.imagesData);
      });
      this.filterData(this.imagesData);
    } else {
      // this.imagesData = this.data.environementPropertyPlaces;
      this.newApi.getData('environementPropertyPlaces').subscribe((data) => {
        this.imagesData = data;
        console.log(data);

        this.filterData(this.imagesData);
      });
    }
  }

  filterData(data) {
    this.imagesDataFiltered = data.filter((item) => item.category === this.id);
  }
}
