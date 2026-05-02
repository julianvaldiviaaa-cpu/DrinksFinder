# 🍹 DrinksFinder

> Search and generate cocktail recipes powered by AI — built with React, TypeScript and OpenRouter.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5-orange?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## ✨ Features

- 🔍 **Cocktail search** by ingredient and category using TheCocktailDB API
- ❤️ **Persistent favorites** saved to localStorage
- 🤖 **AI-powered recipe generation** — describe what you want and the AI crafts a unique recipe with real-time streaming
- 📱 **Fully responsive** with smooth animations and glassmorphism design
- 🔔 **Real-time notifications** for success and error feedback

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19 | UI and components |
| **TypeScript** | 6 | Static typing |
| **Tailwind CSS** | 4 | Styling and design |
| **Zustand** | 5 | Global state management with slices |
| **React Router** | 7 | Client-side navigation |
| **Headless UI** | 2 | Accessible modal and transitions |
| **Heroicons** | 2 | Icon library |
| **React Markdown** | 10 | AI output rendering with tables |
| **AI SDK (Vercel)** | 6 | Response streaming |
| **OpenRouter Provider** | 2 | AI model provider |
| **Axios** | 1 | HTTP requests |
| **Zod** | 4 | Schema validation |
| **Vite** | 8 | Build tool |

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