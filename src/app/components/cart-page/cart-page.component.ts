import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { ProductModel } from '../product-view/productModel';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{
  showProduct:any | ProductModel[] = [];
  constructor(private api:ApiService ) { } 
  ngOnInit(): void {
       this.api.products().subscribe((res) => {
           this.showProduct = res;
       })
   }

   deleteItem(id:ProductModel){ 
  //  this.api.deleteProduct(id).subscribe((res) => {
  //     this.showProduct = res
  //   }) 
   }
}
