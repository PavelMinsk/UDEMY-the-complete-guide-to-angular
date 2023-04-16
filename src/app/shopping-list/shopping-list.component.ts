import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient('Tomato', 2),
        new Ingredient('Cucumber', 1),
        new Ingredient('Pepper', 1),
        new Ingredient('Onion', 1),
        new Ingredient('Garlic', 1),
    ];
}
