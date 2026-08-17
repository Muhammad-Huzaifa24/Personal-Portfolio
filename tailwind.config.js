/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
		},
		extend: {
			colors: {
				ink: {
					900: "#0a0f1e",
					800: "#0f1626",
					700: "#141c31",
				},
			},
			boxShadow: {
				card: "0 1px 2px rgba(0,0,0,0.4)",
				"card-hover": "0 12px 32px -12px rgba(20, 184, 166, 0.25)",
			},
			maxWidth: {
				"8xl": "90rem",
			},
		},
	},
	plugins: [],
};
