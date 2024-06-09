import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import { UsefulFunctionsService } from 'src/app/mock/useful-functions.service';
import { utensilsCategory, utensilsCateroryEdit } from 'src/app/model/models';

@Component({
  selector: 'taba-category-utensils-form',
  templateUrl: './category-utensils-form.component.html',
  styleUrls: ['./category-utensils-form.component.scss'],
})
export class CategoryUtensilsFormComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();

  displayItems: boolean = false;
  utensilsCategoryList: utensilsCateroryEdit[];
  currentId: string;
  displayEditForm: boolean = false;

  constructor(
    private newApi: ApiRealtimeDatabaseService,
    private useful: UsefulFunctionsService
  ) {}

  ngOnInit(): void {
    this.fetchCategoryList('utensilCategories');
  }

  fetchCategoryList(data: string) {
    this.newApi.getData(data).subscribe((res: []) => {
      this.utensilsCategoryList = res;     
    });
  }

  deleteCategory(id: string) {
    this.newApi.deleteImage('utensilCategories', id).subscribe((res) => {
      this.fetchCategoryList('utensilCategories');
    });
  }
  currentCategory: utensilsCateroryEdit;

  editCategory(id: string) {
    this.displayEditForm = true;
    this.currentId = id;
    this.currentCategory = this.utensilsCategoryList.find((item) => {
      return item.id === id;
    });
  }

  onEdit(form: NgForm) {
    form.value.category = this.useful.transformCategoryName(form.value.label);
    this.newApi.updateImage('utensilCategories', this.currentId, form.value);
    setTimeout(() => {
      this.fetchCategoryList('utensilCategories');
    }, 1000);

    form.reset();
    this.displayEditForm = false;
  }
  closeForm() {
    this.closeModal.emit(true);
  }

  onSubmit(form: NgForm) {
    form.value.category = this.useful.transformCategoryName(form.value.label);
    this.newApi.createCollection('utensilCategories', form.value);
    setTimeout(() => {
      this.fetchCategoryList('utensilCategories');
    }, 1000);
    form.reset();
    this.currentCategory = null;
  }
}
