import { useAppStore } from "../Stores/useAppStore";
import type { drink } from "../Types";

type DrinkCardProps = {
  Drink: drink;
};

export default function DrinkCard({ Drink }: DrinkCardProps) {
  const { selectRecipe } = useAppStore();

  return (
    <div
      className="group border-4 border-orange-400 hover:border-orange-500 shadow-lg hover:shadow-xl rounded-4xl overflow-hidden cursor-pointer transition-all duration-300"
      onClick={() => selectRecipe(Drink.idDrink)}
    >
      {/* Imagen */}
      <div className="overflow-hidden aspect-square">
        <img
          src={Drink.strDrinkThumb}
          alt={`Imagen de ${Drink.strDrink}`}
          className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <h2 className="text-2xl font-black text-center truncate mx-4 mb-4">
          {Drink.strDrink}
        </h2>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            selectRecipe(Drink.idDrink);
          }}
          className="bg-orange-400 hover:bg-orange-500 active:scale-95 transition-all duration-300 cursor-pointer text-white uppercase font-bold rounded-3xl text-lg p-3 w-full tracking-wide"
        >
          Ver Receta
        </button>
      </div>
    </div>
  );
}
