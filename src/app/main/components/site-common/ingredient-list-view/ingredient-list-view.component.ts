import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'site-common-ingredient-list-view',
  templateUrl: './ingredient-list-view.component.html',
  styleUrls: ['./ingredient-list-view.component.scss']
})
export class IngredientListViewComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  ingredientList: string[];

  constructor() { }

  ngOnInit() {
  }

}
