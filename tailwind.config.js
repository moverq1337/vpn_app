/* tailwind.config.cjs */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				black: ['Poppins-Black'],
				regular: ['Poppins-Regular'],
				semibold: ['Poppins-SemiBold'],
			},
			colors: {
				'black-main': '#0B0B0B',
				'purple-opacity': 'rgba(104, 12, 183, 0.05)',
			},
			boxShadow: {
				custom: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
			},
			borderColor: {
				'white-opacity': 'rgba(255, 255, 255, 0.18)',
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.backdrop-blur-md': {
					backdropFilter: 'blur(7px)',
					WebkitBackdropFilter: 'blur(7px)',
				},
			})
		},
	],
}
