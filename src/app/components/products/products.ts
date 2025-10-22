import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from './products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.products$ = this.service.getProductos();
  }

  getProductoImage(name: string): string {
    const text = encodeURIComponent(name || 'Producto');
    return `https://placehold.co/400x300/7ab929/555555/png?text=img de ${text}`;
  }
}
