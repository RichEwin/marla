# 📦 marla

A tiny, headless UI library designed for flexibility and composability. Marla gives you unstyled, accessible components you can style however you like—no design systems attached.

---

## ✨ Features

- 🧩 Headless – Bring your own styles and design system.
- ⚛️ Framework-friendly – Built with React, works anywhere.
- 🎯 Type-safe – Fully typed with excellent editor support.
- 🎨 Style however you want – Use Tailwind, CSS Modules, or plain CSS.
- 🧱 Composable primitives – Build complex UIs from simple parts.

## 💡 Why?

UI libraries often come with strong opinions about styles. Marla doesn’t. It’s here for when you want just the logic and accessibility of components—without the CSS. Whether you're prototyping or building your own design system, Marla gets out of your way.

---

## 📦 Installation

```bash
npm install @rewin/marla
```

## 🧪 Example Usage

```
import { Button } from "@rewin/marla";

export function App() {
  return (
    <div>
      <Button>Click!</Button>
    </div>
  );
}
```

## 🛡️ Gotchas

Components are unstyled by default. You must provide styles.

Marla is headless—it focuses on logic and behavior, not visuals.

Works best when paired with your own design tokens or utility classes.

## 🪪 License

MIT — Use freely
