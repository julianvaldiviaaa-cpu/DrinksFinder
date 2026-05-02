import { type StateCreator } from "zustand";
import type { Recipe } from "../Types";
import {
  createNotificationsSlice,
  type notificationSliceType,
} from "./notificationSlice";

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoriteExist: (id: Recipe["idDrink"]) => boolean;
  loadFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<
  FavoritesSliceType & notificationSliceType,
  [],
  [],
  FavoritesSliceType
> = (set, get, api) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (get().favoriteExist(recipe.idDrink)) {
      set((state) => ({
        favorites: state.favorites.filter(
          (favorite) => favorite.idDrink !== recipe.idDrink,
        ),
      }));
      createNotificationsSlice(set, get, api).showNotifaction({
        text: "Se Elimino de Favoritos",
        error: false,
      });
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));
      createNotificationsSlice(set, get, api).showNotifaction({
        text: "Se Agrego a Favoritos",
        error: false,
      });
    }
    localStorage.setItem("Favorites", JSON.stringify(get().favorites));
  },
  favoriteExist: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },
  loadFromStorage: () => {
    const localStorageFavorites = localStorage.getItem("Favorites");
    if (localStorageFavorites) {
      set({
        favorites: JSON.parse(localStorageFavorites),
      });
    }
  },
});
