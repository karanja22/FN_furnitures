import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  // Create a new product
  create(productData: Partial<Product>): Promise<Product> {
    const product = this.productsRepository.create(productData);
    return this.productsRepository.save(product);
  }

  // Find all products
  async findAll(): Promise<Product[]> {
    const products = await this.productsRepository.find();
    console.log(`Number of products found: ${products.length}`);
    return products;
  }

  // Find one product by ID
  async findOne(id: number): Promise<Product> {
    const product = await this.productsRepository.findOne({ where: { id } });
  
    if (!product) {
      throw new Error(`Product with ID ${id} not found`); // Or use a custom exception class
    }
  
    return product;
  }

  // Update a product
  async update(id: number, productData: Partial<Product>): Promise<Product> {
    await this.productsRepository.update(id, productData);
    return this.findOne(id);
  }

  // Delete a product
  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
