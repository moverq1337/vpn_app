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
			},
		},
	},
	plugins: [],
}
