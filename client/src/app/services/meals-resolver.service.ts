import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Meal} from '../models/meal'
import { Observable } from 'rxjs';
import { MealService } from './meal.service';
@Injectable({
  providedIn: 'root'
})
export class MealsResolverService implements Resolve<Meal[]>{

  constructor(private mealService: MealService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<Meal[]> {
    let tags: string = route.paramMap.get('tags');
    return this.mealService.getMealsByTags(tags.split(','));
  }
}
