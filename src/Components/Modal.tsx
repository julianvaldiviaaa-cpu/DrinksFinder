import { Dialog, Transition } from "@headlessui/react";
import { Fragment, type JSX } from "react";
import { XMarkIcon, HeartIcon } from "@heroicons/react/24/solid";
import { useAppStore } from "../Stores/useAppStore";
import type { Recipe } from "../Types";

export default function Modal() {
  const {
    Modal,
    closeModal,
    SelectedRecipe,
    handleClickFavorite,
    favoriteExist,
  } = useAppStore();

  const isFavorite = favoriteExist(SelectedRecipe.idDrink);

  const renderIngredients = () => {
    const ingredients: JSX.Element[] = [];
    for (let i = 1; i <= 6; i++) {
      const Ingredient = SelectedRecipe[`strIngredient${i}` as keyof Recipe];
      const Measure = SelectedRecipe[`strMeasure${i}` as keyof Recipe];

      if (Ingredient && Measure) {
        ingredients.push(
          <li
            key={i}
            className="flex items-center justify-between py-2 border-b border-orange-100 last:border-0"
          >
            <span className="font-semibold text-gray-800">{Ingredient}</span>
            <span className="text-sm bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full">
              {Measure}
            </span>
          </li>,
        );
      }
    }
    return ingredients;
  };

  return (
    <Transition appear show={Modal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto font-suisse-intl">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl">
                {/* Imagen hero */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={SelectedRecipe.strDrinkThumb}
                    alt={SelectedRecipe.strDrink}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Botón cerrar */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 transition-all duration-200"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>

                  {/* Título sobre la imagen */}
                  <Dialog.Title className="absolute bottom-4 font-suisse-intl left-6 right-6 text-white text-3xl lg:text-5xl font-extrabold drop-shadow-lg">
                    {SelectedRecipe.strDrink}
                  </Dialog.Title>
                </div>

                {/* Contenido */}
                <div className="p-6 space-y-6">
                  {/* Ingredientes */}
                  <div>
                    <h3 className="text-lg font-extrabold text-gray-900 mb-3 flex items-center gap-2 font-suisse-intl-regular">
                      <span className="w-1 h-5 bg-orange-400 rounded-full inline-block" />
                      Ingredientes y Cantidades:
                    </h3>
                    <ul className="divide-y divide-orange-50">
                      {renderIngredients()}
                    </ul>
                  </div>

                  {/* Instrucciones */}
                  <div>
                    <h3 className="text-lg font-extrabold text-gray-900 mb-3 flex items-center gap-2 font-suisse-intl-regular">
                      <span className="w-1 h-5 bg-orange-400 rounded-full inline-block" />
                      Instrucciones
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {SelectedRecipe.strInstructions}
                    </p>
                  </div>

                  {/* Botones */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="flex-1 py-3 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold uppercase tracking-wide hover:bg-gray-50 active:scale-95 transition-all duration-200"
                    >
                      Cerrar
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        handleClickFavorite(SelectedRecipe);
                        closeModal();
                      }}
                      className={`flex-1 py-3 rounded-2xl font-bold uppercase tracking-wide flex items-center justify-center gap-1.5 active:scale-95 transition-all duration-200 ${
                        isFavorite
                          ? "bg-red-500 hover:bg-red-600 text-white"
                          : "bg-orange-400 hover:bg-orange-500 text-white"
                      }`}
                    >
                      <HeartIcon className="w-4 h-4 shrink-0" />
                      <span className="hidden sm:inline">
                        {isFavorite ? "Eliminar Favorito" : "Agregar Favorito"}
                      </span>
                      <span className="sm:hidden">
                        {isFavorite ? "Eliminar" : "Agregar"}
                      </span>
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
