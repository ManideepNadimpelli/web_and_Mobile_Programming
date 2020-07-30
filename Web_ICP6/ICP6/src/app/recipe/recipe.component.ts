import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private service: ApiService) { }
  recipeData = null;
  public item: any;
  ngOnInit() {
  }
  getRecipeDetails() {
    this.service.recipeFinder(this.item).subscribe(data => {
      this.recipeData = data;
    });
  }
}
