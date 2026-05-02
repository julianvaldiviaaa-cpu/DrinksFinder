import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./Views/IndexPage";
const FavoritesPage = lazy(() => import("./Views/FavoritesPage"));
const GenerateIAPage = lazy(() => import("./Views/GenerateIAPage"));
import Layout from "./Layouts/Layout";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route
            path="/favorites"
            element={
              <Suspense fallback="Cargando...">
                <FavoritesPage />
              </Suspense>
            }
          />
          <Route
            path="/generate"
            element={
              <Suspense fallback="Cargando...">
                <GenerateIAPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
