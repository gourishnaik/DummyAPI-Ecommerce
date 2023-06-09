import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productmodal';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  public showproducts:any=[]; 
  constructor(private api:ApiService){}
  ngOnInit(): void {
  this.api.Products().subscribe(res=>{
  this.showproducts = res;
  })
  }

  deleteitem(item:product){
  
    this.api.removeCartItem(item);
  }

}
