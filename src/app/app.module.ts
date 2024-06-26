import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './pages/auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './pages/products/products/products.component';
import { NavbarComponent } from './shared/widgets/navbar/navbar.component';
import { CartComponent } from './pages/cart/cart/cart.component';
import { ProductComponent } from './pages/product/product/product.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    ProductsComponent,
    NavbarComponent,
    CartComponent,
    ProductComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule,
    MatCardModule, 
    MatButtonModule, 
    MatInputModule, 
    ReactiveFormsModule, 
    MatIconModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
