import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../models/meal';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {
  @Input()
  public meal : Meal;
  constructor() { }

  ngOnInit(): void {
  }

}
