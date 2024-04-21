import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products/products.component';
import { CartComponent } from './pages/cart/cart/cart.component';
import { ProductComponent } from './pages/product/product/product.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path: '', component: LoginComponent},
      {path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
      {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
      {path: 'product-details/:id', component: ProductComponent, canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
