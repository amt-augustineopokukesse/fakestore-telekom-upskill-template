import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/interfaces/productsInterface';
import { ProductsService } from 'src/app/core/service/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];

  public constructor(private productsService: ProductsService) { }

  public ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    this.productsService.getProducts().subscribe(
      {
        next: (response) => {
          console.log(response);
          this.products = response;
        },
        error: (error) => console.log(error)
      }
    );
  }
}
