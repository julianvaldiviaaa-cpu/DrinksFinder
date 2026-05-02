import type { StateCreator } from "zustand";
import {
  GETCategories,
  GETRecipeByID,
  GETRecipes,
} from "../Services/RecipeService";
import type {
  categories,
  drink,
  drinks,
  Recipe,
  searchFilters,
} from "../Types";

export type recipeSliceType = {
  Categories: categories;
  Drinks: drinks;
  SelectedRecipe: Recipe;
  Modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilters: searchFilters) => Promise<void>;
  selectRecipe: (id: drink["idDrink"]) => Promise<void>;
  closeModal: () => void;
};

export const createRecipeSlice: StateCreator<recipeSliceType> = (set) => ({
  Categories: {
    drinks: [],
  },
  Drinks: {
    drinks: [],
  },
  SelectedRecipe: {} as Recipe,
  Modal: false,
  fetchCategories: async () => {
    const Categories = await GETCategories();
    set({ Categories });
  },
  searchRecipes: async (searchFilters) => {
    const Drinks = await GETRecipes(searchFilters);
    set({ Drinks });
  },
  selectRecipe: async (id) => {
    const SelectedRecipe = await GETRecipeByID(id);
    set({ SelectedRecipe, Modal: true });
  },
  closeModal: () => {
    set({
      Modal: false,
      SelectedRecipe: {} as Recipe,
    });
  },
});
