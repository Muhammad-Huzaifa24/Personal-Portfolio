import Head from "next/head";

// Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experiences from "../components/Experiences";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Muhammad Huzaifa Khawar | Software Engineer</title>
				<meta
					name="description"
					content="Portfolio of Muhammad Huzaifa Khawar, a self-taught front-end software developer building responsive web apps with the MERN stack, Next.js and React."
				/>
				<meta name="theme-color" content="#0a0f1e" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Muhammad Huzaifa Khawar | Software Engineer"
				/>
				<meta
					property="og:description"
					content="Portfolio of Muhammad Huzaifa Khawar, a self-taught front-end software developer building responsive web apps with the MERN stack, Next.js and React."
				/>
				<meta property="og:url" content="https://muhammad-huzaifa24.vercel.app/" />
				<meta property="og:image" content="https://res.cloudinary.com/dvycqni2r/image/upload/v1787042350/portfolio-1_lv7a6l.png" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:image" content="https://res.cloudinary.com/dvycqni2r/image/upload/v1787042350/portfolio-1_lv7a6l.png" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
			<main className="max-w-7xl m-auto">
				<Hero />
				<Experiences />
				<Works />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
