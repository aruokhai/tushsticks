import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../models/meal';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css']
})
export class MealCardComponent implements OnInit {
  @Input()
  public meal : Meal;
  constructor() { }

  ngOnInit(): void {
  }

}
