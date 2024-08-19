import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { ProductModel } from './productModel';
import { ThemePalette } from '@angular/material/core';
export interface ChipColor {
  name: string;
  color: ThemePalette;
}

interface ApiResponse {
  data: ProductModel[];
  totalProducts: number;
}

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit {
   data!:any | ProductModel[];
   showAdd:boolean = true;
   showRemove: boolean = false;
   currentPage: number = 1;
   productsPerPage = 10;

   availableColors: ChipColor[] = [
    {name: 'All', color: undefined},
    {name: 'Smartphones', color: 'primary'},
    {name: 'Laptops', color: 'primary'},
    {name: 'Skincare', color: 'primary'},
    {name: 'Makeup', color: 'primary'},
    {name: 'Men shirts', color: 'primary'},
    {name: 'women shirts', color: 'primary'},
    {name: 'kids shirts', color: 'primary'},
    {name: 'Sunglasses', color: 'primary'},
    {name: 'Groceries', color: 'primary'},
    {name: 'Fragrances', color: 'primary'},
    {name: 'Tops', color: 'primary'},
    {name: 'Lightinig', color: 'primary'},
    {name: 'Home Decorations', color: 'primary'},
    {name: 'Food', color: 'primary'},
  ];

  constructor(private api:ApiService) { }
  ngOnInit(): void {
    this.displayProduct();
    this.displayCategory();
  }


  displayProduct() {
    this.api.getProduct(this.currentPage, this.productsPerPage).subscribe((res: ProductModel[]) => {
      this.data = res;
      // this.totalProducts = res.totalProducts;
      console.log(res);
    })
  }

  displayCategory() {
    const startTime = Date.now();
    this.api.getCategory().subscribe((res) => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      console.log('API response time:', responseTime, 'ms');
      this.data = res;
      console.log(res);
    }),
    (error: any) => {
      console.error('Error getting products:', error);
    }
  }
  onPageChange(event: any): void {
    this.currentPage = event;
    this.displayProduct();
  }


  addToCart(item: ProductModel){
    // this.showAdd = false;
    // this.showRemove = true;
   this.api.addtocart(item);
  }

  removeItem(item: ProductModel) {
    // this.showAdd = true;
    // this.showRemove = false;
    this.api.removeItem(item);
  }
}
