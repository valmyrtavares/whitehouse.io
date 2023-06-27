import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'taba-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onsearchTextChange() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
