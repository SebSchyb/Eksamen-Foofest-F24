/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./node_modules/flowbite-react/lib/**/*.js",
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		backgroundSize: {
			"50%": "100%",
		},
		extend: {
			animation: {
				"ping-slow": "ping 1s linear",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"logo-pattern": "url('/full-black.svg')",
			},
			colors: {
				"black-blue": "#020c1c",
				"dark-blue": "#041737",
				"dark-purple": "#382a4e",
				"light-purple": "#744c53",
				"dark-orange": "#ba4a49",
				"main-orange": "#e95d39",
				"main-yellow": "#f2d027",
			},
			fontFamily: {
				"Header-font": ["taurunum-ferrum-iron", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/aspect-ratio"), require("flowbite/plugin")],
};
