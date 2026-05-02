import { type StateCreator } from "zustand";
import type { FavoritesSliceType } from "./favoritesSlice";

type Notification = {
  text: string;
  error: boolean;
  show: boolean;
};

export type notificationSliceType = {
  notification: Notification;
  showNotifaction: (payload: Pick<Notification, "text" | "error">) => void;
  closeNotification: () => void;
};

export const createNotificationsSlice: StateCreator<
  notificationSliceType & FavoritesSliceType,
  [],
  [],
  notificationSliceType
> = (set, get) => ({
  notification: {
    text: "",
    error: false,
    show: false,
  },
  showNotifaction: (payload) => {
    set({
      notification: {
        text: payload.text,
        error: payload.error,
        show: true,
      },
    });
    setTimeout(() => {
      get().closeNotification();
    }, 3000);
  },
  closeNotification: () => {
    set({
      notification: {
        text: "",
        error: false,
        show: false,
      },
    });
  },
});
