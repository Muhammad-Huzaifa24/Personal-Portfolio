import Head from "next/head";

// Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experiences from "../components/Experiences";
import Works from "../components/Works";
import GitHubStats from "../components/GitHubStats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AiChat from "../components/AiChat";

// Constants
import { GITHUB_USERNAME } from "../constants";

export default function Home({ githubStats }) {
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
				<GitHubStats stats={githubStats} />
				<Contact />
			</main>
			<Footer />
			<AiChat />
		</>
	);
}

export async function getStaticProps() {
	const FALLBACK = {
		props: {
			githubStats: {
				repos: 0,
				followers: 0,
				stars: 0,
				topLanguage: "JavaScript",
			},
		},
		revalidate: 3600,
	};

	try {
		const [userRes, reposRes] = await Promise.all([
			fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
			fetch(
				`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
			),
		]);

		if (!userRes.ok || !reposRes.ok) return FALLBACK;

		const user = await userRes.json();
		const repos = await reposRes.json();

		// Sum all stars across public repos
		const stars = Array.isArray(repos)
			? repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
			: 0;

		// Find the most-used language across repos
		const langMap = {};
		if (Array.isArray(repos)) {
			repos.forEach((r) => {
				if (r.language) {
					langMap[r.language] = (langMap[r.language] || 0) + 1;
				}
			});
		}
		const topLanguage =
			Object.keys(langMap).sort((a, b) => langMap[b] - langMap[a])[0] ||
			"JavaScript";

		return {
			props: {
				githubStats: {
					repos: user.public_repos ?? 0,
					followers: user.followers ?? 0,
					stars,
					topLanguage,
				},
			},
			revalidate: 86400, // ISR: refresh once per day
		};
	} catch {
		return FALLBACK;
	}
}
