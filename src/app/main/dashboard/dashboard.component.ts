import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ingredientsList: string[];

  constructor(
    private ingredientService: IngredientsService
  ) { }

  ngOnInit() {
    this.ingredientService.ingredients$.subscribe(data => {
      this.ingredientsList = data;
    });
  }

}
