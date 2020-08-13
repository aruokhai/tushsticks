import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { MealsResolverService } from './services/meals-resolver.service';
import { GetAllMealsResolverService } from './services/get-all-meals-resolver.service';
import { PlaceOrderComponent } from './place-order/place-order.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent, resolve: {meals: GetAllMealsResolverService}},
    {path: 'about', component: AboutComponent},
    {
      path: 'search/:tags',
      component : SearchComponent , resolve: {meals: MealsResolverService}
    },
    {path: 'checkout', component: PlaceOrderComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
