import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../item/item';
import { ItemService } from '../item/item.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html'
})
export class ItemsListComponent implements OnInit {
items!:Observable<Item[]>;


  constructor(private itemService : ItemService ,private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.items = this.itemService.getAllItems();
    console.log("total:",this.items);
  }
  deleteItem(id: number) {
    if (confirm("are you sure you want to delete Press ok button!")) {
      this.itemService.deleteItem(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          });
        alert("item deleted successfully");
        
    } else {
          alert("Unable to delete item due to you selected cancel button!");
    }
  }

  itemDetails(id: number){
    this.router.navigate(['details',id])
  }
  
  updateItem(id: number){
    this.router.navigate(['update',id]);
  
  }

  createItem(){
    this.router.navigate(['add']);
  }

}
