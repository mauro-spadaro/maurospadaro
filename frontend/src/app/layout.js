import localFont from "next/font/local";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/Navbar';
import { Montserrat } from "next/font/google";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400","600","700", "800"], 
});


export const metadata = {
  metadataBase: new URL('https://maurospadaro.com'),
  title: {
    default: "Mauro Spadaro",
    template: "%s | maurospadaro",
  },
  description: "Writing about tech, product management, and digital innovation.",
  openGraph: {
    type: "website",
    siteName: "maurospadaro",
    title: "Mauro Spadaro",
    description: "Writing about tech, product management, and digital innovation.",
    url: "https://maurospadaro.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mauro Spadaro",
    description: "Writing about tech, product management, and digital innovation.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-b from-gray-200 to-white">
          {/* Add Navbar Here */}
          <Navbar />

          {/* Main Content */}
          <main>{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
