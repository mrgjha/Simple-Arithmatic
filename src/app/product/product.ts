// src/app/product/product.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Product</h2>
    <input [(ngModel)]="x" type="number" placeholder="X">
    ×
    <input [(ngModel)]="y" type="number" placeholder="Y">
    <button (click)="calc()">=</button>
    <p>Result: {{ result }}</p>
  `
})
export class Product {
  x = 0;
  y = 0;
  result = 0;

  calc() {
    this.result = this.x * this.y;
  }
}
