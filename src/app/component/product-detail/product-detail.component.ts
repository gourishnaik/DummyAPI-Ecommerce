import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productmodal';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  productdata:any|product[];
  constructor(private api:ApiService,private activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    let productid = this.activatedroute.snapshot.paramMap.get('productid');
   // console.log("product id is",productid)
   productid && this.api.getproductbyid(productid).subscribe((res)=>{
    this.productdata = res;
    console.log(res)
   })
  }

}
