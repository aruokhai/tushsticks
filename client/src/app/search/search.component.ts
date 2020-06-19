import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Meal } from '../models/meal';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public meals : Meal[];
  public loading : boolean = true;
  public title$: Observable<string>;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.title$ = this.route.params.pipe(pluck('tags'));
    this.route.data.subscribe((data: {meals: Meal[]}) => {
      this.meals = data.meals;
      this.loading = false;


    }, error => {console.error(error)});
  }

}
