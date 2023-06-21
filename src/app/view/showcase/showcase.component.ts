import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockService } from '../../mock/mock.service';
import { environementPropertyPlaces } from 'src/app/model/models';

@Component({
  selector: 'taba-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent {
  id: string;
  imagesData: environementPropertyPlaces[];
  imagesDataFiltered: environementPropertyPlaces[];
  constructor(private route: ActivatedRoute, private data: MockService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.imagesData = this.data.environementPropertyPlaces;
    this.filterData(this.imagesData);
  }

  filterData(data) {
    this.imagesDataFiltered = data.filter((item) => item.category === this.id);
  }
}
