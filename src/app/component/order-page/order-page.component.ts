import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit{
  public Totalamount:number=0;
  constructor(private route:Router,private api:ApiService){}
  ngOnInit(): void {
   setTimeout(() => {
    this.route.navigate(["/"])
    this.api.removeallitems();
   },4000);
 // total amount coming from api
 this.Totalamount  = this.api.calculateprice();
  }

}
