import { z } from 'zod';

export const ThemeSchema = z.object({
  isDark: z.boolean(),
});

export type Theme = z.infer<typeof ThemeSchema>;

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(['living-room', 'bedroom', 'dining', 'office', 'outdoor']),
  price: z.number(),
  description: z.string(),
  images: z.array(z.string()),
  features: z.array(z.string()),
  dimensions: z.object({
    width: z.number(),
    height: z.number(),
    depth: z.number(),
  }),
  inStock: z.boolean(),
  rating: z.number().min(0).max(5),
});

export type Product = z.infer<typeof ProductSchema>;

export const CartItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().min(1),
});

export type CartItem = z.infer<typeof CartItemSchema>;

export const CartSchema = z.object({
  items: z.array(CartItemSchema),
});

export type Cart = z.infer<typeof CartSchema>;