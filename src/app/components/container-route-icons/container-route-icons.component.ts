import { Component, Input } from '@angular/core';
import { environmentPropetyModel } from 'src/app/model/models';
import { MockService } from '../../mock/mock.service';

@Component({
  selector: 'taba-container-route-icons',
  templateUrl: './container-route-icons.component.html',
  styleUrls: ['./container-route-icons.component.scss'],
})
export class ContainerRouteIconsComponent   {
  @Input() currentData: environmentPropetyModel[];
  @Input() title: string;
  constructor(private data: MockService) {}
 
}
