import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'taba-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnChanges {
  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  @Input() highlightImage: string;

  ngOnChanges(): void {
    this.enteredSearchValue = '';
    this.onsearchTextChange();
  }

  onsearchTextChange() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
