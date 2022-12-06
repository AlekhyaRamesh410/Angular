import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { LoginComponent } from './login/login.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { AuthGuard } from './auth-gurd.service';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'}, 
  {path:'items',component:ItemsListComponent,canActivate:[AuthGuard]},
  {path:'add',component:CreateItemComponent,canActivate:[AuthGuard]},
  {path:'update/:id',component:UpdateItemComponent,canActivate:[AuthGuard]},
 {path:'details/:id',component:ItemDetailsComponent,canActivate:[AuthGuard]},
 {path:'login',component:LoginComponent},
{path:'shops',component:ShopDetailsComponent,canActivate:[AuthGuard]}
// {path:'consumers',component:ConsumersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
