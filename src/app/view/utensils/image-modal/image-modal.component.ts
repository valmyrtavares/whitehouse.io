import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent implements OnChanges {
  @Input() highlightImage: string;
  @Output() closeImageUtensilsForm = new EventEmitter();

  ngOnChanges(): void {
    console.log(this.highlightImage);
  }

  closeFormEdit() {
    this.highlightImage = '';
    this.closeImageUtensilsForm.emit(this.highlightImage);
  }
}
