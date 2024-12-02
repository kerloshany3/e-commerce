import localFont from "next/font/local";
import "./globals.css";
import { Abril_Fatface } from 'next/font/google';
import { Rakkas } from 'next/font/google';
import Header from "./components/Header";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

// Load the Rakkas font
const rakkas = Rakkas({
  subsets: ['latin'],
  weight: ['400'], // Add weights if needed (e.g., '400', '700')
  variable: '--font-rakkas', // Use a CSS variable for the font
});

const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  weight: ['400'], // Adjust weights as needed
});

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

export const metadata = {
  title: "My Shop",
  description: "Created By Kerlos Dev with NEXT JS & Tailwind CSS & Stripe & Hyper UI ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
         
          <Header></Header>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
