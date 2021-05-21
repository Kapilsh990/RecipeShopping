import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../recipes/shared/ingredient.model';
import { ShoppinglistService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy {
  ingredients: Ingredient[] = [];
  private igChanged: Subscription = new Subscription;

  constructor(private slService: ShoppinglistService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChanged =  this.slService.ingredientChanged.
    subscribe(
      (ingredients : Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.igChanged.unsubscribe();
  }

}
