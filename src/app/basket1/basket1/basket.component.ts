import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SHOPS } from './basketData';
import { Product, BranchInProduct } from '../service/types';
//import { MapperService } from '../mapper.service';
import { purchases } from '../../../../server/purchases';
import { Branch, Basket } from '../service/types';
//import { MapperService } from 'src/app/shoppingCard/mapper.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  shop = SHOPS;
  branches: Branch[];
  products: Product[];
  // constructor(private mapper: MapperService) { }
  constructor() { }
  ngOnInit() {
    // this.products = this.mapper.mapToProducts(purchases);
    // this.branches = this.mapper.mapToBranches(purchases);
  }

  public calculateBasketTotal(basket) {
    const productsTotal = basket.products.map(product => product.amount * product.price);
    return productsTotal.reduce((product1, product2) => product1 + product2);
  }

  public calculateBranchTotal(branch) {
    return branch.baskets.map(this.calculateBasketTotal).reduce((total1, total2) => total1 + total2);
  }
  calculateBranchTotal2(branch: BranchInProduct) {
    return branch.basketItems.map(bi => bi.price * bi.amount).reduce((bi1, bi2) => bi1 + bi2);
  }

  public calculateProductTotal(product: Product) {
    return product.branches.map(this.calculateBranchTotal2).reduce((total1, total2) => total1 + total2);

  }
  public calculateShopTotal(shop) {

    const baskets = shop.map(branch => this.calculateBranchTotal(branch));
    // console.log(baskets);

    return baskets.reduce((one, two) => one + two);

  }
}

