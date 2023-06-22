import { Component, Input } from '@angular/core';

@Component({
  selector: 'taba-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent {
  @Input() legendBtn: string;
  @Input() pathway: string;
}
