/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Cosmic theme colors
        cosmic: {
          purple: "hsl(var(--cosmic-purple))",
          cyan: "hsl(var(--cosmic-cyan))",
          gold: "hsl(var(--cosmic-gold))",
          pink: "hsl(var(--cosmic-pink))",
        },
        star: {
          white: "hsl(var(--star-white))",
        },
        nebula: {
          blue: "hsl(var(--nebula-blue))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px hsl(var(--accent) / 0.5)' },
          '100%': { boxShadow: '0 0 40px hsl(var(--accent) / 0.8), 0 0 60px hsl(var(--accent) / 0.4)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        'cosmic-drift': {
          '0%': { transform: 'translateX(-100px) translateY(0px)' },
          '50%': { transform: 'translateX(100px) translateY(-50px)' },
          '100%': { transform: 'translateX(-100px) translateY(0px)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        twinkle: "twinkle 3s infinite",
        'pulse-glow': "pulse-glow 2s ease-in-out infinite alternate",
        orbit: "orbit 20s linear infinite",
        'cosmic-drift': "cosmic-drift 15s ease-in-out infinite",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        japanese: ['Noto Sans JP', 'sans-serif'],
        korean: ['Noto Sans KR', 'sans-serif'],
        code: ['Source Code Pro', 'monospace'],
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(ellipse at center, hsl(var(--primary)) 0%, hsl(var(--background)) 70%)',
        'nebula-gradient': 'linear-gradient(135deg, hsl(var(--cosmic-purple) / 0.3), hsl(var(--cosmic-cyan) / 0.3), hsl(var(--cosmic-pink) / 0.3))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}