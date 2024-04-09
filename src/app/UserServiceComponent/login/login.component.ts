import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CognitoService } from '../../cognito.service';
import { Login } from '../../Models/Models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login;

//   constructor(private router: Router,
//     private cognitoService: CognitoService) {
//         // wirte your code here
// }

constructor(private http: HttpClient,private router: Router, private cognitoService: CognitoService) {
  this.loginObj = new Login();
}

onLogin() {
  debugger;
  this.cognitoService.CheckLogin(this.loginObj).subscribe((res:any)=>{
    if(res.result) {
      alert("Login Success");
      this.router.navigateByUrl('/home')
    } else {
      alert(res.message)
    }
  })  
}
}
