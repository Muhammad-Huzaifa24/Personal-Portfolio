import Head from "next/head";

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
        <title>Muhammad Huzaifa | Frontend Software Engineer</title>
        <meta
          name="description"
          content="Modern portfolio of Muhammad Huzaifa Khawar, a frontend-focused software engineer building polished products with React, Next.js, and the MERN stack."
        />
        <meta
          name="keywords"
          content="Muhammad Huzaifa, frontend developer, software engineer, React developer, Next.js portfolio, MERN stack"
        />
        <meta
          property="og:title"
          content="Muhammad Huzaifa | Frontend Software Engineer"
        />
        <meta
          property="og:description"
          content="A modern developer portfolio featuring experience, selected work, and collaboration details."
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <div className="relative overflow-x-hidden">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-6 sm:px-6 lg:px-8">
          <Navbar />
          <Hero />
          <Experiences />
          <Works />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
