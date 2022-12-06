import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemCategoryComponent } from './items-list/item-category/item-category.component';
import { ItemComponent } from './item/item.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

import { CreateItemComponent } from './create-item/create-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { ProvidersComponent } from './providers/providers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemsListComponent,
    ItemCategoryComponent,
    ItemComponent,
    UpdateItemComponent,
    ItemDetailsComponent,
    CreateItemComponent,
    NavbarComponent,
    ShopDetailsComponent,
    ConsumersComponent,
    ProvidersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
