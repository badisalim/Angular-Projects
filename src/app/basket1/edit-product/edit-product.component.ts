import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../products-container/products-container.component';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product$: Observable<Product>;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    const code = this.route.snapshot.params.code;
    await this.httpClient.delete(`http://localhost:3000/shop/products/${code}`).toPromise();

  }

  async submit(product) { }

  async remove(product) {
    await this.httpClient.delete(`http://localhost:3000/shop/products/${product.code}`).toPromise();
    this.router.navigateByUrl('/shop/products');
  }

  // async edit(product: Product) {
  //   await this.httpClient.edit(`http://localhost:3000/shop/products/${product.code}`).toPromise();
  //   this.router.navigateByUrl('/shop/products');

  // }


}
