import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
			fontSize: {
				xs: ['12px', '20px'], // body text
				sm: ['14px', '20px'], // body text
				base: ['16px', '20px'], // text body
				lg: ['20px', '20px'], // h5 + banner 3
				xl: ['24px', '24px'], // h4 + subtitle
				'2xl': ['32px', '32px'], // banner 2
				'3xl': ['36px', '36px'], // H3
				'4xl': ['40px', '45px'], // H2
				'5xl': ['64px', '64px'], // H1 + banner 1
			},
		},
		darkMode: 'class',
		plugins: [nextui()],
	},
}
