import '../styles/globals.css'
import { Poppins } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-poppins',
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  )
}

export default MyApp
