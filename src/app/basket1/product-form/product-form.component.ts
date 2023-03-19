import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../products-container/products-container.component';
import { ProductsService } from '../service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() product: Product;
  @Output() save = new EventEmitter<Product>();
  form: FormGroup;
  formGroup: FormGroup;
  routerNavigateByUrl: any;
  //  form: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      product: [''],
      amount: [],
      price: [],
      code: [],
      // id: [''],
      // name: [''],
      // code: [''],
      // price: [],



    });
    this.formGroup.patchValue(this.product);
  }

  async submit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      this.save.emit(this.formGroup.value);

    }
  }

}
