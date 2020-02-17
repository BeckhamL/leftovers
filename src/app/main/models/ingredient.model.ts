export class QuantityEnum {
    gram: number;
    mililitre: number;
    ounce: number;
    cup: number;
    teaspoon: number;
    tableSpoon: number;
}

export class Ingredient {
    name: string;
    quantity: QuantityEnum;
}