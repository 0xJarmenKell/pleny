import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../components/product-view/productModel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  public cartItemList :any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}
  getProduct(currentPage: number, productsPerPage: number){
    return this.http.get<ProductModel[]>('https://dummyjson.com/products', {
      params: {
        page: currentPage.toString(),
        limit: productsPerPage.toString()
      }
    });
  }

  getproductbyid(id: string) {
    return this.http.get("https://dummyjson.com/products/" + id)
  }

  addtocart(data: ProductModel) {
    this.cartItemList.push(data);
    this.productList.next(this.cartItemList);
    console.log(this.cartItemList)
  }

  products() {
    return this.productList.asObservable();
  }

  getCategory(){
    return this.http.get<ProductModel[]>('https://dummyjson.com/products/categories');
  }

  removeItem(data: ProductModel) {
    this.cartItemList.map((a: ProductModel, index: ProductModel) => {
         if(data.id === a.id) {
           this.cartItemList.splice(index, 1)
         }
    })
    this.productList.next(this.cartItemList);
  }

 }
