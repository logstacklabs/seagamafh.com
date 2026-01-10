import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

interface MetadataProps {
	title?: string;
	description?: string;
	image?: string;
	noIndex?: boolean;
}

/**
 * Generates a Next.js Metadata object with advanced Favicon and Meta Tag support.
 */
export function constructMetadata({
	                                  title = siteConfig.name,
	                                  description = siteConfig.description,
	                                  //image = siteConfig.ogImage,
	                                  //noIndex = false,
                                  }: MetadataProps = {}): Metadata {
	
	// Combine all icon types into the Next.js 'icons' format
	const icons = {
		icon: [...siteConfig.favicons.basic, ...siteConfig.favicons.android],
		apple: siteConfig.favicons.apple,
	};
	
	return {
		title: {
			default: `${siteConfig.name} | ${siteConfig.tagline}`,
			template: `%s | ${siteConfig.name}`,
		},
		description,
		keywords: siteConfig.keywords,
		authors: siteConfig.authors,
		creator: siteConfig.creator,
		publisher: siteConfig.name,
		metadataBase: new URL(siteConfig.url),
		manifest: siteConfig.favicons.manifest, // Link to manifest.json
		
		// Robots
		robots: siteConfig.robots,
		
		// Open Graph
		openGraph: {
			title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
			description,
			url: siteConfig.url,
			siteName: siteConfig.name,
			images: [
				{
					url: siteConfig.ogImage,
					width: 1200,
					height: 630,
					alt: title || siteConfig.name,
				},
			],
			locale: 'en_US',
			type: 'website',
		},
		
		// Twitter
		twitter: {
			card: 'summary_large_image',
			title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
			description,
			images: [],
			creator: siteConfig.links.twitter,
		},
		
		// Favicons & Icons
		icons,
		
		alternates: {
			canonical: "./",
		},
	};
}
