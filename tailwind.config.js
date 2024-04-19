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
				100: "100px",
			},
			maxHeight: {
				550: "550px",
			},
			width: {
				iphone15pro: "393px",
			},
			spacing: {
				72: "18rem",
			},
			colors: {
				bggrey: "#F5F5F5",
				darkgrey: "#1a1a1a",
				grey: "#595959",
				lightgrey: "#d9d9d9",
				darkgrey: "#2F2F2F",
				blue: "#488CFA",
				lightblue: "#afc7ee",
				white: "#F2F2F1",
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
