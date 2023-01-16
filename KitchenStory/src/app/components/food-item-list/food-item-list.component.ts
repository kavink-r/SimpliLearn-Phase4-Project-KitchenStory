import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/food';
import { Tag } from 'src/app/models/tags';
import { CartserviceService } from 'src/app/services/cartservice.service';
import { FoodserviceService } from 'src/app/services/foodservice.service';

@Component({
  selector: 'app-food-item-list',
  templateUrl: './food-item-list.component.html',
  styleUrls: ['./food-item-list.component.css']
})
export class FoodItemListComponent implements OnInit {

  foods:Food[]=[];
  searchTerm:string = '';

  @Input()
  foodPageTags?:string[];
  @Input()
  justifyContent:string = 'center';
  
  tags?:Tag[];

 constructor(
    private foodservice:FoodserviceService,
    private route: ActivatedRoute,
    private cartservice:CartserviceService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['searchTerm']);
      if (params['searchTerm']){
        this.foods = this.foodservice.getAllFoodsBySearchTerm(params['searchTerm']);
        console.log('search by searchterm:' + params['searchTerm']);}
        else if(params['tag']){
        this.foods = this.foodservice.getAllFoodsByTag(params['tag']);
        console.log('search by tag:' + params['tag']);}
      else{
        this.foods = this.foodservice.getAll();
        console.log('no searchterm:' + params['searchTerm']);}
          
    })

    if(!this.foodPageTags)
    this.tags = this.foodservice.getAllTags();
  }

  addToCart(id:any){
    let fud:Food;
    fud = this.foodservice.getFoodById(id);
    this.cartservice.addToCart(fud);
    console.log(fud);
  }
  search():void{
    if(this.searchTerm)
    this.foods = this.foodservice.getAllFoodsBySearchTerm(this.searchTerm);
  }
  reset():void{
    this.foods = this.foodservice.getAll();
    
  }
  getbytag(tag:any){
    this.foods = this.foodservice.getAllFoodsByTag(tag);
  }
    
}
