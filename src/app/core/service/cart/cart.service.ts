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

  }

  public getCount () {
    return this.cartCountSubject.value;
  }

  public setCount(count: number) {
    this.cartCountSubject.next(count);
  }

}
