import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { LoginComponent } from './components/login/login.component';
ProductDetailsComponent
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'products', component: ProductViewComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path: 'cart-page', component: CartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
