import { Component, OnInit } from '@angular/core';
import { Item } from '../item/item';
import { ItemService } from '../item/item.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  itemId!:number;
  item!: Item;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,private itemService:ItemService) { }

  ngOnInit() {
    this.item=new Item();
    this.itemId=this.route.snapshot.params['id'];
    console.log(this.itemId);
    this.itemService.getItem(this.itemId).subscribe(data => {
      console.log(data)
      this.item=data;
    });
  }
  
  updateCustomer(){
    this.itemService.updateItem(this.itemId,this.item)
    .subscribe(data =>console.log(data));
      this.item=new Item();
      this.gotoItemsList();
    }

    onSubmit(){
      this.submitted = true;
      this.updateCustomer();
      alert("item updated")
    }

   

  gotoItemsList(){
    this.router.navigate(['/items']);
  }

}
