import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productmodal';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  public showproducts:any=[]; 
  public Totalamount:number=0;
  public addressform:boolean = false;
  myform:FormGroup | any;
  constructor(private api:ApiService){}
  ngOnInit(): void {
  this.api.Products().subscribe(res=>{
  this.showproducts = res;
  this.Totalamount  = this.api.calculateprice();
  console.log("total amount is ",this.Totalamount)
  })
     //form
     this.myform = new FormGroup({
      email: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
    })
 
  }

  deleteitem(item:product){
   this.api.removeCartItem(item);
  }
  emptycart(){
    this.api.removeallitems();
  }
  checkout(){
   this.addressform = true;
   this.myform.reset();
  }
  onSubmit(){
   this.myform.value;   
   console.log(this.myform.value)
  }
}
