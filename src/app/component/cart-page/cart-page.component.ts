import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productmodal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  showproduct: any = [];
  public totalamount: number = 0;
  public taxamount: number = 0;
  public finalamount: number = 0;
  public addressform = false;
  public sentamount: number = 0;
  myform: FormGroup | any;
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.api.products().subscribe(res => {
      this.showproduct = res;
      this.totalamount = this.api.calculateprice();
      console.log("total amt is", this.totalamount)
      // calculation with tax 15 percent
      this.taxamount = this.totalamount / 100 * 15;
      console.log(this.taxamount, "is tax amount")

      this.finalamount = this.taxamount + this.totalamount;
      //Sending final amount to order component 
      this.sentamount = this.finalamount
      this.api.sendfinalamount(this.sentamount);
    })
    //form
    this.myform = new FormGroup({
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    })
  }
  deleteitem(item: product) {
    this.api.removecartitem(item)
  }
  Empty() {
    this.api.removeallitems();
  }
  cancel() {
    this.addressform = false;
    this.myform.reset();
    localStorage.removeItem('ecomdata')
  }
  onsubmit() {
    this.myform.value;
    console.log(this.myform.value)
    localStorage.setItem('ecomdata', JSON.stringify(this.myform.value.name));
    //this.myform.reset();
  }
  onlinepay(){
    localStorage.setItem('ecomdata', JSON.stringify(this.myform.value.name));
  }
}
