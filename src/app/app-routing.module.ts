import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products/products.component';
import { CartComponent } from './pages/cart/cart/cart.component';
import { ProductComponent } from './pages/product/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path: '', component: LoginComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'product-details/:id', component: ProductComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
