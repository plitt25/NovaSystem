import { MessageService } from 'primeng/api';
import { Component } from '@angular/core';
import { CreateProductService } from './create-products.service';

@Component({
  selector: 'app-create-products',
  standalone: false,
  templateUrl: './create-products.html',
  styleUrl: './create-products.css',
})
export class CreateProducts {
  producto: any = {
    name: '',
    price: 0,
    porcentPromo: 0,
    promo: false,
  };
  mensaje: string | null = null;
  tipoMensaje: 'success' | 'danger' | null = null;
  constructor(
    public service: CreateProductService,
    public messageService: MessageService
  ) {}
  createProducts() {
    if (!this.producto.name || this.producto.price <= 0) {
      this.mostrarMensaje(
        'Por favor, completa todos los campos correctamente.',
        'danger'
      );
      return;
    }

    this.service.postProductos(this.producto).subscribe({
      next: () => {
        this.mostrarMensaje('✅ Producto creado correctamente.', 'success');
        this.producto = { name: '', price: 0, porcentPromo: 0, promo: false };
      },
      error: (err) => {
        console.error('❌ Error al crear producto:', err);
        this.mostrarMensaje('❌ Error al crear el producto.', 'danger');
      },
    });
  }

  mostrarMensaje(texto: string, tipo: 'success' | 'danger') {
    this.mensaje = texto;
    this.tipoMensaje = tipo;

    setTimeout(() => {
      this.mensaje = null;
      this.tipoMensaje = null;
    }, 3000);
  }
  onPromoChange() {
    if (!this.producto.promo) {
      this.producto.porcentPromo = null;
    }
  }
}
