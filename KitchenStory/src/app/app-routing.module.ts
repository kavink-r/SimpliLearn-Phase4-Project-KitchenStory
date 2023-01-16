import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FoodItemListComponent } from './components/food-item-list/food-item-list.component';


const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path: 'search/:searchTerm', component: FoodItemListComponent
  },
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
