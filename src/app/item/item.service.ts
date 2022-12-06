import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl="http://localhost:9092/app/";

  constructor(private _http:HttpClient) { }

  getItem(studentId: number): Observable<any>{
    return this._http.get(`${this.baseUrl+"itemDetails"}/${studentId}`);
  }

  getAllItems(): Observable<any>{
    return this._http.get(`${this.baseUrl+"items"}`);
  }

  createItem(item : object): Observable<any>{
    return this._http.post(`${this.baseUrl+"item"}`,item);
  }

  updateItem(itemNo: number, value: any): Observable<Object> {
    return this._http.put(`${this.baseUrl+"item"}/${itemNo}`, value);
  }

  deleteItem(categoryId: number): Observable<any> {
    return this._http.delete(`${this.baseUrl+"item"}/${categoryId}`, { responseType: 'text' });
  }
  shopsList(): Observable<any>{
    return this._http.get(`${this.baseUrl+"shops"}`);

  }
  consumersList(): Observable<any>{
    return this._http.get(`${this.baseUrl+"consumers"}`);

  }
}
