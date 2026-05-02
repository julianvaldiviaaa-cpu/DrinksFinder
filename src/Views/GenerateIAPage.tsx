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
    <div className="max-w-4xl mx-auto px-4 py-10 font-suisse-intl">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-4">
          <SparklesIcon className="w-8 h-8 text-orange-500" />
        </div>
        <h1 className="text-5xl font-extrabold text-gray-900">
          Generar Receta con IA
        </h1>
        <p className="text-gray-500 mt-3 text-lg">
          Describe los ingredientes que tienes y la IA creará una receta única
          para ti
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-3 bg-white border-2 border-orange-200 focus-within:border-orange-400 rounded-2xl px-4 py-3 shadow-sm transition-all duration-200">
          <input
            name="prompt"
            id="prompt"
            disabled={isGenerating}
            className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-base disabled:opacity-50"
            placeholder="Ej. Bebida con Tequila y Fresa..."
          />
          <button
            type="submit"
            aria-label="Enviar"
            disabled={isGenerating}
            className="flex-shrink-0 bg-orange-400 hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl p-2.5 transition-all duration-200 active:scale-95"
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </div>
      </form>

      {/* Generando */}
      {isGenerating && (
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:0ms]" />
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:150ms]" />
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:300ms]" />
          </div>
          <p className="text-gray-500 font-medium">
            La IA está creando tu receta...
          </p>
        </div>
      )}

      {/* Resultado */}
      {recipe && (
        <div className="mt-10 bg-white border border-orange-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="bg-orange-400 px-6 py-4 flex items-center gap-2">
            <SparklesIcon className="w-5 h-5 text-white" />
            <span className="text-white font-bold uppercase tracking-wide text-sm">
              Receta generada
            </span>
          </div>
          <div className="p-6 prose prose-slate max-w-none prose-headings:text-orange-500 prose-strong:text-gray-800">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{recipe}</ReactMarkdown>
          </div>
        </div>
      )}

      {/* Estado vacío */}
      {!recipe && !isGenerating && (
        <div className="mt-16 text-center text-gray-300">
          <SparklesIcon className="w-16 h-16 mx-auto mb-4" />
          <p className="text-lg font-medium">Tu receta aparecerá aquí</p>
        </div>
      )}
    </div>
  );
}
