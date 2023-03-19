import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: any;
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-invoice-container',
  templateUrl: './invoice-container.component.html',
  styleUrls: ['./invoice-container.component.css']
})
export class InvoiceContainerComponent implements OnInit {

  //private url = 'https://github.com/badisalim/shopping-card/blob/master/server/invoice.json';
  private url = 'https://localhost:3000/invoice';
  products$: Observable<Product[]>;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.products$ = this.httpClient.get<Product[]>(this.url);
  }
}

