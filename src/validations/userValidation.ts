import { z } from "zod";

export const createUserSchema = z.object({
  fullName: z.string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters"),

  phoneNumber: z.string()
    .regex(/^[0-9]{10,15}$/, "Phone number must be 10-15 digits"),

  address: z.string()
    .min(5, "Address must be at least 5 characters")
    .max(255, "Address must be less than 255 characters"),

  password: z.string()
    .min(6, "Password must be at least 6 characters"),

  retypePassword: z.string()
    .min(6, "Password must be at least 6 characters"),

  isActive: z.boolean().optional().default(true),

  roleId: z.number()
});
