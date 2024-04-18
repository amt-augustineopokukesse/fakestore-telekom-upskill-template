import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path: '', component: LoginComponent},
      {path: 'products', component: ProductsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
