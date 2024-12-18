import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/Navbar'; 
import { Montserrat } from "next/font/google";
import Footer from "./components/Footer";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        {/* Add Navbar Here */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
