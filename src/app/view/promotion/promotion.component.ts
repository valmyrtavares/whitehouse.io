import { Component } from '@angular/core';
import { MockService } from '../../mock/mock.service';
import { promotions } from 'src/app/model/models';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent {
  dataPromotion: promotions[] = this.data.promotions;

  constructor(private data: MockService) {}
}
