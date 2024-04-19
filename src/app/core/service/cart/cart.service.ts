import { Injectable } from '@angular/core';
import { ProductQuantity } from '../../models/interfaces/productsInterface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productQuantity: ProductQuantity = JSON.parse(sessionStorage.getItem('productQuantity') as string);
  private cartCountSubject = new BehaviorSubject(0);
  public cartCount$ = this.cartCountSubject.asObservable();

  public getCount () {
    return this.cartCountSubject.value;
  }

  public setCount(count: number) {
    this.cartCountSubject.next(count);
  }

}
