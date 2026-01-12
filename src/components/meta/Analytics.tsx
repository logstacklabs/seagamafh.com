"use client";

import Script from "next/script";
import { siteConfig } from "@/config/site.config";

/**
 * Renders analytics scripts based on siteConfig.
 * Supports Google Analytics 4, Cloudflare Web Analytics, and GoatCounter.
 * * Usage: Import and add to your RootLayout in src/app/layout.tsx
 */
export default function Analytics() {
	const { googleAnalyticsId, cloudflareToken } = siteConfig.analytics;
	
	return (
		<>
			{/* --- Google Analytics 4 --- */}
			{googleAnalyticsId && (
				<>
					<Script
						strategy="afterInteractive"
						src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
					/>
					<Script
						id="google-analytics"
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
							__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}', {
                  page_path: window.location.pathname,
                });
              `,
						}}
					/>
				</>
			)}
			
			{/* --- Cloudflare Web Analytics --- */}
			{cloudflareToken && (
				<Script
					defer
					strategy="afterInteractive"
					src="https://static.cloudflareinsights.com/beacon.min.js"
					data-cf-beacon={`{"token": "${cloudflareToken}"}`}
				/>
			)}
		</>
	);
}
