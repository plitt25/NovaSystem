import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  price: number;
  porcentPromo: string;
  promo: string;
  createdAt: string;

}

@Injectable({ providedIn: 'root' })
export class CreateProductService {
  private apiUrl = 'https://products-api-3rso.onrender.com/products';

  constructor(private http: HttpClient) {}

  postProductos(product:Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
}
