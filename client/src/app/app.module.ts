import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider'
import {MatListModule} from '@angular/material/list'
import { HomeComponent } from './home/home.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { MealCardComponent } from './meal-card/meal-card.component';
import { MealService } from './services/meal.service';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { GetMealsByTagsService } from './queries/get-meals-by-tags.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MealDetailsComponent,
    MealListComponent,
    MenuComponent,
    AboutComponent,
    SearchComponent,
    MealCardComponent,
    MenuCardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [MealService,GetMealsByTagsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
