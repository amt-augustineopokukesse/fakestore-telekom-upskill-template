import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public constructor(private authService: AuthService, private router: Router){}

  public onLogout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
