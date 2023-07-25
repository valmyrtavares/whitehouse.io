import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { utensilsCategory, utensilEdit } from 'src/app/model/models';
import { ApiRealtimeDatabaseService } from '../../../../mock/api-realtime-database.service';

@Component({
  selector: 'taba-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent {
  @Input() utensilsCategoryList: utensilsCategory[];
  @Input() title: string;
  @Input() typeOfData: string;
  @Input() utensilEditObj: utensilEdit;
  @Output() parentFunction = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  currentId: string;

  constructor(private newApi: ApiRealtimeDatabaseService) {}

  selectData(form: NgForm) {
    this.parentFunction.emit([form, this.typeOfData]);
  }

  closeForm() {
    this.closeModal.emit(this.typeOfData);
  }
}
