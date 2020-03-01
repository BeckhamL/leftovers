import { Component, OnInit, OnChanges } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { IngredientsService } from "../../../services/ingredients.service";

@Component({
  selector: "dashboard-common-input-list",
  templateUrl: "./input-list.component.html",
  styleUrls: ["./input-list.component.scss"]
})
export class InputListComponent implements OnInit, OnChanges {
  formGroup = new FormGroup({
    vegetable: new FormControl("")
  });
  vegetableValues: string[];

  constructor(private ingredientService: IngredientsService) {
    this.ingredientService.ingredients$.subscribe(data => {
      this.vegetableValues = data;
    });
  }

  ngOnInit() {
    this.vegetableValues = [];
    this.ingredientService.setIngredients(this.vegetableValues);
  }

  ngOnChanges() {
    this.ingredientService.ingredients$.subscribe(data => {
      this.vegetableValues = data;
    });
  }

  onSubmit() {
    this.vegetableValues.push(this.formGroup.value.vegetable);
    this.formGroup.reset();
  }

  getDeletedItem(event) {
    this.vegetableValues = this.vegetableValues.filter(x => x !== event);
  }
}
