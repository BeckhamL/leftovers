import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../services/ingredients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {

  ingredientList: string[];
  constructor(
    private ingredientService: IngredientsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ingredientList = this.ingredientService.getAllIngredients();
  }

  onClickFindRecipes() {
    this.router.navigate([]);
  }

}
