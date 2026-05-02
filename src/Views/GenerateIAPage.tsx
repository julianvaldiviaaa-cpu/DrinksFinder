import type React from "react";
import { useAppStore } from "../Stores/useAppStore";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SparklesIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function GenerateAI() {
  const { showNotifaction, generateRecipe, recipe, isGenerating } =
    useAppStore();

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const prompt = form.get("prompt") as string;

    if (prompt.trim() === "") {
      showNotifaction({
        text: "La busqueda no puede ir vacia.",
        error: true,
      });
      return;
    }

    await generateRecipe(prompt);
  };

  return (
    <div className="w-full sm:max-w-4xl sm:mx-auto px-1 sm:px-6 py-6 sm:py-10 font-suisse-intl">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-2xl mb-4">
          <SparklesIcon className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
          Generar Receta con IA
        </h1>
        <p className="text-gray-500 mt-2 sm:mt-3 text-base sm:text-lg px-2">
          Describe los ingredientes que tienes y la IA creará una receta única
          para ti
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-2 sm:gap-3 bg-white border-2 border-orange-200 focus-within:border-orange-400 rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm transition-all duration-200">
          <input
            name="prompt"
            id="prompt"
            disabled={isGenerating}
            className="flex-1 min-w-0 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm sm:text-base disabled:opacity-50"
            placeholder="Ej. Bebida con Tequila y Fresa..."
          />
          <button
            type="submit"
            aria-label="Enviar"
            disabled={isGenerating}
            className="flex-shrink-0 bg-orange-400 hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl p-2 sm:p-2.5 transition-all duration-200 active:scale-95"
          >
            <PaperAirplaneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </form>

      {/* Generando */}
      {isGenerating && (
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:0ms]" />
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:150ms]" />
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:300ms]" />
          </div>
          <p className="text-gray-500 font-medium text-sm sm:text-base">
            La IA está creando tu receta...
          </p>
        </div>
      )}

      {/* Resultado */}
      {recipe && (
        <div className="mt-6 sm:mt-10 bg-white border border-orange-100 rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden">
          <div className="bg-orange-400 px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2">
            <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white font-bold uppercase tracking-wide text-xs sm:text-sm">
              Receta generada
            </span>
          </div>
          <div
            className="p-4 sm:p-6
            prose prose-sm sm:prose-base prose-slate max-w-none
            prose-headings:text-orange-500
            prose-headings:text-xl
            prose-strong:text-gray-800
            prose-p:text-sm prose-p:leading-relaxed prose-p:text-gray-700
            prose-li:text-sm prose-li:text-gray-700
            prose-table:text-xs prose-table:w-full
            prose-td:px-2 prose-td:py-1
            prose-th:px-2 prose-th:py-1 prose-th:text-orange-500"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{recipe}</ReactMarkdown>
          </div>
        </div>
      )}

      {/* Estado vacío */}
      {!recipe && !isGenerating && (
        <div className="mt-12 sm:mt-16 text-center text-gray-300">
          <SparklesIcon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
          <p className="text-base sm:text-lg font-medium">
            Tu receta aparecerá aquí
          </p>
        </div>
      )}
    </div>
  );
}
