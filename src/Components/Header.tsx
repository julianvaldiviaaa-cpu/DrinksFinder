import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { useLocation, NavLink } from "react-router-dom";
import { useAppStore } from "../Stores/useAppStore";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  const { fetchCategories, Categories, searchRecipes, showNotifaction } =
    useAppStore();

  useEffect(() => {
    fetchCategories();
  }, []);

  const [searchFilters, setSearchFilters] = useState({
    ingredient: "",
    category: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(searchFilters).includes("")) {
      showNotifaction({
        text: "Todos los Campos son Obligatorios!",
        error: true,
      });
      return;
    }

    searchRecipes(searchFilters);
  };

  return (
    <header
      className={
        isHome ? "bg-[url('/bg.jpg')] bg-center bg-cover" : "bg-slate-800"
      }
    >
      <div className="mx-auto container px-8 py-6">
        {/* Navbar */}
        <div className="flex justify-between items-center">
          <img src="/logo.svg" className="w-28" alt="COCKTAIL" />

          <nav className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-2xl px-2 py-2">
            {[
              { to: "/", label: "Inicio" },
              { to: "/favorites", label: "Favoritos" },
              { to: "/generate", label: "Generar con IA" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "bg-orange-400 text-white px-4 py-2 rounded-xl uppercase font-bold text-sm transition-all duration-200"
                    : "text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-xl uppercase font-bold text-sm transition-all duration-200"
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Search form */}
        {isHome && (
          <div className="flex justify-center mt-24 mb-16">
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-2/3 xl:w-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl space-y-5"
            >
              <div className="text-center mb-6">
                <h2 className="text-white text-3xl font-extrabold tracking-tight">
                  Encuentra tu cóctel
                </h2>
                <p className="text-white/70 text-sm mt-1">
                  Busca por ingrediente o categoría
                </p>
              </div>

              {/* Ingrediente */}
              <div className="space-y-2">
                <label
                  htmlFor="ingredient"
                  className="block text-white/90 uppercase font-bold text-xs tracking-widest"
                >
                  Ingrediente
                </label>
                <input
                  type="text"
                  name="ingredient"
                  id="ingredient"
                  className="w-full bg-white/20 hover:bg-white/30 focus:bg-white text-white focus:text-gray-800 placeholder-white/50 focus:placeholder-gray-400 p-3.5 rounded-xl outline-none border border-white/20 focus:border-orange-400 transition-all duration-200"
                  placeholder="Ej. Tequila, Vodka, Gin..."
                  onChange={handleChange}
                  value={searchFilters.ingredient}
                />
              </div>

              {/* Categoría */}
              <div className="space-y-2">
                <label
                  htmlFor="category"
                  className="block text-white/90 uppercase font-bold text-xs tracking-widest"
                >
                  Categoría
                </label>
                <select
                  name="category"
                  id="category"
                  className="w-full bg-white/20 hover:bg-white/30 focus:bg-white text-white focus:text-gray-800 p-3.5 rounded-xl outline-none border border-white/20 focus:border-orange-400 transition-all duration-200 appearance-none cursor-pointer"
                  onChange={handleChange}
                  value={searchFilters.category}
                >
                  <option value="" className="text-gray-800">
                    -- Seleccione --
                  </option>
                  {Categories.drinks.map((Category) => (
                    <option
                      className="text-gray-800"
                      value={Category.strCategory}
                      key={Category.strCategory}
                    >
                      {Category.strCategory}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-orange-400 hover:bg-orange-500 active:scale-95 text-white font-extrabold py-3.5 rounded-xl uppercase tracking-wide flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-orange-400/30 mt-2"
              >
                <MagnifyingGlassIcon className="w-5 h-5" />
                Buscar Recetas
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
