import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, type recipeSliceType } from "./recipeSlice";
import {
  type FavoritesSliceType,
  createFavoritesSlice,
} from "./favoritesSlice";
import {
  createNotificationsSlice,
  type notificationSliceType,
} from "./notificationSlice";
import { createAISlice, type AISlice } from "./AISlice";

export const useAppStore = create<
  recipeSliceType & FavoritesSliceType & notificationSliceType & AISlice
>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationsSlice(...a),
    ...createAISlice(...a),
  })),
);
