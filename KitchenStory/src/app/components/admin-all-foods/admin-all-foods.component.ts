import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';
import { FoodserviceService } from 'src/app/services/foodservice.service';
import { FoodItemListComponent } from '../food-item-list/food-item-list.component';

@Component({
  selector: 'app-admin-all-foods',
  templateUrl: './admin-all-foods.component.html',
  styleUrls: ['./admin-all-foods.component.css']
})
export class AdminAllFoodsComponent implements OnInit {
  foods: Food[] = [];
  constructor(private foodservice:FoodserviceService) { }

  ngOnInit(): void {
    this.foods = this.foodservice.getAll();
  }
  deleteFood(food: Food) {
    this.foodservice.deleteFood(food.id);
    this.foods = this.foodservice.getAll();
  }

}
