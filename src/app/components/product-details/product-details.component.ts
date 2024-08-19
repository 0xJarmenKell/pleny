import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-view/productModel';
import { ApiService } from '../../shared/api.service';
import { ActivatedRoute } from '@angular/router';
ActivatedRoute
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  productData!: any | ProductModel;
  showAdd:boolean = true;
  showRemove: boolean = false;
  constructor(private api:ApiService, private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    id && this.api.getproductbyid(id).subscribe((res) => {
      this.productData = res;
      console.log(res)
    })
  }

  addToCart(productData: ProductModel) {
    this.showAdd = false;
    this.showRemove = true;
    this.api.addtocart(productData)
  }

  removeItem(productData: ProductModel) {
    this.showAdd = true;
    this.showRemove = false;
    this.api.removeItem(productData)
  }
}
