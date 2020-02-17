import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class IngredientsService {

  ingredients$: Observable<string[]>;
  private myMethodSubject = new Subject<any>();
  constructor() {
    this.ingredients$ = this.myMethodSubject.asObservable();
  }

  getAllIngredients(ingredients: string[]): void {
      this.myMethodSubject.next(ingredients);
  }
}
