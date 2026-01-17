import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

interface MetadataProps {
	path?: string;
	title?: string;
	description?: string;
	keywords?: string[];
	image?: string;
}

export function constructMetadata({
	                                  path = '/',
	                                  title = siteConfig.fullName,
	                                  description = siteConfig.description,
	                                  keywords = siteConfig.keywords,
	                                  image = siteConfig.ogImage
                                  }: MetadataProps = {}): Metadata {
	
	const siteName = siteConfig.fullName;
	const pageTitle = title ? `${title} | ${siteName}` : `${siteName} | ${siteConfig.tagline}`;
	
	return {
		title: {
			default: pageTitle,
			template: `%s | ${siteName}`,
		},
		description,
		keywords,
		authors: siteConfig.authors,
		creator: siteConfig.creator,
		publisher: siteConfig.name,
		metadataBase: new URL(siteConfig.url),
		
		robots: siteConfig.robots,
		
		openGraph: {
			title: pageTitle,
			description,
			url: `${siteConfig.url}/${path}`,
			siteName: siteConfig.fullName,
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: `${pageTitle} Open Graph Image`,
				},
			],
			locale: siteConfig.locale,
			type: 'website',
		},
		
		// Twitter
		twitter: {
			card: 'summary_large_image',
			title: pageTitle,
			description,
			images: {
				url: siteConfig.tcImage || image,
				alt: `${pageTitle} Twitter Card Image`,
			},
			creator: siteConfig.links.twitter,
		},
		
		icons: {
			icon: [
				...siteConfig.favicons.basic,
				...siteConfig.favicons.android
			],
			apple: siteConfig.favicons.apple,
		},
		alternates: {
			canonical: path,
		},
		applicationName: siteConfig.fullName,
		referrer: 'origin-when-cross-origin',
		manifest: siteConfig.favicons.manifest,
		other: {
			'mobile-web-app-capable': 'yes',
			'apple-mobile-web-app-capable': 'yes',
			'apple-mobile-web-app-title': siteConfig.fullName,
			'apple-mobile-web-app-status-bar-style': 'default',
		},
	};
}
