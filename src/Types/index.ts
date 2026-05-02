import { z } from "zod";
import {
  CategoriesAPIResponseSchema,
  DrinkAPIResponseSchema,
  DrinksAPIResponseSchema,
  RecipeAPIResponseSchema,
  SearchFiltersSchema,
} from "../Utils/RecipesSchema";

export type categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type searchFilters = z.infer<typeof SearchFiltersSchema>;
export type drinks = z.infer<typeof DrinksAPIResponseSchema>;
export type drink = z.infer<typeof DrinkAPIResponseSchema>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;
