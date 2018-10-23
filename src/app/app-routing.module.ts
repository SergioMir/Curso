import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { NewItemComponent } from './new-item/new-item.component';

const routes: Routes = [
  { path:"", redirectTo:"/items", pathMatch:"full"},
  { path:"items", component: ListComponent },
  { path:"newItems", component: NewItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
