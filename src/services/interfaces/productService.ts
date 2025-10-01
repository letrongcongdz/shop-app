import type { Product } from "../../entities/Product.ts";

export interface IProductService {
    findAll(): Promise<Product[]>;
    findProductById(id: number): Promise<Product>;
    createProduct(product: Omit<Product, "id">): Promise<Product>;
    updateProduct(id: number, product: Product): Promise<Product>;
    deleteProduct(id: number): Promise<void>;
}