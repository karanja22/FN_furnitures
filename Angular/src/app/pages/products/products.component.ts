import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';


@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAll().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.error('Error loading products', err),
    });
  }

  

}
