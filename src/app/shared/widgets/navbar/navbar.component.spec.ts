import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { CartService } from 'src/app/core/service/cart/cart.service';

import { NavbarComponent } from './navbar.component';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockCartService: jasmine.SpyObj<CartService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['logout']);
    mockCartService = jasmine.createSpyObj('CartService', ['cartCount$']);
    mockCartService.cartCount$ = of(0); 
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      imports: [SharedModule, FormsModule],
      declarations: [NavbarComponent],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: CartService, useValue: mockCartService },
        { provide: Router, useValue: mockRouter }
      ]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
