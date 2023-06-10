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
  public Totalamount:number=0;
  constructor(private api:ApiService){}
  ngOnInit(): void {
  this.api.Products().subscribe(res=>{
  this.showproducts = res;
  this.Totalamount  = this.api.calculateprice();
  console.log("total amount is ",this.Totalamount)
  })
  }

  deleteitem(item:product){
  
    this.api.removeCartItem(item);
  }

  emptycart(){
    this.api.removeallitems();

  }

}
