import { Component } from '@angular/core';
import { ApiRealtimeDatabaseService } from 'src/app/mock/api-realtime-database.service';
import { MockService } from 'src/app/mock/mock.service';
import { utensil } from 'src/app/model/models';

interface Category {
  category: string;
  label: string;
  displayItems: boolean;
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

  constructor(
    private data: MockService,
    private newApi: ApiRealtimeDatabaseService
  ) {}

  ngOnInit(): void {
    this.utensilsItems = this.data.utensils;
    this.fetchCategoryList('utensilCategories');
    this.fetchCategoryList('utensils');
  }

  fetchCategoryList(data: string) {
    this.newApi.getData(data).subscribe((res: []) => {
      if (data === 'utensils') {
        this.utensilsItems = res;
        console.log(this.utensilsItems);
      }
      if (data === 'utensilCategories') {
        this.utensilsCategoryList = res;
        console.log(this.utensilsCategoryList);
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
}
