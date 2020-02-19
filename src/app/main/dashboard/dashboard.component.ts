import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../services/ingredients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ingredientsList: string[];

  constructor(
    private ingredientService: IngredientsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ingredientService.ingredients$.subscribe(data => {
      this.ingredientsList = data;
    });
  }

  onClickPreferences() {
    this.router.navigate(['/preferences']);
  }

}
