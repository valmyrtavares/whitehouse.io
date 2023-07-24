import { Component } from '@angular/core';
import { MockService } from 'src/app/mock/mock.service';
import { utensil } from 'src/app/model/models';

interface Category {
  category: string;
  categoryLabel: string;
  displayItems: boolean;
}

@Component({
  selector: 'app-utensils',
  templateUrl: './utensils.component.html',
  styleUrls: ['./utensils.component.scss'],
})
export class UtensilsComponent {
  utensilsItems: utensil[];
  categories: Category[];
  searchText: string = '';

  constructor(private data: MockService) {}

  ngOnInit(): void {
    this.utensilsItems = this.data.utensils;
    this.categories = [
      {
        category: 'barbecueArea',
        categoryLabel: 'Barbecue Area',
        displayItems: true,
      },
      { category: 'cleaning', categoryLabel: 'Cleaning', displayItems: false },
      { category: 'restroom', categoryLabel: 'Restroom', displayItems: false },
      { category: 'kitchen', categoryLabel: 'Cozinha', displayItems: false },
      {
        category: 'swimmingPool',
        categoryLabel: 'Swimming Pool',
        displayItems: false,
      },
    ];
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
