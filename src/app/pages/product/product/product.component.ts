import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/interfaces/productsInterface';
import { ProductsService } from 'src/app/core/service/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    category: '',
    image: '',
    rating: {rate: 0, count: 0}
  };
  public constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  public ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.getProduct(id);
    console.log(id);
  }

  public getProduct(id: number) {
    this.productsService.getProduct(id).subscribe(
      {
        next: (response) => {
          this.product = response;
          console.log(this.product);
          // sessionStorage.setItem('products', JSON.stringify(this.products));
        },
        error: (error) => console.error(error)
      }
    );
  }

}
