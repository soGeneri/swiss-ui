/**
 * Swiss International Style Tailwind Preset
 *
 * Provides design tokens as a Tailwind CSS preset.
 * Import this preset in your tailwind.config.ts to use Swiss design tokens.
 *
 * @example
 * ```ts
 * // tailwind.config.ts
 * import swissPreset from '@swiss-ui/react/tailwind-preset';
 *
 * export default {
 *   presets: [swissPreset],
 *   // ...rest of config
 * };
 * ```
 */

const swissPreset = {
  theme: {
    extend: {
      colors: {
        // Core colors
        canvas: 'var(--swiss-canvas, #F0F0E8)',
        ink: 'var(--swiss-ink, #000000)',
        panel: 'var(--swiss-panel, #E5E5E0)',
        'panel-dark': 'var(--swiss-panel-dark, #D8D8D2)',

        // Semantic colors
        swiss: {
          primary: {
            DEFAULT: 'var(--swiss-primary, #1D4ED8)',
            hover: 'var(--swiss-primary-hover, #1E40AF)',
          },
          success: {
            DEFAULT: 'var(--swiss-success, #15803D)',
            hover: 'var(--swiss-success-hover, #166534)',
          },
          warning: {
            DEFAULT: 'var(--swiss-warning, #F97316)',
            hover: 'var(--swiss-warning-hover, #EA580C)',
          },
          destructive: {
            DEFAULT: 'var(--swiss-destructive, #DC2626)',
            hover: 'var(--swiss-destructive-hover, #B91C1C)',
          },
        },
      },

      boxShadow: {
        'sw-sm': 'var(--swiss-shadow-sm, 2px 2px 0px 0px #000000)',
        'sw-default': 'var(--swiss-shadow-default, 4px 4px 0px 0px #000000)',
        'sw-lg': 'var(--swiss-shadow-lg, 6px 6px 0px 0px #000000)',
        'sw-xl': 'var(--swiss-shadow-xl, 8px 8px 0px 0px rgba(0,0,0,0.2))',
        'sw-soft-sm': 'var(--swiss-shadow-soft-sm, 2px 2px 0px 0px rgba(0,0,0,0.1))',
        'sw-soft-default': 'var(--swiss-shadow-soft-default, 4px 4px 0px 0px rgba(0,0,0,0.1))',
      },

      fontFamily: {
        swiss: {
          sans: ['var(--swiss-font-sans)', 'system-ui', 'sans-serif'],
          serif: ['var(--swiss-font-serif)', 'Georgia', 'serif'],
          mono: ['var(--swiss-font-mono)', 'ui-monospace', 'monospace'],
        },
      },

      borderRadius: {
        swiss: 'var(--swiss-radius, 0px)',
      },

      animation: {
        'swiss-fade-in': 'swiss-fade-in 200ms ease-out',
        'swiss-zoom-in': 'swiss-zoom-in 200ms ease-out',
        'swiss-slide-up': 'swiss-slide-up 200ms ease-out',
      },

      keyframes: {
        'swiss-fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'swiss-zoom-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'swiss-slide-up': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
};

export default swissPreset;
