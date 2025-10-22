import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Products } from './components/products/products';
import { Students } from './components/students/students';
import { MvcProject } from './components/mvc-project/mvc-project';
import { CreateProducts } from './components/create-products/create-products';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    App,
    Header,
    Products,
    Students,
    MvcProject,
    CreateProducts,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    CheckboxModule,
    ButtonModule
  ],
  providers: [MessageService,provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
