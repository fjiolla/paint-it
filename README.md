# 🎨 Paint It

<div align="center">

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Pick a color, click a shape, and bring a black-and-white drawing to life.**

[🌐 Live Demo](https://paint-it-six.vercel.app)

</div>

---

## ✨ About

Paint It is a simple, interactive coloring board built with React. It loads an
SVG illustration and lets you fill its individual regions with whatever color
you choose — like a digital coloring book. Click any path or circle in the
artwork and it instantly takes on the selected color.

---

## 🚀 Features

- 🎨 **Color palette** — choose from a set of predefined colors
- 🖱️ **Click to fill** — click any region of the SVG to color it
- ✅ **Selected color indicator** — the active color is highlighted in the palette
- 🔄 **Dynamic SVG loading** — the artwork is fetched and rendered at runtime
- ⚡ **Lightweight** — pure React, no heavy dependencies

---

## 🛠️ How It Works

1. The SVG file (`test.svg`) is fetched and injected into the page as inline markup.
2. The color palette is rendered from a list of colors defined in `ColorPalette`.
3. Clicking a palette swatch sets the active color.
4. Clicking any `path` or `circle` inside the SVG updates that element's
   `fill` to the currently selected color.

---

## 🧰 Tech Stack

- **React** — UI and state management (`useState`, `useEffect`, `useRef`)
- **Vite** — build tool and dev server
- **SVG** — the colorable artwork
- **Vercel** — deployment

---

## ⚙️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/fjiolla/paint-it.git
   cd paint-it
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 🎯 Usage

1. Open the app in your browser.
2. Pick a color from the palette.
3. Click on any region of the drawing to fill it.
4. Switch colors anytime and keep coloring!

---

## 🔗 Connect

Made with ❤️ by [Leena Shah](https://github.com/fjiolla) 
