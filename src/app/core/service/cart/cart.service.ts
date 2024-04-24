import { Injectable } from '@angular/core';
import { Product, ProductQuantity } from '../../models/interfaces/productsInterface';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from '../products/products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productQuantity: ProductQuantity = JSON.parse(sessionStorage.getItem('productQuantity') as string);
  private cartCountSubject = new BehaviorSubject(0);
  public cartCount$ = this.cartCountSubject.asObservable();
  public selectedProducts: Map<number, Product> = new Map(JSON.parse(sessionStorage.getItem('selectedProducts') as string));

  public constructor(private productsService: ProductsService) {
    const productQuantity = JSON.parse(sessionStorage.getItem('productQuantity') as string);
    if (productQuantity) {
      const quantitySum = Object.values(productQuantity).reduce((a: number, b: unknown) => a + Number(b), 0);
      this.setCount(quantitySum);
    }

    this.fetchProducts();
  }

  public fetchProducts() {
    const selectedProducts = JSON.parse(sessionStorage.getItem('selectedProducts') as string);
    if (selectedProducts) {
      this.selectedProducts = new Map(selectedProducts);
    }
  }

  public getCount () {
    return this.cartCountSubject.value;
  }

  public setCount(count: number) {
    this.cartCountSubject.next(count);
  }

}
