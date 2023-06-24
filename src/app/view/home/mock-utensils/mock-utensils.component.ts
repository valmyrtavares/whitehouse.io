import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'taba-mock-utensils',
  templateUrl: './mock-utensils.component.html',
  styleUrls: ['./mock-utensils.component.scss'],
})
export class MockUtensilsComponent implements OnInit {
  @Input() homeUtensils: string[];
  @Input() title: string;
  @Input() pathway: string;

  ranch: string;
  room: string;
  kitchen: string;

  ngOnInit() {
    [this.ranch, this.room, this.kitchen] = this.homeUtensils;
  }
}
