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
        },
    },
    plugins: [flowbite.plugin()],
};
export default config;
