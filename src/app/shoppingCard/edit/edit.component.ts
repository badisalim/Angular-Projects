import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '../invoice-container/invoice-container.component';
import { Router } from '@angular/router';
import { ProductsService } from '../invoice.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
   @Input() product: Product;
  @Output() save = new EventEmitter<Product>();
  form: any;
  formGroup: FormGroup;
  routerNavigateByUrl: any;
  httpClient: any;
  constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private router: Router) { }
   ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: [],
      name: [''],
      quantity: [],
      price: [],


    });
    this.formGroup.patchValue(this.product);
  }

  async submit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      await this.productsService.addItem(this.formGroup.value);
      this.save.emit(this.formGroup.value);
      this.router.navigateByUrl('/invoice');
      this.router.navigateByUrl('/shop/products');
    }
  }

  async remove(product) {
    await this.httpClient.delete(`http://localhost:3000/invoice/${product.id}`).toPromise();
    await this.httpClient.delete(`http://localhost:3000/shop/products/${product.id}`).toPromise();
    this.router.navigateByUrl('/invoice');

    this.router.navigateByUrl('/shop/products');

  }

  async edit(product: Product) {
    await this.httpClient.edit(`http://localhost:3000/invoice/${product.id}`).toPromise();
    this.router.navigateByUrl('/invoice');

  }


}

