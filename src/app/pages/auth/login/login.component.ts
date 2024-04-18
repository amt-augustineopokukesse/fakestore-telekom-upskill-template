import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/core/models/interfaces/authInterface';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm: FormGroup;

  public constructor(private authService: AuthService, private route: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  public onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe({
      next: (response: LoginResponse ) => {
        console.log(response);
        const token = response.token;
        sessionStorage.setItem('token', token);
        this.route.navigate(['products']);
      },
      error: (error) => console.log(error)
    });
    console.log(this.loginForm.value);
  }
  
}
