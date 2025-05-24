<h1 align="center">Welcome to @tommyzki/ui-core 👋</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/@tommyzki/ui-core" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@tommyzki/ui-core.svg">
  </a>
  <a href="https://github.com/tommyzki/tommyzki-ui" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/tommyzki/ui/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/tommyzki/tommyzki-ui/blob/main/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/npm/l/@tommyzki/ui-core.svg" />
  </a>
</p>

> `@tommyzki/ui-core` is a powerful library of reusable Web Components built with Stencil for modern frontend development.

---

## ✨ Features

- ✨ Tiny, optimized Web Components powered by [Stencil](https://stenciljs.com/)
- ⚡ No build tools or bundlers required
- 🚀 Lazy-loading out of the box
- 🎨 Customizable via CSS Variables
- 🧩 Framework-agnostic & interoperable
- 📦 Ready to integrate with Angular, React, Vue

---

## 📦 Install

```bash
npm install @tommyzki/ui-core
```

---

## 🚀 Usage

### Plain JavaScript / HTML

You can load the components directly in your HTML via CDN:

```html
<html>
  <head>
    <script src="https://unpkg.com/@tommyzki/ui-core@0.2.3/dist/tommyzki/tommyzki.esm.js"></script>
  </head>
  <body>
    <tommyzki-button></tommyzki-button>
  </body>
</html>
```

### ES Modules

If you prefer using modules in modern browsers:

```html
<html>
  <head>
    <script type="module">
      import { defineCustomElements } from 'https://unpkg.com/@tommyzki/ui-core@latest/loader';
      defineCustomElements();
    </script>
  </head>
  <body>
    <tommyzki-button></tommyzki-button>
  </body>
</html>
```

---

## 🧩 Framework Bindings

Use `@tommyzki/ui-core` directly, or take advantage of framework-specific wrappers:

- [@tommyzki/ui-angular](https://www.npmjs.com/package/@tommyzki/ui-angular)
- [@tommyzki/ui-react](https://www.npmjs.com/package/@tommyzki/ui-react)
- [@tommyzki/ui-vue](https://www.npmjs.com/package/@tommyzki/ui-vue)

---

## 👤 Author

**Tommyzki**

- GitHub: [@tommyzki](https://github.com/tommyzki)
- LinkedIn: [Tommy (LinkedIn)](https://linkedin.com/in/tommyzki)
- Website: [https://tommyzki.github.io/tommyzki-ui](https://tommyzki.github.io/tommyzki-ui)

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!  
Feel free to fork, submit PRs, or open issues.

---

## ⭐️ Show your support

Give a ⭐️ if you like this project and find it useful!

---

## 📝 License

Copyright © 2025 [Tommy](https://github.com/tommyzki)  
This project is [MIT](https://github.com/tommyzki/tommyzki-ui/blob/main/LICENSE) licensed.
