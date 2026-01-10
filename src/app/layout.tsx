//import type { Metadata } from "next";
//import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

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
			</body>
		</html>
	);
}
