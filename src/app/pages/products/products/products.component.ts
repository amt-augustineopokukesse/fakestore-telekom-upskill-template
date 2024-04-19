import { Component, OnInit } from '@angular/core';
import { Product, ProductQuantity } from 'src/app/core/models/interfaces/productsInterface';
import { ProductsService } from 'src/app/core/service/products/products.service';
import { mapSerializer } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];
  public productQuantity: ProductQuantity = {};

  public constructor(private productsService: ProductsService) { }

  public ngOnInit(): void {
    this.getProducts();
    if(sessionStorage.getItem('productQuantity')) {
      this.productQuantity = JSON.parse(sessionStorage.getItem('productQuantity') as string);
      console.log(this.productQuantity);
    }
    const storedSelectedProducts = sessionStorage.getItem('selectedProducts');

    if (storedSelectedProducts !== null) {
      this.productsService.selectedProducts = new Map(JSON.parse(storedSelectedProducts));
    }
    
  }

  public getProducts() {
    this.productsService.getProducts().subscribe(
      {
        next: (response) => {
          console.log(response);
          this.products = response;
          sessionStorage.setItem('products', JSON.stringify(this.products));
        },
        error: (error) => console.log(error)
      }
    );
  }
  public onSearch(event: string): void {
    const tempProducts = JSON.parse(sessionStorage.getItem('products') as string);
    if(event.length > 0) {
      this.products = tempProducts.filter((product: Product) => {
        return product.title.toLowerCase().includes(event.toLowerCase());
      });
    } else {
      this.products = tempProducts;
    }
    console.log(event);
  }

  public onAddToCart(product: Product) {
    if (this.productsService.selectedProducts.has(product.id)) {
      const currentProduct = this.productsService.selectedProducts.get(product.id);
  
      const updatedProduct = {
        ...currentProduct,
        quantity: currentProduct.quantity + 1
      };
  
      this.productsService.selectedProducts.set(product.id, updatedProduct);
      this.productQuantity[product.id] = updatedProduct.quantity;
    } else {
      this.productsService.selectedProducts.set(product.id, { ...product, quantity: 1 });
      this.productQuantity[product.id] = 1;
    }
    console.log(this.productsService.selectedProducts);
    console.log(this.productQuantity);
    const serializedMap = mapSerializer(this.productsService.selectedProducts);
    sessionStorage.setItem('selectedProducts', serializedMap);
    sessionStorage.setItem('productQuantity', JSON.stringify(this.productQuantity));
  }

  public onRemoveFromCart(product: Product) {
    if (this.productsService.selectedProducts.has(product.id)) {
      const currentProduct = this.productsService.selectedProducts.get(product.id);
      if (currentProduct.quantity > 1) {
        const updatedProduct = {
          ...currentProduct,
          quantity: currentProduct.quantity - 1
        };
        this.productsService.selectedProducts.set(product.id, updatedProduct);
        this.productQuantity[product.id] = updatedProduct.quantity;
      } else {
        this.productsService.selectedProducts.delete(product.id);
        delete this.productQuantity[product.id];
      }
    }
    console.log(this.productsService.selectedProducts);
    console.log(this.productQuantity);
    const serializedMap = mapSerializer(this.productsService.selectedProducts);
    sessionStorage.setItem('selectedProducts', serializedMap);
    sessionStorage.setItem('productQuantity', JSON.stringify(this.productQuantity));
  }
  
}
