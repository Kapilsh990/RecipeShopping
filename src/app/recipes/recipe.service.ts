import {Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ShoppinglistService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.module";
import { Ingredient } from "./shared/ingredient.model";


@Injectable()
export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();
    
    // private recipes: Recipe[] = [
    //     new Recipe('Kanda Bhaji',
    //     'Here is a mouth-watering, flavourful mix of onions, coriander, spices and nutty walnuts, kanda bhaji is perfect for a wholesome meal when you are craving something spicy!',
    //     'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2016/07/kanda-bhaji-recipe12a.jpg',
    //     [
    //         new Ingredient('onions',1),
    //         new Ingredient('gram flour', 1),
    //         new Ingredient('crushed corianderr seeds', 2),
    //         new Ingredient('Oil',1),
    //     ]),
    //     new Recipe('Hara Dana Methi Bail Gatta Curry',
    //     'A Rajasthani delight, gatta curry is a staple in the region\'s traditional thali. Besan balls simmered and cooked in a flavourful curry is no less than a heavenly experience!',
    //     'https://c.ndtvimg.com/2020-05/j8i4u6ag_gatta-curry_625x300_19_May_20.jpg',
    //     [
    //         new Ingredient(' flour gram',2),
    //         new Ingredient('green fennel seeds',1),
    //         new Ingredient('sprigs Fresh coriander leaves,red chilli powder,onion',1),
    //     ])
    //   ];

    private recipes: Recipe[]=[];
      
    constructor(private slService: ShoppinglistService) {}

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }
    
    getRecipe(index:number){
        return this.recipes.slice()[index];
    }

    addIngredientToSL(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }   

    updateRecipe(index: number, newrecipe: Recipe) {
        this.recipes[index] = newrecipe;
        this.recipeChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
    }
}