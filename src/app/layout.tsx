import "./globals.css";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { constructMetadata } from '@/lib/seo';
import JsonLd from '@/components/meta/JsonLd';
import Analytics from '@/components/meta/Analytics';

export const metadata = constructMetadata();


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en" dir="ltr">
			<body>
				{children}
				<JsonLd />
				<Analytics/>
				<SpeedInsights />
			</body>
		</html>
	);
}
