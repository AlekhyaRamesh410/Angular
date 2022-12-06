import { Component, OnInit } from '@angular/core';
import { Item } from '../item/item';
import { ItemService } from '../item/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
item:Item=new Item();
submitted:boolean=false;

  constructor(private itemService:ItemService,private router:Router) { }

  ngOnInit(): void {
  }
save(){
  this.itemService.createItem(this.item)
  .subscribe(data=>console.log(data));
  this.item=new Item();
  this.gotoItemsList();
  }

 

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoItemsList(){
    this.router.navigate(['/items']);
  }
}


