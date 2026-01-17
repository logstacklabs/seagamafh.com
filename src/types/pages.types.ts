export interface FAQItem {
	question: string;
	answer: string;
}

export interface JobListing {
	id: string;
	title: string;
	shortDescription: string;
	description: string;
	responsibilities: string[];
	qualifications: string[];
}

export interface LegalSection {
	title: string;
	content: string[];
}
//export interface PagesContentConfig {}

export interface FaqContentConfig {
	title: string;
	subtitle: string;
	items: FAQItem[];
}
export interface CareersContentConfig {
	title: string;
	subtitle: string;
	jobs?: JobListing[];
}
export interface LegalContentConfig {
	privacy: {
		title: string;
		lastUpdated: string;
		sections: LegalSection[];
	};
	terms: {
		title: string;
		lastUpdated: string;
		sections: LegalSection[];
	};
}