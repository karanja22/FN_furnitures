import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  create(productData: Partial<Product>): Promise<Product> {
    const product = this.productsRepository.create(productData);
    return this.productsRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    const products = await this.productsRepository.find();
    console.log(`Number of products found: ${products.length}`);
    return products;
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productsRepository.findOne({ where: { id } });
  
    if (!product) {
      throw new Error(`Product with ID ${id} not found`); 
    }
  
    return product;
  }

  async findByCategory(category: "home" | "office"): Promise<Product[]> {
    return this.productsRepository.find({ where: { category } });
  }
  

  async update(id: number, productData: Partial<Product>): Promise<Product> {
    await this.productsRepository.update(id, productData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
