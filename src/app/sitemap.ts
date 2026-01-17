import { MetadataRoute } from 'next';
import { publicEnv } from "@/env/public";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = publicEnv.SITE_BASE_URL;
	
	// Define the static routes for your multi-page site
	const routes = [
		'',
		'/careers',
		'/faq',
		'/privacy',
		'/terms',
	].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
		changeFrequency: 'monthly' as const,
		priority: route === '' ? 1.0 : 0.8,
	}));
	
	return [...routes];
}