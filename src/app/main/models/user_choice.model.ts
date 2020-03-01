import { Ingredient } from './ingredient.model';

export class UserChoice {
    vegetables: Ingredient[];
    meats: Ingredient[];
    fish: Ingredient[];
    carbs: Ingredient[];
    seasoning: Ingredient[];
    other: Ingredient;
    cuisine: string[];
    timeForPreparation: string;
    servingSize: string;
    allergies: string[];
}   