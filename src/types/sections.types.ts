export type SectionId = 'home' | 'about' | 'tour' | 'services' | 'caregivers' | 'testimonials' | 'contact';

export interface RoomHotspot {
	x: number;
	y: number;
	label: string;
}

export interface RoomImage {
	url: string;
	hotspots?: RoomHotspot[];
}

export type RoomCategory = 'Living Rooms' | 'Kitchens' | 'Bedrooms' | 'Bathrooms' | 'Dining Rooms' | 'Exterior';

export interface RoomData {
	category: RoomCategory;
	imageRootPath: string;
	images: RoomImage[];
}

export interface Service {
	id: string;
	title: string;
	description: string;
	icon: string;
}

export interface Caregiver {
	name: string;
	role: string;
	image: string;
}

export interface Testimonial {
	name: string;
	relation: string;
	content: string;
}

export interface NavLink {
	name: string;
	href: string;
	id: SectionId;
}
export type NavContentConfig = NavLink[];
export interface HeroContentConfig {
	badge: string;
	title: string;
	titleAccent: string;
	description: string;
	ctaPrimary: { text: string; href: string };
	ctaSecondary: { text: string; href: string };
	bgImage: string;
}
export interface AboutContentConfig {
	title: string;
	titleAccent: string;
	description: string;
	features: string[];
	quote: string;
	image: string;
}
export interface TourContentConfig {
	badge: string;
	title: string;
	description: string;
	rooms: RoomData[];
}
export interface ServicesContentConfig {
	title: string;
	description: string;
	items: Service[];
}
export interface TrustContentConfig {
	badges: { icon: string; label: string }[];
}
export interface TeamContentConfig {
	title: string;
	description: string;
	members: Caregiver[];
	missionQuote: string;
}
export interface TestimonialsContentConfig {
	title: string;
	items: Testimonial[];
}
export interface ContactContentConfig {
	title: string;
	address: string;
	phone: string;
	email: string;
	mapAddress: string; // Used for Google Maps Embed
	form: {
		labels: {
			name: string;
			phone: string;
			email: string;
			date: string;
			message: string;
			submit: string;
		};
		placeholders: {
			name: string;
			phone: string;
			email: string;
			message: string;
		};
	};
}
export interface FooterContentConfig {
	copy: string;
	links: { text: string; href: string }[];
}


/*
export interface SiteContentsConfig {
	navigation: NavLink[];
	hero: {
		badge: string;
		title: string;
		titleAccent: string;
		description: string;
		ctaPrimary: { text: string; href: string };
		ctaSecondary: { text: string; href: string };
		bgImage: string;
	};
	about: {
		title: string;
		titleAccent: string;
		description: string;
		features: string[];
		quote: string;
		image: string;
	};
	tour: {
		badge: string;
		title: string;
		description: string;
		rooms: RoomData[];
	};
	services: {
		title: string;
		description: string;
		items: Service[];
	};
	trust: {
		badges: { icon: string; label: string }[];
	};
	team: {
		title: string;
		description: string;
		members: Caregiver[];
		missionQuote: string;
	};
	testimonials: {
		title: string;
		items: Testimonial[];
	};
	contact: {
		title: string;
		address: string;
		phone: string;
		email: string;
		mapAddress: string; // Used for Google Maps Embed
		form: {
			labels: {
				name: string;
				phone: string;
				email: string;
				date: string;
				message: string;
				submit: string;
			};
			placeholders: {
				name: string;
				phone: string;
				email: string;
				message: string;
			};
		};
	};
	footer: {
		copy: string;
		links: { text: string; href: string }[];
	};
}
*/
