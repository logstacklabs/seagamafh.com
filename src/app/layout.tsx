import "./globals.css";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import JsonLd from '@/components/meta/JsonLd';
import Analytics from '@/components/meta/Analytics';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en" dir="ltr">
			<body className="bg-canvas-page min-h-screen text-text-main">
				<Navbar />
				<main className="flex-grow">
					{children}
				</main>
				<JsonLd />
				<Analytics/>
				<SpeedInsights />
				<Footer />
			</body>
		</html>
	);
}
