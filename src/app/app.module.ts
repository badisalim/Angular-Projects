
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { ParticipantComponent } from './participant/participant.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { BasketComponent } from './basket1/basket1/basket.component';
import { PasswordComponent } from './password/password.component';
import { EmailComponent } from './email/email.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ChessComponent } from './chess/chess.component';
import { BirdsComponent } from './birds/birds.component';
import { TaskComponent } from './task/task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';
// import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartComponent } from './shoppingCard/shopping-cart/shopping-cart.component';

import { Basket2Component } from './basket2/basket2.component';
import { Basket3Component } from './basket3/basket3.component';
import { Calculator2Component } from './calculator2/calculator2.component';
import { AddProductComponent } from './basket1/add-product/add-product.component';
import { EditProductComponent } from './basket1/edit-product/edit-product.component';
import { ProductsComponent } from './basket1/products/products.component';
import { ProductsContainerComponent } from './basket1/products-container/products-container.component';
import { ProductFormComponent } from './basket1/product-form/product-form.component';
import { Basket4Component } from './basket4/basket4.component';
import { AddNewproductComponent } from './shoppingCard/add-newproduct/add-newproduct.component';
import { InvoiceFormComponent } from './shoppingCard/invoice-form/invoice-form.component';
import { InvoiceContainerComponent } from './shoppingCard/invoice-container/invoice-container.component';
import { EditComponent } from './shoppingCard/edit/edit.component';



@NgModule({
  declarations: [
    AppComponent,
    WebdesignComponent,
    ParticipantComponent,
    EmailComponent,
    CalculatorComponent,
    SudokuComponent,
    PasswordComponent,
    ProjectsComponent,
    ChessComponent,
    BirdsComponent,
    TaskComponent,
    TaskFormComponent,
    HeroComponent,
    HeroesComponent,
    ShoppingCartComponent,
    Basket2Component,
    Basket3Component,
    Calculator2Component,
    AppComponent,
    BasketComponent,
    AddProductComponent,
    EditProductComponent,
    ProductsComponent,
    ProductsContainerComponent,
    ProductFormComponent,
    Basket4Component,
    AddNewproductComponent,
    InvoiceFormComponent,
    InvoiceContainerComponent,
    EditComponent,
 


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],

})

export class AppModule { }

