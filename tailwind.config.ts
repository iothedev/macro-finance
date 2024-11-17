import fluid, { extract, screens, fontSize } from 'fluid-tailwind';
import type { Config } from 'tailwindcss';

export default {
    content: {
        files: [
            './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
            './src/components/**/*.{js,ts,jsx,tsx,mdx}',
            './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        ],
        extract,
    },
    theme: {
        screens,
        fontSize: {
            ...fontSize,
            96: 'clamp(6rem, 5vw, 96px)',
        },
        extend: {
            colors: {
                background: {
                    1: '#F8F8F8',
                    2: '#1A1A1A',
                    3: '#F1F1F1',
                },
                foreground: {
                    1: '#000000',
                    2: '#ffffff',
                    3: '#6D6D6D',
                    4: '#525252',
                    5: '#F1F1F1',
                    6: '#1A1A1A'
                },
                accent: {
                    1: '#83FF8F',
                },
            },
        },
    },
    plugins: [fluid],
} satisfies Config;
