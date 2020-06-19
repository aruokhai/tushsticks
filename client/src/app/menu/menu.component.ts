import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../models/meal';
import {pluck, switchMap} from 'rxjs/operators';
import {Observable, BehaviorSubject} from "rxjs"
import { from } from 'zen-observable';
import { MealService } from '../services/meal.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public meals$ : BehaviorSubject<Meal[]>;
  public loading : boolean = true;
  constructor(private route : ActivatedRoute, private mealService : MealService) { }

  ngOnInit(): void {
    this.meals$ = new BehaviorSubject(null);
    this.route.data.pipe(pluck("meals")).subscribe(this.meals$);
  }
 getAllMeals() : void {
   console.log("all meals gotten");
   this.mealService.getAllMeals().subscribe((meals: Meal[]) => { 
    this.meals$.next(meals)})
 }

 getMeals(tag: string) : void{
   console.log(tag," gotten");
   this.mealService.getMealsByTags([tag]).subscribe((meals: Meal[]) => { 
    this.meals$.next(meals)});
 }
}
