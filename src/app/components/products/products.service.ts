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
export class ProductService {
  private UNSPLASH_API = 'https://api.unsplash.com/search/photos';
  private ACCESS_KEY = 'TU_ACCESS_KEY_AQUI';
  private apiUrl = 'https://products-api-3rso.onrender.com/products';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  
  
}
