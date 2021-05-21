import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "../auth/auth-interceptor.service";
import { ShoppinglistService } from "../shopping-list/shopping-list.service";
import { RecipeService } from "./recipe.service";

@NgModule({
    providers:[
    ShoppinglistService,
    RecipeService ,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true
    }
    ]
})
export class CoreModule{}