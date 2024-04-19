import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public searchText = '';
  @Output() public searchTextChange = new EventEmitter<string>();
  @Output() public searchParam = new EventEmitter<string>();

  public constructor(private authService: AuthService, private router: Router){}

  public onLogout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }

  public searchFilter() {
    this.searchTextChange.emit(this.searchText);
  }

  
}
