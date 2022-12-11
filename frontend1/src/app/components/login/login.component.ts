import { Component, OnInit } from '@angular/core';
//import { AuthService } from './auth.service';
//import { Router } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient) { }

  ngOnInit(): void {
  }
  userform={
    
    'email' : '',
    'password' : ''

    
  }
  
userverify(){
  this.auth.loginUser(this.userform).subscribe(res=>{
    if(res.message){
      alert(res.message)
    }
    else if (res.email_id == "admin123@gmail.com" && res.password =="admin123"){
      alert("Admin has successfully logged in")
      this.router.navigate(['/studentslist'])

    }
    else{
      alert("Staff has successfully logged in")

      this.router.navigate(['/landingtrainer'])

    }
  })
  
}


}
