export type Locale = string;
export type BaseURL = string;
export type ISODate = string;

export interface Address {
	streetAddress: string;
	addressLocality: string; // City
	addressRegion: string; // State
	postalCode: string;
	addressCountry: string;
}

export interface GeoLocation {
	latitude: string;
	longitude: string;
}

export interface SocialLinks {
	facebook?: string;
	twitter?: string;
	instagram?: string;
	linkedin?: string;
	youtube?: string;
}

export interface AnalyticsConfig {
	googleAnalyticsId?: string; // e.g., G-XXXXXXXXXX
	cloudflareToken?: string; // e.g., 1234567890abcdef
	goatCounterCode?: string; // e.g., my-site-code
}

export interface IconDescriptor {
	url: string;
	type?: string;
	sizes?: string;
	rel?: string;
}

export interface FaviconsConfig {
	basic: IconDescriptor[];
	apple: IconDescriptor[];
	android: IconDescriptor[];
	manifest?: string;
}

export interface GoogleBotConfig {
	index?: boolean;
	follow?: boolean;
	
	'max-video-preview'?: number;
	'max-image-preview'?: "none" | "standard" | "large";
	'max-snippet'?: number;
	
	noarchive?: boolean;
	nosnippet?: boolean;
	notranslate?: boolean;
	noimageindex?: boolean;
	
	unavailable_after?: string; // ISO date
}

export interface RobotsConfig {
	index?: boolean;
	follow?: boolean;
	
	noarchive?: boolean;
	nosnippet?: boolean;
	notranslate?: boolean;
	noimageindex?: boolean;
	
	googleBot?: GoogleBotConfig;
}

export interface brand {
	name: string;
	subName: string;
	fullName: string;
}
export interface SiteConfig {
	name: string;
	subName: string;
	description: string;
	url: string;
	logo: string;
	ogImage: string;
	tcImage: string;
	keywords: string[];
	themeColor: string;
	tagline: string;
	
	email: string;
	telephone: string;
	address: Address;
	geo: GeoLocation;
	
	openingHours: string;
	priceRange: string;
	
	links: SocialLinks;
	analytics: AnalyticsConfig; // New Analytics Section
	favicons: FaviconsConfig;   // New Favicons Section
	robots: RobotsConfig;
	authors: { name: string; url?: string }[];
	creator: string;
}
