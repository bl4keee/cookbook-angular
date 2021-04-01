import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Hungarian_Goulash_Recipe.png/800px-Hungarian_Goulash_Recipe.png'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Hungarian_Goulash_Recipe.png/800px-Hungarian_Goulash_Recipe.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
