import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../invoice-container/invoice-container.component';




@Component({
  selector: 'app-add-newproduct',
  templateUrl: './add-newproduct.component.html',
  styleUrls: ['./add-newproduct.component.css']
})
export class AddNewproductComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  async submit(product: Product) {
    await this.httpClient.post('http://localhost:3000/invoice', product).toPromise();
    await this.httpClient.post('http://localhost:3000/shop/products', product).toPromise();
    this.router.navigateByUrl('/invoice');
    this.router.navigateByUrl('/shop/products');
  }
}
