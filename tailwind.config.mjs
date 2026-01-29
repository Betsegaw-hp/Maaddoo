/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				light: {
					bg: '#ffffff',
					fg: '#1a1a1a',
					border: '#e5e5e5',
					card: '#f5f5f5',
				},
				dark: {
					bg: '#050505',
					fg: '#e5e5e5',
					border: '#262626',
					card: '#0a0a0a',
				},
			},
		},
	},
	plugins: [
        function({ addUtilities }) {
            addUtilities({
                '.rotate-y-6': { transform: 'rotateY(6deg)' },
                '.rotate-x-3': { transform: 'rotateX(3deg)' },
                '.perspective-normal': { perspective: '1000px' },
                '.transform-style-preserve-3d': { 'transform-style': 'preserve-3d' },
                '.translate-z-10': { transform: 'translateZ(10px)' },
                '.translate-z-20': { transform: 'translateZ(20px)' },
            })
        }
    ],
}
