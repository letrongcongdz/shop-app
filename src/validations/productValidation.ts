import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string()
    .min(1, "Product name is required")
    .max(255, "Product name must be less than 255 characters"),

  price: z.preprocess(
    (val) => Number(val), // conve
    z.number()
      .positive("Price must be greater than 0")
      .max(99999999.99, "Price is too large")
  ),

  description: z.string()
    .max(1000, "Description must be less than 1000 characters")
    .optional()
    .or(z.literal("")),

  categoryId: z.preprocess(
    (val) => Number(val), // convert "1" -> 1
    z.number().int().positive("Category ID is required and must be positive")
  ),
});
