import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.foodandwine.com/thmb/kCfumjRvzO8n6U5ttNI9DvHIZUo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/seared-scallops-with-pomegranate-and-meyer-lemon-FT-RECIPE0321-7189303d38de41449c6b501c8663541c.jpg'
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://static01.nyt.com/images/2021/05/06/dining/06mothers-day-burst1/06mothers-day-burst1-square640-v2.jpg'
    ),
    new Recipe(
      'A Test Recipe 3',
      'This is simply a test 2',
      'https://www.foodandwine.com/thmb/3rgkX78W7MIsyx_WG0y51xQMAMc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/baked-alaska-FT-RECIPE0621-c462ea559e094c75ad70aa9fc70d0030.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
