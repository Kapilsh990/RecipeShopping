import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinner } from "./loding-spinner/loading.comoponent";

@NgModule({
    declarations:[
        AlertComponent,
        LoadingSpinner,
        DropdownDirective
    ],
    imports : [
        CommonModule
    ],
    
    exports: [
        AlertComponent,
        LoadingSpinner,
        DropdownDirective,
        CommonModule
    ]

})
export class SharedModule{}