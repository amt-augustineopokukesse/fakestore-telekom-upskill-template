import { Injectable } from '@angular/core';
import { MasterService } from '../master/master.service';
import { APIConstant } from '../../constant/APIConstant';
import { Product } from '../../models/interfaces/productsInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private endpoints = APIConstant.products;

  public constructor(private master: MasterService) { }

  public getProducts() {
    return this.master.get<Product[]>(this.endpoints.getAllProducts);
  }
}
