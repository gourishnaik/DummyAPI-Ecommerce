import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { HeaderComponent } from './component/header/header.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderPageComponent } from './component/order-page/order-page.component';
import { CardPaymentComponent } from './component/card-payment/card-payment.component';
import { CardOrderComponent } from './component/card-order/card-order.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent,
    ProductDetailComponent,
    HeaderComponent,
    CartPageComponent,
    OrderPageComponent,
    CardPaymentComponent,
    CardOrderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
