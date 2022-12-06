import { Component, OnInit } from '@angular/core';
import { Item } from '../item/item';
import { ItemService } from '../item/item.service';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
submitted:boolean=false;
item!:Item;
itemId!:number;
  constructor(private itemService:ItemService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.item=new Item();
    this.itemId=this.route.snapshot.params['id'];
    console.log(this.itemId);
    this.itemService.getItem(this.itemId).subscribe(data => {
      console.log(data)
      this.item=data;
    });
  }
goToItems(){
    this.router.navigate(['/items']);
  }

}
