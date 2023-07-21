import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import { environmentPropetyModelEdit } from 'src/app/model/models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-menu-icon-form',
  templateUrl: './menu-icon-form.component.html',
  styleUrls: ['./menu-icon-form.component.scss'],
})
export class MenuIconFormComponent implements OnInit {
  apiEnvironmentProperty: environmentPropetyModelEdit[];
  currentId: string;
  editField: boolean = false;

  @ViewChild('productEdit', { static: false }) form: NgForm;

  constructor(private newApi: ApiRealtimeDatabaseService) {}

  ngOnInit() {
    this.fetchEnvironmentPromotions('environementProperty');
  }

  fetchEnvironmentPromotions(data) {
    this.newApi
      .getData(data)
      .subscribe((data: environmentPropetyModelEdit[]) => {
        this.apiEnvironmentProperty = data;
      });
  }

  onEditClicked(id: string) {
    this.currentId = id;
    this.editField = true;
    let PromotionObj = this.apiEnvironmentProperty.find((item) => {
      return item.id === id;
    });
    console.log(PromotionObj);
    if (PromotionObj) {
      this.form.setValue({
        comment: PromotionObj.comment,
        route: PromotionObj.route,
        label: PromotionObj.label,
        image: PromotionObj.image,
      });
    }
  }

  onEdit(form: NgForm) {
    this.editField = false;
    console.log(form);
    this.newApi.updateImage('environementProperty', this.currentId, form);
    setTimeout(() => {
      this.fetchEnvironmentPromotions('environementProperty');
    }, 1000);
  }
  showModel() {
    this.editField = false;
  }
}
