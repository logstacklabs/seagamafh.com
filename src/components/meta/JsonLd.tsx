import { siteConfig } from "@/config/site.config";

/**
 * Renders a Google-friendly JSON-LD script for Local Business SEO.
 * Include this component in your root layout or main landing page.
 */
export default function JsonLd() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Residence", // Can also be "LocalBusiness", "MedicalBusiness", or "NursingHome"
		"@id": `${siteConfig.url}/#identity`,
		name: siteConfig.name,
		"legalName": "Seagam Adult Family Home LLC",
		description: siteConfig.description,
		url: siteConfig.url,
		telephone: siteConfig.telephone,
		email: siteConfig.email,
		image: siteConfig.ogImage,
		address: {
			"@type": "PostalAddress",
			streetAddress: siteConfig.address.streetAddress,
			addressLocality: siteConfig.address.addressLocality,
			addressRegion: siteConfig.address.addressRegion,
			postalCode: siteConfig.address.postalCode,
			addressCountry: siteConfig.address.addressCountry,
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: siteConfig.geo.latitude,
			longitude: siteConfig.geo.longitude,
		},
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sunday",
				],
				opens: "00:00",
				closes: "23:59",
			},
		],
		priceRange: siteConfig.priceRange,
		sameAs: [
			siteConfig.links.facebook,
			siteConfig.links.twitter,
			siteConfig.links.instagram,
			siteConfig.links.linkedin,
		].filter(Boolean), // Removes empty strings if social links are missing
	};
	
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}
