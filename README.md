# 🍹 DrinksFinder

> Search and generate cocktail recipes powered by AI — built with React, TypeScript and OpenRouter.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5-orange?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## ✨ Features

- 🔍 **Cocktail search** by ingredient and category using TheCocktailDB API
- ❤️ **Persistent favorites** saved to localStorage
- 🤖 **AI-powered recipe generation** — describe what you want and the AI crafts a unique recipe with real-time streaming
- 📱 **Fully responsive** with smooth animations and glassmorphism design
- 🔔 **Real-time notifications** for success and error feedback

---

## 🚀 Demo

![Demo](https://via.placeholder.com/900x500/f97316/ffffff?text=DrinksFinder)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI and components |
| **TypeScript** | Static typing |
| **Tailwind CSS v4** | Styling and design |
| **Zustand** | Global state management with slices |
| **React Router v7** | Client-side navigation |
| **Headless UI** | Accessible modal and transitions |
| **Heroicons** | Icon library |
| **React Markdown + remark-gfm** | AI output rendering with tables |
| **AI SDK (Vercel)** | Response streaming |
| **OpenRouter** | AI model provider |
| **TheCocktailDB API** | Cocktail database |

---

## 🤖 AI Generation

The generator uses **real-time streaming** to display the recipe as the AI writes it:

1. User describes their ideal drink
2. A request is sent to OpenRouter with a specialized bartender system prompt
3. Stream chunks are accumulated in the Zustand store
4. React Markdown renders the formatted output instantly

---

## 📄 License

MIT © [Julian Valdivia](https://github.com/julianvaldiviaaa-cpu)