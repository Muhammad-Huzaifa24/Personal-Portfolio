import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className="theme">
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
