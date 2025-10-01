import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string()
  .min(2, "Category name must be at least 2 characters")
  .max(100, "The name is too long"),
});

export const updateCategorySchema = z.object({
  name: z.string()
  .min(2, "Category name must be at least 2 characters")
  .max(100, "The name is too long"),
});
