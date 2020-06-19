import { Injectable } from '@angular/core';
import {Query} from 'apollo-angular';
import gql from 'graphql-tag';
import {Meal} from '../models/meal'


interface Response {
  meals: Meal[];
}


@Injectable({
  providedIn: 'root'
})

export class GetMealsByTagsService extends Query<Response>{
  document = gql`
    query getMealsWithTags($tags: [String]){
      getMealsWithTags(tags: $tags){
            name
            timeToPrepare
            price
            tags
            url
      
    }  
    }
`
}
