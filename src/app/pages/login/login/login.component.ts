// Core Module
import { Component, OnInit } from '@angular/core';

// Forms Module
import { FormBuilder, FormGroup } from '@angular/forms';

// Router Module
import { Router } from '@angular/router';

// Interfaces
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public userForm!: FormGroup;
  public user!: IUser;
  public loginError: boolean = false;
  public loginErrorMessage: string = '';

  constructor(private router: Router, private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.userForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  public onSubmit(): void {
    if (
      this.userForm.get('email')?.value == 'teste@email.com' &&
      this.userForm.get('password')?.value == 'teste'
    ) {
      sessionStorage.setItem('user', JSON.stringify(this.userForm.value));
      this.router.navigate(['/home']);
    } else {
      this.loginError = true;
      this.loginErrorMessage = 'Invalid username and/or password';
    }
  }
}
