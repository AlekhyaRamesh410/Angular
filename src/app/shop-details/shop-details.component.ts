import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {
shops!:Observable<any[]>;
  constructor(private itemService:ItemService,private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.shops = this.itemService.shopsList();
    console.log("totalShops:",this.shops);
  }
  shopsList(){
    this.itemService.shopsList().subscribe();
  }


}
