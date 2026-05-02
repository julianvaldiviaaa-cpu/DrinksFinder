import { useAppStore } from "../Stores/useAppStore";
import { useMemo } from "react";
import DrinkCard from "../Components/DrinkCard";
import { BeakerIcon } from "@heroicons/react/24/outline";

export default function IndexPage() {
  const { Drinks } = useAppStore();

  const hasDrinks = useMemo(() => Drinks.drinks.length > 0, [Drinks]);

  return (
    <div className="container mx-auto px-8 py-12">
      {hasDrinks ? (
        <>
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-5xl font-extrabold tracking-tighter text-gray-900">
              Recetas
            </h1>
            <span className="bg-orange-100 text-orange-600 font-bold text-sm px-4 py-2 rounded-full">
              {Drinks.drinks.length} resultado
              {Drinks.drinks.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
            {Drinks.drinks.map((Drink) => (
              <DrinkCard key={Drink.idDrink} Drink={Drink} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="bg-orange-50 rounded-3xl p-8 mb-6">
            <BeakerIcon className="w-16 h-16 text-orange-300 mx-auto" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
            No hay resultados aún
          </h2>
          <p className="text-gray-400 text-lg max-w-sm">
            Usa los filtros del buscador para encontrar tu cóctel perfecto
          </p>
        </div>
      )}
    </div>
  );
}
