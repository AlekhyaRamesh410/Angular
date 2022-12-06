import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 //$auth= new Subject();//here $ means its holding object of observable(that is naming convention)
 $auth=new BehaviorSubject(this.checkLogin());

 constructor(private _router:Router) { }

 checkLogin(){
   //return true;
   return localStorage.getItem("isLoggedIn");
 }
 
 login(credentials:any){
  if(credentials.Email=="admin" && credentials.Password=="admin"){
   localStorage.setItem("isLoggedIn","true");
   this.$auth.next(this.checkLogin());
   this._router.navigate(['/items']);
   return true;
  }else{
    alert("Please Enter valid details!!!");
    return false;
  }
 }

 logout(){
   this.$auth.next("false");
   localStorage.removeItem("isLoggedIn");
   this._router.navigate(['/login']);
   
 }
}
