import { useMemo } from "react";
import DrinkCard from "../Components/DrinkCard";
import { useAppStore } from "../Stores/useAppStore";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";

export default function FavoritesPage() {
  const { favorites } = useAppStore();

  const hasFavorites = useMemo(() => favorites.length > 0, [favorites]);

  return (
    <div className="container mx-auto px-8 py-12">
      {hasFavorites ? (
        <>
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="bg-red-50 p-3 rounded-2xl">
                <HeartIcon className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <h1 className="text-5xl font-extrabold tracking-tighter text-gray-900">
                  Favoritos
                </h1>
                <p className="text-gray-400 text-sm mt-0.5">
                  Tu colección personal de cócteles
                </p>
              </div>
            </div>
            <span className="bg-red-50 text-red-400 font-bold text-sm px-4 py-2 rounded-full">
              {favorites.length} Bebida{favorites.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
            {favorites.map((item) => (
              <DrinkCard key={item.idDrink} Drink={item} />
            ))}
          </div>
        </>
      ) : (
        /* Estado vacío */
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-red-50 rounded-full flex items-center justify-center">
              <HeartOutline className="w-16 h-16 text-red-200" />
            </div>
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white font-black text-sm">0</span>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
            Sin favoritos aún
          </h2>
          <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
            Explora las recetas y guarda las que más te gusten tocando el botón{" "}
            <HeartIcon className="w-4 h-4 text-red-400 inline" /> en cada cóctel
          </p>

          <div className="mt-8 flex gap-2 flex-wrap justify-center">
            {["Margarita", "Mojito", "Old Fashioned", "Negroni"].map((name) => (
              <span
                key={name}
                className="bg-orange-50 text-orange-400 text-sm font-semibold px-4 py-2 rounded-full border border-orange-100"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
