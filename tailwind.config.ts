import type { Config } from 'tailwindcss';
const flowbite = require('flowbite-react/tailwind');

const config: Config = {
    // darkMode: 'class',
    darkMode: 'media',
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/flowbite-react/**/*.js',
        './pages/**/*.{ts,tsx}',
        './public/**/*.html',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        flowbite.content(),
    ],
    theme: {
        extend: {
            // backgroundImage: {
            //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            //   'gradient-conic':
            //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            // },
            colors: {
                'custom-appgreeen': '#D2DE32',
                'custom-blue': '#0077FF',
                'custom-red': '#FF4545',
                'custom-green': '#00CC66',
                'custom-yellow': '#FFD700',
                'custom-purple': '#8A2BE2',
                'custom-orange': '#FFA500',
                'custom-pink': '#FF69B4',
                'custom-cyan': '#00CED1',
                'custom-teal': '#008080',
                'custom-indigo': '#4B0082',
            },
        },
    },
    plugins: [flowbite.plugin()],
};
export default config;
