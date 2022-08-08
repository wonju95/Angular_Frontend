import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from './model/user.model';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: LoginService
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.loginForm = this.fb.group({
      id: '',
      passwd: ''
    });
  }

  login() {
    // console.log(this.loginForm.controls['id'].value);
    // console.log(this.loginForm.controls['passwd'].value);
    let id = this.loginForm.controls['id'].value;
    let passwd = this.loginForm.controls['passwd'].value;

    this.service.getUser(id, passwd).subscribe(
      
    );
  }

}
