import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminAddFoodComponent } from './components/admin-add-food/admin-add-food.component';
import { AdminAllFoodsComponent } from './components/admin-all-foods/admin-all-foods.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FoodItemListComponent } from './components/food-item-list/food-item-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'search/:searchTerm', component: FoodItemListComponent
  },
  {path: 'checkout', component: CheckoutComponent},
  {path: 'login', component:LoginComponent},
  {path: 'admin-home', component:AdminHomeComponent,
  children: [
    {path: '', component: AdminAllFoodsComponent},
    { path: 'all-foods', component: AdminAllFoodsComponent },
    { path: 'add-food', component: AdminAddFoodComponent },
    { path: 'change-password', component: ChangePasswordComponent },
  ],}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
