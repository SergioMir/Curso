import { Injectable } from '@angular/core';
import { Item } from '../../model/Item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService {

  constructor() { }

  abstract getItems():Observable<Item[]>;
}
