# Technology Stack Rules

To ensure consistency and source code quality, all development tasks performed by the AI Agent must strictly adhere to the following technology stack:

## 🚀 Core Framework
- **Next.js**: Use the latest version, prioritising the **App Router** (`app/` directory).
- **TypeScript**: Strict typing is mandatory. Do not use `any`. Define clear Interfaces/Types for all Components and APIs.

## 🎨 Styling & UI
- **Tailwind CSS**: Use the utility-first approach for all UI designs. Avoid writing raw CSS unless absolutely necessary (e.g., complex animations).
- **Shadcn UI**: Use components from the Shadcn/UI library. When a new component is needed, check the library before building from scratch. Customise these components via `tailwind.config.ts`.

## 🛠️ Implementation Principles
1. **Component-Driven**: Break down UI elements into highly reusable components in the `src/components` directory.
2. **Server/Client Components**: Clearly distinguish and correctly use the `'use client'` directive. Prefer Server Components for data fetching to optimize SEO and performance.
3. **Responsive Design**: Ensure all interfaces display well across all screen sizes (Mobile-first).
4. **Clean Code**: Adhere to SOLID and DRY (Don't Repeat Yourself) principles.

## 📦 Library Management
- Avoid adding new libraries if Tailwind or Shadcn can already solve the problem.
- Always check the `package.json` file before installing additional packages.
