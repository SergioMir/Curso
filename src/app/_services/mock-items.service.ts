import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { Observable } from 'rxjs';
import { Item } from '../../model/Item';
@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractService{
  items:Item[];
  
  constructor() {
    super();
    this.items = [
      new Item("Comprar carne"),
      new Item("Comprar carbon"),
      new Item("Comprar gaseosa")
    ]};
    
  getItems():Observable<Item[]> {
    return new Observable ((resolve) => {
      resolve.next(this.items);
      resolve.complete();
    });
  }
  remove(items: Item):Observable<Item[]>  {
    return new Observable ((resolve) => {
    this.items = this.items.filter(it => it !== items);
    resolve.next(this.items);
    resolve.complete();
  });
}
  addItem(items: Item):Observable<Item[]>  {
  return new Observable ((resolve) => {
  this.items.push(items);
  resolve.next(this.items);
  resolve.complete();
  });
}
}
