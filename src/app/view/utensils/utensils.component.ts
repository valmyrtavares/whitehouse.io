import { Component } from '@angular/core';
import { MockService } from 'src/app/mock/mock.service';
import { utensil } from 'src/app/model/models';

interface Category {
  category: string;
  categoryLabel: string;
}

@Component({
  selector: 'app-utensils',
  templateUrl: './utensils.component.html',
  styleUrls: ['./utensils.component.scss'],
})
export class UtensilsComponent {
  utensilsItems: utensil[];
  categories: Category[];

  constructor(private data: MockService) {}

  ngOnInit(): void {
    this.utensilsItems = this.data.utensils;
    this.categories = [
      { category: 'barbecueArea', categoryLabel: 'Barbecue Area' },
      { category: 'cleaning', categoryLabel: 'Cleaning' },
      { category: 'restroom', categoryLabel: 'Restroom' },
      { category: 'kitchen', categoryLabel: 'Cozinha' },
      { category: 'swimmingPool', categoryLabel: 'Swimming Pool' },
    ];
  }

  hasItems(category: Category): boolean {
    return this.getCategoryItems(category).length > 0;
  }

  getCategoryItems(category: Category): utensil[] {
    return this.utensilsItems.filter(
      (item) => item.category === category.category
    );
  }

  isFirstCategoryItem(category: Category): boolean {
    return (
      this.utensilsItems.find((item) => item.category === category.category) ===
      this.getCategoryItems(category)[0]
    );
  }
}
