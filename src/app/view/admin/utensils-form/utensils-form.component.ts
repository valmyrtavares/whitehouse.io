import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ApiRealtimeDatabaseService } from '../../../mock/api-realtime-database.service';

@Component({
  selector: 'app-untensils-form',
  templateUrl: './utensils-form.component.html',
  styleUrls: ['./untensils-form.component.scss'],
})
export class UtensilsFormComponent {
  createCategory: boolean = true;

  @ViewChild('nodisplay') nodisplay: TemplateRef<boolean>;

  constructor() {}
}
