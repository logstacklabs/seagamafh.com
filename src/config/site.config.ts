import {
	SiteConfig,
	Locale,
	BaseURL
} from '@/types/seo.types';
import { publicEnv } from "@/env/public";

export const locale: Locale = 'en_US';
export const baseURL: BaseURL = publicEnv.SITE_BASE_URL;

export const siteConfig: SiteConfig = {
	name: 'Seagam',
	subName: 'AFH',
	//shortName: 'Seagam',
	description:
		'A premier Adult Family Care Home providing compassionate, 24/7 personalized care in Seattle, WA.',
	url: `${baseURL}`,
	logo: '/images/others/logo.png',
	tagline: 'Compassionate Care In aFamily Setting',
	ogImage: `${baseURL}/icons/og-img.jpg`,
	tcImage: `${baseURL}/icons/tc-img.jpg`,
	keywords: [
		'Adult Family Home', 'Nursing Home', 'Senior Care', 'Adult Family Care',
		'Elderly Nursing Home', 'Quality Senior Caregiving Services',
		
		'adult family care home near me', 'adult foster care near me',
		'senior care home near me', 'elderly care home near me',
		'assisted living near me', 'local adult care home',
		'neighborhood senior care', 'community senior living',
		'residential care near me'
	],
	themeColor: '#F9F7F2',
	
	/*images: {
		openGraph: 'https://www.seagamafh.com/images/og-img.jpg',
		twitterCard: 'https://www.seagamafh.com/images/tc-img.jpg'
	},*/
	
	email: 'seagam7@gmail.com',
	telephone: '+1 (206) 672-7346',
	
	address: {
		streetAddress: '21219 102nd Ave SE',
		addressLocality: 'Kent',
		addressRegion: 'WA',
		postalCode: '98031',
		addressCountry: 'US',
	},
	
	geo: {
		latitude: '47.4117392',
		longitude: '-122.2052785',
	},
	
	openingHours: 'Mo-Su 00:00-24:00',
	priceRange: '$$$',
	
	links: {
		facebook: 'https://facebook.com/seagamafh',
		twitter: 'https://twitter.com/seagamafh',
	},
	
	// 1. ANALYTICS CONFIGURATION
	analytics: {
		googleAnalyticsId: publicEnv.GA_ID,
		cloudflareToken: publicEnv.CLOUDFLARE_ANALYTICS_TOKEN,
	},
	
	// 2. ADVANCED FAVICON CONFIGURATION
	favicons: {
		manifest: '/site.webmanifest',
		basic: [
			{
				rel: 'shortcut icon',
				type: 'image/x-icon',
				sizes: 'any',
				url: '/icons/favicon.ico',
			},
			{
				rel: 'icon',
				type: 'image/svg+xml',
				sizes: 'any',
				url: '/icons/favicon.svg',
			}
		],
		apple: [
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				url: '/icons/apple-touch-icon.png',
			},
		],
		android: [
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '192x192',
				url: '/icons/web-app-manifest-192x192.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '512x512',
				url: '/icons/web-app-manifest-512x512.png',
			},
		]
	},
	robots: {
		index: true,
		follow: true,
		noarchive: false,
		nosnippet: false,
		notranslate: false,
		noimageindex: false,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
			
			noarchive: false,
			nosnippet: false,
			notranslate: false,
			noimageindex: false,
			unavailable_after: 'string'
		},
	},
	authors: [
		{ name: 'Seagam AFH' },
		{ name: 'Abdoulie Jawara' }
	],
	creator: 'Seagam AFH',
};