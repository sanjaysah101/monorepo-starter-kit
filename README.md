# Monorepo Starter Kit

A comprehensive monorepo starter kit built with Turborepo, Next.js, and shadcn/ui. This template provides a solid foundation for building full-stack applications with a shared UI library, ESLint and TypeScript configurations.

## ✨ Features

- **Turborepo**: High-performance build system for JavaScript and TypeScript codebases.
- **Next.js**: The React framework for production.
- **shadcn/ui**: Beautifully designed components that you can copy and paste into your apps.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: Static type checking for JavaScript.
- **ESLint & Prettier**: For consistent code style and quality.
- **Shared Configurations**: Centralized ESLint and TypeScript configurations for all packages.

## 🚀 Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/monorepo-starter-kit.git
    cd monorepo-starter-kit
    ```

2. **Install dependencies:**

    This project uses `pnpm` as the package manager.

    ```bash
    pnpm install
    ```

3. **Run the development server:**

    This will start the development server for the `docs` application.

    ```bash
    pnpm dev
    ```

    Open <http://localhost:3000> with your browser to see the result.

## 📂 Monorepo Structure

This monorepo is structured as follows:

- `apps/docs`: A Next.js application, which can serve as your main web application or documentation site.
- `packages/ui`: A shared UI component library using `shadcn/ui`. Components added here are available to all apps in the monorepo.
- `packages/eslint-config`: Shared ESLint configuration for the entire monorepo.
- `packages/typescript-config`: Shared `tsconfig.json` files.

## 🛠️ Usage

### Using UI Components

To use a component from the `@monorepo/ui` package in your application (e.g., `apps/docs`), you can import it directly:

```tsx
import { Button } from "@monorepo/ui/components/button";

export default function Page() {
  return <Button>Click me</Button>;
}
```

### Adding New shadcn/ui Components

To add new `shadcn/ui` components to the shared `ui` package, run the following command from the root of the monorepo:

```bash
pnpm dlx shadcn-ui@latest add [component-name]
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@monorepo/ui/components/button";
```

## Update package name to your custom domain

Replace `@monorepo/` with your app name to `@<YOUR_APP_NAME>/`.
