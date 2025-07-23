// src/app/sum/sum.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-sum',
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Sum</h2>
    <input [(ngModel)]="a" type="number" placeholder="A">
    +
    <input [(ngModel)]="b" type="number" placeholder="B">
    <button (click)="calc()">=</button>
    <p>Result: {{ result }}</p>
  `
})
export class Sum {
  a = 0;
  b = 0;
  result = 0;

  calc() {
    this.result = this.a + this.b;
  }
}
