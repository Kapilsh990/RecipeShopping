import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService , AuthResponseData} from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {
    isLoginMode = true;
    isLoading =false;
    error:any;

    constructor(private authService:AuthService , private route:Router ) {}

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }
    onSubmit(form: NgForm) {
        if(!form.valid){
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        let authObs:Observable<AuthResponseData>

        this.isLoading = true;
        if (this.isLoginMode) {
            authObs = this.authService.signIn(email, password)
        } else{
            authObs = this.authService.signup(email, password)
        }

        authObs.subscribe(
            (resData: any) =>{
                console.log(resData);
                this.isLoading = false;
                this.route.navigate(['/recipes']);
            }, 
            errorMessage => {
                console.log(errorMessage);
                this.error = errorMessage;
                this.isLoading = false;
            }
        );
        form.reset();
    }
    onHandleError(){
        this.error = null;
    }
}