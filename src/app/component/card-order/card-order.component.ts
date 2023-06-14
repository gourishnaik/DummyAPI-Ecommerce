import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.css']
})
export class CardOrderComponent implements OnInit{
  constructor(private router :Router,private api:ApiService){}
ngOnInit(): void {
  setTimeout(() => {
    this.router.navigate(["/"]);
    this.api.removeallitems();
  }, 4000);
    //getting item from localstorage
      let localdata = localStorage.getItem('ecomdata')
      this.userdata = localdata;
      this.username = JSON.parse(this.userdata)
}
}
