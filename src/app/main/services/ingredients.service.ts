import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class IngredientsService {

  ingredients$: Observable<string[]>;
  ingredientList: string[];
  private myMethodSubject = new Subject<any>();
  constructor() {
    this.ingredients$ = this.myMethodSubject.asObservable();
  }

  setIngredients(ingredients: string[]): void {
    this.ingredientList = ingredients;
    this.myMethodSubject.next(ingredients);
  }

  getAllIngredients(): string[] {
      return this.ingredientList;
  }
}
