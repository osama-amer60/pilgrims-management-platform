# Pilgrims Management Platform

A modern, scalable SaaS platform for managing pilgrims, built with Vue 3, TypeScript, and a composable architecture designed for maintainability and extensibility.

## 🚀 Tech Stack

### Core Framework

- **Vue 3** - Progressive JavaScript framework with Composition API
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling for fast development

### State Management & Data Fetching

- **Pinia** - Intuitive state management for Vue
- **TanStack Query** - Powerful asynchronous state management
- **Axios** - Promise-based HTTP client

### UI & Styling

- **Tailwind CSS v4** - Utility-first CSS framework
- **TanStack Table** - Headless UI for building powerful tables

### Routing & Navigation

- **Vue Router** - Official router for Vue.js

### Development Tools

- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **Vitest** - Unit testing framework
- **Vue DevTools** - Browser extension for debugging

## 📁 Project Architecture

This project follows a **feature-based modular architecture** for scalability:

```
src/
├── api/                    # API configuration and base setup
│   └── client.ts           # Axios client configuration
├── assets/                 # Static assets (images, fonts, etc.)
├── components/             # Reusable UI components
│   ├── common/             # Common/shared components
│   │   ├── BaseBreadcrumb/ # Breadcrumb navigation component
│   │   ├── BaseButton/     # Button component
│   │   ├── BaseCard/       # Card component
│   │   ├── BaseInput/      # Input component
│   │   ├── BasePagination/ # Pagination component
│   │   └── BaseTable/      # Table component
│   └── layout/             # Layout-specific components
│       ├── AppHeader.vue   # Application header
│       └── AppSidebar/     # Application sidebar
├── config/                 # Global configuration files
├── layouts/                # Page layouts
│   └── AppLayout.vue       # Main application layout
├── modules/                # Feature modules
│   └── pilgrims/           # Pilgrims feature module
│       ├── composables/    # Feature-specific composables
│       ├── features/       # Feature components
│       │   ├── HeaderBar/  # Header bar feature
│       │   ├── PilgrimsTable/ # Pilgrims table feature
│       │   ├── StatisticCards/ # Statistics cards
│       │   └── TableBar/   # Table action bar
│       ├── services/       # Feature-specific API services
│       ├── types/          # Feature-specific TypeScript types
│       ├── views/          # Feature-specific views/pages
│       ├── routes.ts       # Feature routes
│       └── index.ts        # Feature module entry
├── plugins/                # Vue plugins
└── router/                 # Application routing

```

### Component Structure

Components follow a **separation of concerns pattern**:

- `.vue` - Template and component definition
- `.logic.ts` - Business logic and composables
- `.styles.ts` - Component-specific styles (when needed)

### Module Organization

Each feature module is self-contained with:

- **composables/** - Reusable composition functions
- **features/** - Feature-specific components
- **services/** - API service layer
- **types/** - TypeScript type definitions
- **views/** - Page-level components
- **routes.ts** - Module routing configuration

## ✨ Features

- 🎯 **Type-Safe Development** - Full TypeScript support
- 📊 **Advanced Table Management** - Sorting, filtering, and pagination with TanStack Table
- 🔄 **Efficient Data Fetching** - Caching and synchronization with TanStack Query
- 🎨 **Modern UI** - Tailwind CSS v4 for rapid styling
- 🧩 **Composable Architecture** - Reusable logic with Vue Composition API
- 📱 **Responsive Design** - Mobile-first approach
- ✅ **Code Quality** - ESLint + Prettier for consistent code style
- 🧪 **Unit Testing** - Vitest for reliable testing

## 🛠️ Development Setup

### Prerequisites

- Node.js: `^20.19.0 || >=22.12.0`
- npm or yarn

### Installation

```sh
npm install
```

### Development Server

Start the development server with hot-reload:

```sh
npm run dev
```

### Build for Production

Type-check, compile, and minify:

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

### Code Quality

Run ESLint with auto-fix:

```sh
npm run lint
```

Format code with Prettier:

```sh
npm run format
```

### Testing

Run unit tests with Vitest:

```sh
npm run test:unit
```

## 🔧 IDE Setup

### Recommended IDE

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

> **Note:** Disable Vetur if you have it installed, as it conflicts with Vue (Official).

### Browser Extensions

**Chromium-based browsers** (Chrome, Edge, Brave):

- [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Turn on Custom Object Formatter](http://bit.ly/object-formatters)

**Firefox:**

- [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
- [Turn on Custom Object Formatter](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## 📚 Additional Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Configuration Reference](https://vite.dev/config/)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [TanStack Table Docs](https://tanstack.com/table/latest)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)

## 📝 Type Support for `.vue` Imports

TypeScript cannot handle type information for `.vue` imports by default. This project uses `vue-tsc` for type checking and requires [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) in your editor to make the TypeScript language service aware of `.vue` types.

## 📄 License

Private project - All rights reserved.
