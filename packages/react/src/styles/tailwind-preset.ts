/**
 * Swiss International Style Tailwind Preset
 *
 * Provides design tokens as a Tailwind CSS preset.
 * Import this preset in your tailwind.config.ts to use Swiss design tokens.
 *
 * @example
 * ```ts
 * // tailwind.config.ts
 * import swissPreset from 'swiss-ui-react/tailwind-preset';
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
        // ── Core Swiss tokens ──────────────────────────────────
        canvas: 'var(--swiss-canvas, #F0F0E8)',
        ink: 'var(--swiss-ink, #000000)',
        panel: 'var(--swiss-panel, #E5E5E0)',
        'panel-dark': 'var(--swiss-panel-dark, #D8D8D2)',

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

        // ── Semantic aliases (shadcn/ui compatible) ────────────
        background: 'var(--background, #F0F0E8)',
        foreground: 'var(--foreground, #000000)',

        card: {
          DEFAULT: 'var(--card, #F0F0E8)',
          foreground: 'var(--card-foreground, #000000)',
        },

        popover: {
          DEFAULT: 'var(--popover, #F0F0E8)',
          foreground: 'var(--popover-foreground, #000000)',
        },

        primary: {
          DEFAULT: 'var(--primary, #1D4ED8)',
          foreground: 'var(--primary-foreground, #FFFFFF)',
        },

        secondary: {
          DEFAULT: 'var(--secondary, #E5E5E0)',
          foreground: 'var(--secondary-foreground, #000000)',
        },

        muted: {
          DEFAULT: 'var(--muted, #E5E5E0)',
          foreground: 'var(--muted-foreground, #6B7280)',
        },

        accent: {
          DEFAULT: 'var(--accent, #E5E5E0)',
          foreground: 'var(--accent-foreground, #000000)',
        },

        destructive: {
          DEFAULT: 'var(--destructive, #DC2626)',
          foreground: 'var(--destructive-foreground, #FFFFFF)',
        },

        success: {
          DEFAULT: 'var(--success, #15803D)',
          foreground: 'var(--success-foreground, #FFFFFF)',
        },

        warning: {
          DEFAULT: 'var(--warning, #F97316)',
          foreground: 'var(--warning-foreground, #FFFFFF)',
        },

        border: 'var(--border, #000000)',
        input: 'var(--input, #F0F0E8)',
        ring: 'var(--ring, #1D4ED8)',

        // ── Sidebar tokens ─────────────────────────────────────
        sidebar: {
          DEFAULT: 'var(--sidebar, #E5E5E0)',
          foreground: 'var(--sidebar-foreground, #000000)',
          primary: {
            DEFAULT: 'var(--sidebar-primary, #1D4ED8)',
            foreground: 'var(--sidebar-primary-foreground, #FFFFFF)',
          },
          accent: {
            DEFAULT: 'var(--sidebar-accent, #D8D8D2)',
            foreground: 'var(--sidebar-accent-foreground, #000000)',
          },
          border: 'var(--sidebar-border, #000000)',
          ring: 'var(--sidebar-ring, #1D4ED8)',
        },

        // ── Chart colors ───────────────────────────────────────
        chart: {
          1: 'var(--chart-1, #1D4ED8)',
          2: 'var(--chart-2, #15803D)',
          3: 'var(--chart-3, #F97316)',
          4: 'var(--chart-4, #DC2626)',
          5: 'var(--chart-5, #000000)',
        },
      },

      boxShadow: {
        'sw-sm':           'var(--swiss-shadow-sm, 2px 2px 0px 0px #000000)',
        'sw-default':      'var(--swiss-shadow-default, 4px 4px 0px 0px #000000)',
        'sw-lg':           'var(--swiss-shadow-lg, 6px 6px 0px 0px #000000)',
        'sw-xl':           'var(--swiss-shadow-xl, 8px 8px 0px 0px rgba(0,0,0,0.2))',
        'sw-soft-sm':      'var(--swiss-shadow-soft-sm, 2px 2px 0px 0px rgba(0,0,0,0.1))',
        'sw-soft-default': 'var(--swiss-shadow-soft-default, 4px 4px 0px 0px rgba(0,0,0,0.1))',
      },

      fontFamily: {
        swiss: {
          sans:  ['var(--swiss-font-sans)', 'system-ui', 'sans-serif'],
          serif: ['var(--swiss-font-serif)', 'Georgia', 'serif'],
          mono:  ['var(--swiss-font-mono)', 'ui-monospace', 'monospace'],
        },
        sans:  ['var(--swiss-font-sans)', 'Geist', 'system-ui', 'sans-serif'],
        mono:  ['var(--swiss-font-mono)', 'Geist Mono', 'ui-monospace', 'monospace'],
      },

      borderRadius: {
        swiss: 'var(--swiss-radius, 0px)',
        lg: 'var(--radius, 0rem)',
        md: 'calc(var(--radius, 0rem) - 2px)',
        sm: 'calc(var(--radius, 0rem) - 4px)',
      },

      animation: {
        'swiss-fade-in':       'swiss-fade-in 200ms ease-out',
        'swiss-zoom-in':       'swiss-zoom-in 200ms ease-out',
        'swiss-slide-up':      'swiss-slide-up 200ms ease-out',
        'swiss-slide-in-right': 'swiss-slide-in-right 200ms ease-out',
        'swiss-shimmer':       'swiss-shimmer 1.5s ease-in-out infinite',
        'swiss-gradient':      'swiss-gradient 8s linear infinite',
      },

      keyframes: {
        'swiss-fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'swiss-zoom-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        'swiss-slide-up': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'swiss-slide-in-right': {
          from: { opacity: '0', transform: 'translateX(100%)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        'swiss-shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'swiss-gradient': {
          to: { backgroundPosition: '200% center' },
        },
      },
    },
  },
};

export default swissPreset;
