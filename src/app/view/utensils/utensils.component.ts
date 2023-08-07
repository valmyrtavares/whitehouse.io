import { Component } from '@angular/core';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import { MockService } from 'src/app/mock/mock.service';
import { utensil } from 'src/app/model/models';

interface Category {
  category: string;
  label: string;
  displayItems: boolean;
  id: string;
}

@Component({
  selector: 'app-utensils',
  templateUrl: './utensils.component.html',
  styleUrls: ['./utensils.component.scss'],
})
export class UtensilsComponent {
  utensilsItems: utensil[];
  utensilsCategoryList: Category[];
  searchText: string = '';
  highlightImage: string;

  constructor(
    private data: MockService,
    private newApi: ApiRealtimeDatabaseService
  ) {}

  ngOnInit(): void {
    this.utensilsItems = this.data.utensils;
    this.fetchCategoryList('utensilCategories');
    this.fetchCategoryList('utensils');
    this.highlightImage = '';
  }

  fetchCategoryList(data: string) {
    this.newApi.getData(data).subscribe((res: []) => {
      if (data === 'utensils') {
        this.utensilsItems = res;
      }
      if (data === 'utensilCategories') {
        this.utensilsCategoryList = res;
      }
    });
  }

  hasItems(category: Category): boolean {
    let x = this.getCategoryItems(category).length > 0;
    return x;
  }

  getCategoryItems(category: Category): utensil[] {
    return this.utensilsItems.filter(
      (item) => item.category === category.category
    );
  }

  isFirstCategoryItem(): boolean {
    return true;
  }
  toggleItems(category) {
    console.log(category);
  }
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }
  toggleDisplayItens(data: Category) {
    this.utensilsCategoryList.forEach((item) => {
      if (item.id === data.id) {
        item.displayItems = !data.displayItems;
      }
    });
    console.log(this.utensilsCategoryList);
  }
  showItem(data: string) {
    this.highlightImage = data;
  }
}
