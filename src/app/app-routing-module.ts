import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MvcProject } from './components/mvc-project/mvc-project';
import { Students } from './components/students/students';
import { Products } from './components/products/products';
import { CreateProducts } from './components/create-products/create-products';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: Products },
  { path: 'students', component: Students },
  { path: 'mvc', component: MvcProject },
  { path: 'new', component: CreateProducts },
  { path: '**', redirectTo: 'products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
