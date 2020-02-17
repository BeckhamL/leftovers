import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../services/ingredients.service';
@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {

  ingredientList: string[];
  constructor(
    private ingredientService: IngredientsService
  ) { }

  ngOnInit() {
    this.ingredientService.ingredients$.subscribe(data => {
      console.log(data);
      this.ingredientList = data;
    })
  }

}
