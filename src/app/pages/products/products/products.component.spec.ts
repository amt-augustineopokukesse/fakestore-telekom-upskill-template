import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { ProductsService } from 'src/app/core/service/products/products.service';
import { CartService } from 'src/app/core/service/cart/cart.service';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let mockProductService: jasmine.SpyObj<ProductsService>;
  let mockCartService: jasmine.SpyObj<CartService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    mockProductService = jasmine.createSpyObj('ProductsService', ['getProducts']);
    mockCartService = jasmine.createSpyObj('CartService', ['getCount']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockHttpClient = jasmine.createSpyObj('HttpClient', ['post']);

    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],  
      imports: [SharedModule, HttpClientTestingModule, BrowserAnimationsModule],
      providers: [
        { provide: ProductsService, useValue: mockProductService },
        { provide: CartService, useValue: mockCartService },
        { provide: Router, useValue: mockRouter },
        { provide: HttpClient, useValue: mockHttpClient }

      ]
    });
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
