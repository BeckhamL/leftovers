import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { IngredientsService } from "../../../services/ingredients.service";

@Component({
  selector: "dashboard-common-input-list",
  templateUrl: "./input-list.component.html",
  styleUrls: ["./input-list.component.scss"]
})
export class InputListComponent implements OnInit {
  formGroup = new FormGroup({
    vegetable: new FormControl("")
  });
  vegetableValues: string[];

  constructor(private ingredientService: IngredientsService) {
    this.ingredientService.ingredients$.subscribe(data => {
      console.log(data);
      console.log(this.vegetableValues);
      this.vegetableValues = data;
    });
  }

  ngOnInit() {
    this.vegetableValues = [];
    this.ingredientService.setIngredients(this.vegetableValues);
  }

  onSubmit() {
    this.vegetableValues.push(this.formGroup.value.vegetable);
    this.formGroup.reset();
  }

  getDeletedItem(event) {
    this.vegetableValues = this.vegetableValues.filter(x => x !== event);
  }
}
