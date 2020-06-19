import { Injectable } from '@angular/core';
import {of, Observable } from 'rxjs';
import {Meal} from '../models/meal';
import {GetMealsByTagsService} from '../queries/get-meals-by-tags.service';
import {map, pluck} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private getMealsByTagsService: GetMealsByTagsService) { }

  getMealsByTags(tags : string[]): Observable<Meal[]>{
    let meals$ : Observable<Meal[]>
    meals$ = this.getMealsByTagsService.fetch({
      tags
    }).pipe(pluck("data","getMealsWithTags"));
    return meals$;
  }

  getMealsById(id: string): Observable<Meal> {
    return of({name: "motherfucjer", price: 22, timeToPrepare: 33, url: "we",  tags:["sdf"]});     
  }

  getAllMeals(): Observable<Meal[]>{
    return of([
      {name: "motherfucjer", price: 22, timeToPrepare: 33, url: "https://storage.cloud.google.com/tushsticks/breakfast/fried_plantain.jpeg?authuser=2", tags:["sdf"]},
        {name: "motherfucjer", price: 22, timeToPrepare: 33,url:"https://storage.cloud.google.com/tushsticks/breakfast/american_pancakes.jpeg?authuser=2", tags: ["mother"]}
       ]);
  }
}
