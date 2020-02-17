import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../../../services/ingredients.service';
import { Router } from '@angular/router';
@Component({
  selector: 'site-common-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ingredientList: string[];
  constructor(
    private ingredientService: IngredientsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ingredientService.ingredients$.subscribe(data => {
      this.ingredientList = data;
    });
  }

  onClickPreferences() {
    this.router.navigate(['/preferences']);
  }

}
