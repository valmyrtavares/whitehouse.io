import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockService } from '../../mock/mock.service';
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
  imagesData: environementPropertyPlaces[] | customerReporters[];
  imagesDataFiltered: environementPropertyPlaces[] | customerReporters[];
  constructor(private route: ActivatedRoute, private data: MockService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    if (
      this.id === 'firstCustomer' ||
      this.id === 'secondCustomer' ||
      this.id === 'thirdCustomer'
    ) {
      this.imagesData = this.data.customersReporters;
      this.filterData(this.imagesData);
    } else {
      this.imagesData = this.data.environementPropertyPlaces;
      this.filterData(this.imagesData);
    }
  }

  filterData(data) {
    this.imagesDataFiltered = data.filter((item) => item.category === this.id);
  }
}
