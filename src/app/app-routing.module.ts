import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { ParticipantComponent } from './participant/participant.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { BasketComponent } from './basket1/basket1/basket.component';
import { PasswordComponent } from './password/password.component';
import { EmailComponent } from './email/email.component';
import { ProjectsComponent } from './projects/projects.component';
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
const routes: Routes = [
  {
    path: 'webdesign',
    component: WebdesignComponent
  },
  {
    path: 'participant',
    component: ParticipantComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'sudoku',
    component: SudokuComponent
  },
  {
    path: 'password',
    component: PasswordComponent
  },
  {
    path: 'email',
    component: EmailComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'chess',
    component: ChessComponent
  },
  {
    path: 'bird',
    component: BirdsComponent
  },
  {
    path: 'task',
    component: TaskComponent
  },
  {
    path: 'taskForm',
    component: TaskFormComponent
  },
  {
    path: 'hero',
    component: HeroComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'shoppingCart',
    component: ShoppingCartComponent
  },
  {
    path: 'basket2',
    component: Basket2Component
  },
  {
    path: 'basket3',
    component: Basket3Component
  },
  {
    path: 'calculator2',
    component: Calculator2Component
  },
  {
    path: 'basket',
    component: BasketComponent
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent
  },
  {
    path: 'add-product/:id',
    component: AddProductComponent
  },
  {
    path: 'edit-product/:id',
    component: ProductFormComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'product-container',
    component: ProductsContainerComponent
  },
  {
    path: 'product-form',
    component: ProductFormComponent
  },
  {
    path: 'basket4',
    component: Basket4Component
  },

  {
    path: 'add-newproduct/:id',
    component: AddNewproductComponent
  },

  {
    path: 'invoice-form',
    component: InvoiceFormComponent
  },
  {
    path: 'invoice-container',
    component: InvoiceContainerComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
