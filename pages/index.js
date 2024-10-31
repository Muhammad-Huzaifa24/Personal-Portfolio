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
		<div className="p-2">
			<Head>
				<title>Muhammad - Software Developer</title>
				<meta
					name="description"
					content="Software developer portfolio using Next.js & Tailwind CSS."
				/>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>

			<div className="max-w-7xl m-auto">
				<Navbar />
				<Hero />
				<Experiences />
				<Works />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}
