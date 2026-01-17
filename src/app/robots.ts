import { MetadataRoute } from 'next';
import { publicEnv } from "@/env/public";


export default function robots(): MetadataRoute.Robots {
	const baseUrl = publicEnv.SITE_BASE_URL;
	
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/api/', '/admin/'], // Standard practice to hide sensitive paths
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}