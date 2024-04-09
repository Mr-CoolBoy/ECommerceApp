import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from '../../cognito.service';
import { SignUp } from '../../Models/Models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  signupObj: SignUp;

constructor(private http: HttpClient,
  private router: Router,
  private cognitoService: CognitoService) {
  this.signupObj = new SignUp();
}

onSignUp() {
  debugger;
  this.cognitoService.CheckSignUp(this.signupObj).subscribe((res:any)=>{
    if(res.result) {
      alert("SignUp Success");
      this.router.navigateByUrl('/home')
    } else {
      alert(res.message)
    }
  })   
}
}


