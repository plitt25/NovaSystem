import { Component } from '@angular/core';

@Component({
  selector: 'app-mvc-project',
  standalone: false,
  templateUrl: './mvc-project.html',
  styleUrl: './mvc-project.css'
})
export class MvcProject {
 tecnologias = [
    { nombre: 'Angular', descripcion: 'Framework frontend para el desarrollo de interfaces dinámicas y modulares.' },
    { nombre: 'NestJS', descripcion: 'Framework backend basado en Node.js que implementa el patrón MVC y arquitectura modular.' },
    { nombre: 'PostgreSQL', descripcion: 'Sistema de gestión de bases de datos relacional y potente, utilizado para el almacenamiento de datos.' },
    { nombre: 'TypeScript', descripcion: 'Lenguaje fuertemente tipado que mejora la mantenibilidad del código en todo el proyecto.' },
    { nombre: 'Bootstrap', descripcion: 'Biblioteca CSS para construir interfaces responsivas y elegantes.' }
  ];
}
