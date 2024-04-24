import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { CartService } from 'src/app/core/service/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public searchText = '';
  @Output() public searchTextChange = new EventEmitter<string>();
  @Output() public searchParam = new EventEmitter<string>();
  public cartCount = 0;
  public url = false;

  public constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService,
  ) {}

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  ngOnInit(): void {
    if (this.router.url === '/products') {
      this.url = true;
    }
    this.cartService.cartCount$.subscribe((count) => {
      this.cartCount = count;
      this.cartService.fetchProducts();
    });
  }

  public onHomeClick(): void {
    this.router.navigate(['products']);
  }

  public onLogout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }

  public searchFilter() {
    this.searchTextChange.emit(this.searchText);
  }

  public onCartClick() {
    this.router.navigate(['cart']);
  }
}
