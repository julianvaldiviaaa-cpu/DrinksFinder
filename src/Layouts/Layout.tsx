import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Modal from "../Components/Modal";
import { useEffect } from "react";
import { useAppStore } from "../Stores/useAppStore";
import Notification from "../Components/Notifications";

export default function Layout() {
  const { loadFromStorage } = useAppStore();
  useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <>
      <Header />

      <main className="container px-16 py-16">
        <Outlet />
      </main>

      <Modal />
      <Notification />
    </>
  );
}
