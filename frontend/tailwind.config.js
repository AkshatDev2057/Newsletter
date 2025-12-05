/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'custom-slate': {
                    50: 'var(--color-slate-50)',
                    100: 'var(--color-slate-100)',
                    200: 'var(--color-slate-200)',
                    300: 'var(--color-slate-300)',
                    600: 'var(--color-slate-600)',
                    700: 'var(--color-slate-700)',
                    800: 'var(--color-slate-800)',
                },
                'custom-blue': {
                    50: 'var(--color-blue-50)',
                    100: 'var(--color-blue-100)',
                    500: 'var(--color-blue-500)',
                    600: 'var(--color-blue-600)',
                    700: 'var(--color-blue-700)',
                },
                'custom-indigo': {
                    50: 'var(--color-indigo-50)',
                    500: 'var(--color-indigo-500)',
                    600: 'var(--color-indigo-600)',
                    700: 'var(--color-indigo-700)',
                },
                'custom-emerald': {
                    500: 'var(--color-emerald-500)',
                    600: 'var(--color-emerald-600)',
                },
                'custom-purple': {
                    500: 'var(--color-purple-500)',
                    600: 'var(--color-purple-600)',
                },
                'custom-red': {
                    500: 'var(--color-red-500)',
                    600: 'var(--color-red-600)',
                },
            },
            backgroundImage: {
                'custom-gradient': 'var(--gradient-primary)',
                'custom-header': 'var(--gradient-header)',
                'custom-button': 'var(--gradient-button)',
            },
            boxShadow: {
                'custom-blue': 'var(--shadow-blue)',
                'custom-indigo': 'var(--shadow-indigo)',
            },
        },
    },
    plugins: [],
}
