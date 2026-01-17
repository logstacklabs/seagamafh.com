import {
	NavContentConfig, HeroContentConfig,
	AboutContentConfig, TourContentConfig,
	ServicesContentConfig, TrustContentConfig,
	TeamContentConfig, TestimonialsContentConfig,
	ContactContentConfig, FooterContentConfig
} from '@/types/sections.types';


export const navigations: NavContentConfig = [
	{ name: 'Home', href: '/#home', id: 'home' },
	{ name: 'About', href: '/#about', id: 'about' },
	{ name: 'Virtual Tour', href: '/#tour', id: 'tour' },
	{ name: 'Services', href: '/#services', id: 'services' },
	{ name: 'Team', href: '/#caregivers', id: 'caregivers' },
	{ name: 'Contact', href: '/#contact', id: 'contact' },
];
export const hero: HeroContentConfig = {
	badge: 'Welcome to Your New Chapter',
	title: 'Compassionate Care in a',
	titleAccent: 'Family Setting',
	description: 'Experience the peace of mind that comes with high-quality, personalized attention in a cozy, secure home environment.',
	ctaPrimary: { text: 'Schedule a Tour', href: '#contact' },
	ctaSecondary: { text: 'View Our Services', href: '#services' },
	// Engaging image of caregiver and senior
	bgImage: '/images/others/elderly_3.png',//https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=2000',
};
export const about: AboutContentConfig = {
	title: 'Rooted in Family,',
	titleAccent: 'Dedicated to Dignity',
	description: 'At Seagam AFH, we believe that aging is a beautiful journey that should be handled with grace and respect. Our philosophy centers on \'Aging in Place,\' ensuring that our residents feel at home while receiving medical-grade care.',
	features: [
		'Personalized Care Plans',
		'Emotional & Social Support',
		'Home-Style Environment',
		'Expert Medical Oversight'
	],
	quote: "'Our mission is to provide the highest standard of living where every resident is treated with the love and care we\'d give our own parents.'",
	// Caregiver image
	image: '/images/others/elderly_0.png', //'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800',
};
export const tour: TourContentConfig = {
	badge: 'Interactive Experience',
	title: 'The Living Environment',
	description: 'Take a steady, guided walk through our home. Every room is crafted to maintain the warmth of a family residence while providing high-end accessibility.',
	rooms: [
		{
			category: 'Living Rooms',
			imageRootPath: '/images/living-rooms',
			images: [
				{
					url: '1.jpg',
					hotspots: [{ x: 50, y: 40, label: 'Natural Light & Cozy Communal Seating' }, { x: 20, y: 80, label: 'Trip-Free Pathway Clearances' }]
				},
				{
					url: '2.jpg',
					hotspots: [{ x: 30, y: 60, label: 'Safe, High-Contrast Non-Slip Flooring' }]
				},
				{ url: '3.jpg' },
				{ url: '4.jpg' },
				{ url: '5.jpg' },
				{ url: '6.jpg' },
				{ url: '7.jpg' },
				{ url: '8.jpg' },
				{ url: '9.jpg' },
				{ url: '10.jpg' },
				{ url: '11.jpg' },
				{ url: '12.jpg' },
				{ url: '13.jpg' }
			]
		},
		{
			category: 'Kitchens',
			imageRootPath: '/images/kitchens',
			images: [
				{
					url: '1.jpg',
					hotspots: [{ x: 60, y: 50, label: 'ADA Accessible Low-Profile Counters' }]
				},
				{
					url: '2.jpg',
					hotspots: [{ x: 45, y: 40, label: 'Modern Safety Appliances' }]
				},
				{ url: '3.jpg' },
				{ url: '4.jpg' },
				{ url: '5.jpg' }
			]
		},
		{
			category: 'Bedrooms',
			imageRootPath: '/images/bedrooms',
			images: [
				{
					url: '1.jpg',
					hotspots: [{ x: 40, y: 45, label: '24/7 Wireless Emergency Call System' }]
				},
				{ url: '2.jpg' },
				{ url: '3.jpg' }
			]
		},
		{
			category: 'Bathrooms',
			imageRootPath: '/images/bathrooms',
			images: [
				{
					url: '1.jpg',
					hotspots: [{ x: 70, y: 30, label: 'Barrier-Free Walk-in Shower' }]
				},
				{ url: '2.jpg' },
				{ url: '3.jpg' },
				{ url: '4.jpg' },
				{ url: '5.jpg' },
				{ url: '6.jpg' },
				{ url: '7.jpg' },
				{ url: '8.jpg' }
			]
		},
		{
			category: 'Dining Rooms',
			imageRootPath: '/images/dining-rooms',
			images: [
				{
					url: '1.jpg',
					hotspots: [{ x: 50, y: 50, label: 'Restaurant-Style Communal Dining' }]
				},
				{ url: '2.jpg' },
				{ url: '3.jpg' }
			]
		},
		{
			category: 'Exterior',
			imageRootPath: '/images/exteriors',
			images: [
				{
					url: '1.jpg',
					hotspots: [{ x: 45, y: 60, label: 'Secure Gated Garden & Patio' }]
				},
				{ url: '2.jpg' },
				{ url: '3.jpg' },
				{ url: '4.jpg' },
				{ url: '5.jpg' },
				{ url: '6.jpg' },
				{ url: '7.jpg' },
				{ url: '8.jpg' }
			]
		}
	]
};
export const services: ServicesContentConfig = {
	title: 'Comprehensive Care Solutions',
	description: 'We provide a wide range of services designed to support physical health, mental well-being, and overall happiness.',
	items: [
		{
			id: '1',
			title: '24/7 Monitoring',
			description: 'Round-the-clock professional supervision ensuring safety and immediate assistance.',
			icon: 'Clock'
		},
		{
			id: '2',
			title: 'Medication Management',
			description: 'Accurate and timely administration of medications by trained staff.',
			icon: 'HeartPulse'
		},
		{
			id: '3',
			title: 'Nutritious Meals',
			description: 'Chef-prepared, balanced meals tailored to individual dietary requirements.',
			icon: 'Utensils'
		},
		{
			id: '4',
			title: 'Daily Living Assistance',
			description: 'Compassionate help with ADLs including dressing, bathing, and mobility.',
			icon: 'Accessibility'
		}
	]
};
export const trust: TrustContentConfig = {
	badges: [
		{ icon: 'BadgeCheck', label: 'State Licensed' },
		{ icon: 'Activity', label: 'CPR Certified Staff' },
		{ icon: 'Flame', label: 'Fire Safety Compliant' },
		{ icon: 'ShieldCheck', label: 'Insured & Bonded' }
	]
};
export const team: TeamContentConfig = {
	title: 'Meet Our Heart & Soul',
	description: 'Our team is comprised of dedicated professionals who lead with empathy and excellence.',
	members: [
		{
			name: 'Sarah Johnson',
			role: 'Lead Registered Nurse',
			image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400'
		},
		{
			name: 'Michael Chen',
			role: 'Certified Care Specialist',
			image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400'
		},
		{
			name: 'Elena Rodriguez',
			role: 'Nutrition & Wellness Lead',
			image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400'
		}
	],
	missionQuote: "'Our mission is to create a nurturing haven where every elder flourishes in dignity, health, and happiness, supported by a family that truly cares.'"
};
export const testimonials: TestimonialsContentConfig = {
	title: 'Stories from Our Families',
	items: [
		{
			name: 'David Wilson',
			relation: 'Son of Resident',
			content: 'The level of personalized attention my mother receives at Seagam is unparalleled. It truly feels like she\'s part of a family here.'
		},
		{
			name: 'Linda Martinez',
			relation: 'Daughter of Resident',
			content: 'We searched for a long time for a place that didn\'t feel like an institution. Seagam is a warm, beautiful home with incredible caretakers.'
		},
		{
			name: 'Robert Taylor',
			relation: 'Family Member',
			content: 'The peace of mind knowing my father is safe and well-fed in such a serene environment is priceless. Thank you, Seagam team.'
		}
	]
};
export const contact: ContactContentConfig = {
	title: 'Schedule a Tour',
	address: '21219 102nd Ave SE, Kent, WA 98031', //29306 45th P1 S Auburn, WA 98001
	phone: '+1 (206) 672-7346',
	email: 'seagam7@gmail.com',
	mapAddress: '21219 102nd Ave SE, Kent, WA 98031',
	form: {
		labels: {
			name: 'Full Name',
			phone: 'Phone Number',
			email: 'Email Address',
			date: 'Requested Tour Date',
			message: 'Message (Optional)',
			submit: 'Send Request',
		},
		placeholders: {
			name: 'John Doe',
			phone: '(555) 000-0000',
			email: 'john@example.com',
			message: 'How can we help you?',
		},
	},
};
export const footer: FooterContentConfig = {
	copy: '©2026 Seagam AFH LLC. All rights reserved.',
	links: [
		{ text: 'Privacy Policy', href: '/privacy' },
		{ text: 'Terms of Use', href: '/terms' },
		{ text: 'FAQ', href: '/faq' },
		{ text: 'Careers', href: '/careers' }
	]
};


export const VirtualTourImages = {
	'living-rooms': [
		'1.jpg', '2.jpg', '3.jpg', '4.jpg',
		'5.jpg', '6.jpg', '7.jpg', '8.jpg',
		'9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg'
	],
	'kitchens': [
		'1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'
	],
	'bedrooms': [
		'1.jpg', '2.jpg', '3.jpg'
	],
	'bathrooms': [
		'1.jpg', '2.jpg', '3.jpg', '4.jpg',
		'5.jpg', '6.jpg', '7.jpg', '8.jpg'
	],
	'dining-rooms': [
		'1.jpg', '2.jpg', '3.jpg'
	],
	'exterior': [
		'1.jpg', '2.jpg', '3.jpg', '4.jpg',
		'5.jpg', '6.jpg', '7.jpg', '8.jpg'
	],
}