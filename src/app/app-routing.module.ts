import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { OrderPageComponent } from './component/order-page/order-page.component';
import { CardPaymentComponent } from './component/card-payment/card-payment.component';
import { CardOrderComponent } from './component/card-order/card-order.component';

const routes: Routes = [
  {path:'',component:ProductViewComponent},
  {path:'product-detail/:productid',component:ProductDetailComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'order-page',component:OrderPageComponent},
  {path:'cardpay',component:CardPaymentComponent},
  {path:'cardorder',component:CardOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
