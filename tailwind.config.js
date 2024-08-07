import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	plugins: [
		nextui({
			layout: {
				fontSize: {
					large: ['10px', '10px'],
					'2xl': ['32px', '32px'], // banner 2
					sm: ['14px', '20px'], // body text
					base: ['16px', '20px'], // text body
				},
			},
			themes: {
				light: {
					colors: {
						white: '#FFFFFF',
						black: '#000000',
						blue: {
							50: '#e6f1fe',
							100: '#cce3fd',
							200: '#99c7fb',
							300: '#66aaf9',
							400: '#338ef7',
							500: '#006FEE',
							600: '#005bc4',
							700: '#004493',
							800: '#002e62',
							900: '#001731',
						},
						transparent: 'transparent', // Прозрачный
						current: 'currentColor', // Текущий цвет
						white: '#ffffff', // Белый
						purple: '#3f3cbb', // Фиолетовый
						midnight: '#121063', // Полуночный
						metal: '#565584', // Металлический
						tahiti: '#3ab7bf', // Таити
						silver: '#ecebff', // Серебряный
						'bubble-gum': '#ff77e9', // Баблгам
						bermuda: '#78dcca', // Бермуда
						'base-white': '#FFFFFF', // Белый базовый
						'base-light-grey': '#FAFAFA', // Светло-серый базовый
						'base-grey': '#F4F4F5', // Серый базовый
						'base-dark-grey': '#E4E4E7', // Тёмно-серый базовый
						'base-light-silver': '#D4D4D8', // Светло-серебристый базовый
						'base-silver': '#777675', // Серебристый базовый
						'base-dark-silver': '#52525B', // Тёмно-серебристый базовый
						'base-charcoal': '#3F3F46', // Угольный базовый
						'base-dark-charcoal': '#27272A', // Тёмно-угольный базовый
						'base-black': '#18181B', // Чёрный базовый
						'primary-blue': '#006FEE', // Синий основной
						'primary-light-blue': '#21A5EE', // Светло-синий основной
						'primary-red': '#EF5050', // Красный основной
						'primary-green': '#00C974', // Зелёный основной
						'primary-yellow': '#FAC100', // Жёлтый основной
						'primary-grey': '#A6A6B0', // Серый основной
						'secondary-light-blue': '#E9F6FF', // Светло-голубой вспомогательный
						'secondary-light-purple': '#DDD0F9', // Светло-фиолетовый вспомогательный
						'secondary-pink': '#F9D0D0', // Розовый вспомогательный
						'secondary-light-green': '#D0F9D9', // Светло-зелёный вспомогательный
						'secondary-lavender': '#BDCEF9', // Лавандовый вспомогательный
						'secondary-light-yellow': '#FFF3CA', // Светло-жёлтый вспомогательный
						'gradient-blue': '#21A5EE - #006FEE', // Градиент от светло-синего к синему
						'gradient-red': '#EF5050 - #F12727', // Градиент от красного к тёмно-красному

						primary: {
							DEFAULT: 'blue',
							foreground: 'black',
						},
						focus: {
							DEFAULT: 'black',
						},
					},
				},
			},
		}),
	],
}
