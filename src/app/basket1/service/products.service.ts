import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products-container/products-container.component';
import { HttpClient } from '@angular/common/http';

export interface Product {
  product: string;
  amount: number;
  price: number;
  code: number;

  // id: number;
  // name: string;

}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  host = 'http://localhost:3000/shop/invoice';
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {

    return this.httpClient.get<Product[]>(this.host);
  }
  getProduct(code: number): Observable<Product> {
    return this.httpClient.get<Product>('${this.host}/${code}');
  }

  addProduct(product: Product) {
    //console.log('123');

    return this.httpClient.post(this.host, product).subscribe(data => console.log(data));

  }
  editProduct(product: Product) {
    return this.httpClient.put(this.host, product);

  }
  deleteProduct(code: number) {
    return this.httpClient.delete<Product>('${this.host}/${code}');

  }

}
