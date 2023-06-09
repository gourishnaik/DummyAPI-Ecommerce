import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from '../component/product-view/productmodal';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public cartItemList:any=[]
  public productList= new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }

  getproduct(){
    return this.http.get<product[]>("https://dummyjson.com/products")
  }

  getproductbyid(id:string){
   return this.http.get("https://dummyjson.com/products/"+id)
  }

   
// add to cart

addtoCart(data:product){
  this.cartItemList.push(data);            // product will be pushed inside it
  this.productList.next(this.cartItemList);   // next means it will get passed whenever it is been called
  console.log(this.cartItemList)           // to check data is goingtocart
  }

  Products(){
    return this.productList.asObservable();
    
    }


    removeCartItem(data:product){         //to remove single item in cart or delete
      this.cartItemList.map((a:product, index:product)=>{
         if(data.id ===a.id)                 //if product id matches the id which we have then removeid
          this.cartItemList.splice(index,1)   // we have to remove one item from list splice is used to delete or add new element
     
      })
      this.productList.next(this.cartItemList); // on delete item cart must be updated
      }

   
      
}
