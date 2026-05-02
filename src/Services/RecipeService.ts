import axios from "axios";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponseSchema,
  RecipeAPIResponseSchema,
} from "../Utils/RecipesSchema";
import type { drink, searchFilters } from "../Types";

export async function GETCategories() {
  const URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  const { data } = await axios(URL);
  const result = CategoriesAPIResponseSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
}

export async function GETRecipes(searchFilters: searchFilters) {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilters.category}&i=${searchFilters.ingredient}`;
  // `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=beer&i=coco
  const { data } = await axios(URL);
  const result = DrinksAPIResponseSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
}

export async function GETRecipeByID(id: drink["idDrink"]) {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data } = await axios(URL);
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
  if (result.success) {
    return result.data;
  }
}
