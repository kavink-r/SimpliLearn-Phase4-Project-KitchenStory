import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodserviceService } from 'src/app/services/foodservice.service';

@Component({
  selector: 'app-admin-add-food',
  templateUrl: './admin-add-food.component.html',
  styleUrls: ['./admin-add-food.component.css']
})
export class AdminAddFoodComponent implements OnInit {
  addFoodForm!: FormGroup;
  constructor(private router: Router,private foodService:FoodserviceService) { }

  ngOnInit(): void {
    this.addFoodForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      tags: new FormArray([]),
      stars: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required]),
      origins: new FormArray([]),
      cookTime: new FormControl('', [Validators.required]),
      favorite: new FormControl(false),
    });
  }
  getControls() {
    return (this.addFoodForm.get('tags') as FormArray).controls;
  }
  // }
  addTags() {
    (<FormArray>this.addFoodForm.get('tags')).push(new FormControl(''));
  }
  deleteTags(index: number) {
    (<FormArray>this.addFoodForm.get('tags')).removeAt(index);
  }

  getControlsOrigins() {
    return (this.addFoodForm.get('origins') as FormArray).controls;
  }
  addOrigins() {
    (<FormArray>this.addFoodForm.get('origins')).push(new FormControl(''));
  }
  deleteOrigins(index: number) {
    (<FormArray>this.addFoodForm.get('origins')).removeAt(index);
  }


  get id() {
    return this.addFoodForm.get('id');
  }
  get name() {
    return this.addFoodForm.get('name');
  }
  get price() {
    return this.addFoodForm.get('price');
  }
  get tags() {
    return this.addFoodForm.get('tags');
  }
  get stars() {
    return this.addFoodForm.get('stars');
  }
  get imageUrl() {
    return this.addFoodForm.get('imageUrl');
  }
  get origins() {
    return this.addFoodForm.get('origins');
  }
  get cookTime() {
    return this.addFoodForm.get('cookTime');
  }

  addfood(): void {
    console.log(this.addFoodForm.value);
    this.foodService.addfood(this.addFoodForm.value);
    this.router.navigateByUrl('/admin-home/all-foods');
  }
}
