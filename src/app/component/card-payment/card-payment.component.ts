import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css']
})
export class CardPaymentComponent implements OnInit{
  constructor(private api:ApiService){}
  public finalamount: number = 0;
  carddetails:boolean = true;
  otpdetails:boolean = false;
  cardform: FormGroup | any;
  otpform:FormGroup|any;
  ngOnInit(): void {
    this.finalamount = this.api.recievefinalamount()
     //form
     this.cardform = new FormGroup({
      cardname: new FormControl('', Validators.required),
      expirymonth: new FormControl('', Validators.required),
      expiryyear: new FormControl('', Validators.required),
      cvv: new FormControl('', Validators.required),
    })
    this.otpform = new FormGroup({
      otp: new FormControl('', Validators.required),
    })
  }
pay(){
  this.otpdetails = true;
  this.carddetails = false;

}
cancel(){
  this.carddetails = true;
  this.otpdetails = false;
}
}
