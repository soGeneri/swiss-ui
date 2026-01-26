# Swiss UI - React Component Library

A **Swiss International Style** React component library featuring brutalist aesthetics with hard shadows, square corners, and high-contrast design.

## Features

- 13 production-ready UI components
- Swiss International Style design system
- TypeScript support with full type definitions
- Tree-shakeable ESM and CJS builds
- Tailwind CSS preset for design tokens
- Storybook documentation
- Optional rich text editing (Tiptap)

## Installation

```bash
npm install @swiss-ui/react
```

## Quick Start

```tsx
// Import styles (required)
import '@swiss-ui/react/styles';

// Import components
import { Button, Card, Dialog } from '@swiss-ui/react';

function App() {
  return (
    <Card variant="outline">
      <CardHeader>
        <CardTitle>Hello Swiss UI</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  );
}
```

## Components

### Core Components (Tier 1)
- **Button** - 8 variants, 4 sizes with hard shadow effects
- **Input** - Text input with focus ring
- **Textarea** - Multi-line text input
- **Label** - Form labels with monospace styling
- **Card** - Container with 4 variants (default, interactive, outline, ghost)
- **RetroTabs** - Tab navigation with brutalist styling

### Complex Components (Tier 2)
- **Dialog** - Modal dialog with overlay
- **ConfirmDialog** - Semantic confirmation dialogs (danger, warning, success, default)
- **Dropdown** - Select with descriptions and checkmark indicator
- **ToggleSwitch** - Switch component with label/description

### Rich Text Components (Tier 3)
- **RichTextEditor** - WYSIWYG editor with formatting toolbar
- **RichTextToolbar** - B/I/U/Link formatting buttons
- **LinkDialog** - Modal for adding/editing links

## Rich Text (Optional)

Rich text components require Tiptap as peer dependencies:

```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-link @tiptap/extension-underline
```

```tsx
import { RichTextEditor } from '@swiss-ui/react/rich-text';

<RichTextEditor
  value={html}
  onChange={setHtml}
  placeholder="Enter formatted text..."
/>
```

## Tailwind CSS Preset

Use the Swiss design tokens in your Tailwind config:

```ts
// tailwind.config.ts
import swissPreset from '@swiss-ui/react/tailwind-preset';

export default {
  presets: [swissPreset],
  // ... rest of config
};
```

This adds:
- Colors: `canvas`, `ink`, `panel`, `swiss-primary`, `swiss-success`, etc.
- Shadows: `sw-sm`, `sw-default`, `sw-lg`, `sw-xl`
- Fonts: `swiss-sans`, `swiss-serif`, `swiss-mono`

## Theming

Override CSS variables to customize the theme:

```css
:root {
  --swiss-canvas: #F0F0E8;
  --swiss-ink: #000000;
  --swiss-primary: #1D4ED8;
  --swiss-success: #15803D;
  --swiss-warning: #F97316;
  --swiss-destructive: #DC2626;
  --swiss-shadow-sm: 2px 2px 0px 0px #000000;
}
```

## Design Principles

Swiss UI follows the Swiss International Style:

1. **Square corners** (rounded-none) - Brutalist aesthetic
2. **Hard shadows** - No blur, creates depth
3. **High contrast** - Black borders on all interactive elements
4. **Monospace labels** - Uppercase tracking for form labels
5. **Press effect** - Hover translates element, removes shadow

## Development

```bash
# Install dependencies
npm install

# Run Storybook
npm run dev

# Build library
npm run build

# Run tests
npm run test
```

## Exports

| Export | Description |
|--------|-------------|
| `@swiss-ui/react` | Main components |
| `@swiss-ui/react/styles` | CSS variables and base styles |
| `@swiss-ui/react/tailwind-preset` | Tailwind CSS preset |
| `@swiss-ui/react/rich-text` | Rich text components (requires Tiptap) |

## License

MIT
