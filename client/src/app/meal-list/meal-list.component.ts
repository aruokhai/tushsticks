import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../models/meal';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  @Input()
  public meals : Meal[];
  constructor() { }

  ngOnInit(): void {
  }

}
