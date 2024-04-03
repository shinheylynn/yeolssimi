/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			height: {
				iphone15pro: "852px",
			},
			width: {
				iphone15pro: "393px",
			},
			colors: {
				darkgrey: "#1a1a1a",
				lightblue: "#afc7ee",
			},
		},
	},
	plugins: [],
};
