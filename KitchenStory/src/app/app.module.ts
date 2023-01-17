import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RatingModule } from 'ng-starrating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodItemListComponent } from './components/food-item-list/food-item-list.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './components/checkout/model-basic';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminAllFoodsComponent } from './components/admin-all-foods/admin-all-foods.component';
import { AdminAddFoodComponent } from './components/admin-add-food/admin-add-food.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodItemListComponent,
    CartListComponent,
    NotFoundComponent,
    CheckoutComponent,
    HomeComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminAllFoodsComponent,
    AdminAddFoodComponent,
    ChangePasswordComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,    
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbdModalBasic
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
