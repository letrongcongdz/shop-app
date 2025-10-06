import type { Product } from "../../entities/Product.ts";

export interface IProductRepository {
    createProduct(product: Product): Promise<Product>;
}