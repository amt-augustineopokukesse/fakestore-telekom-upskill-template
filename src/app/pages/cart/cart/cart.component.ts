import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/interfaces/productsInterface';
import { CartService } from 'src/app/core/service/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public selectedProducts: Map<number, Product> = new Map();
  public products: [number, Product][] = [];

  public constructor(private cartService: CartService) { }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  ngOnInit(): void {
    this.selectedProducts = this.cartService.selectedProducts;
    this.products = Array.from(this.selectedProducts.entries());
    console.log(this.selectedProducts);
  }
}
