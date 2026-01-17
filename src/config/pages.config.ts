import {
	CareersContentConfig,
	FaqContentConfig,
	LegalContentConfig
} from '@/types/pages.types';

export const faq: FaqContentConfig = {
	title: "Common Questions",
		subtitle: "Everything you need to know about life at Seagam Adult Family Home.",
		items: [
		{
			question: "How does an Adult Family Home differ from a Nursing Home?",
			answer: "Seagam Adult Family Home provides a more intimate, residential setting with a higher staff-to-resident ratio (typically 1:6 or better) compared to large nursing facilities. This allows for personalized, family-style care in a real home environment, rather than a clinical institution."
		},
		{
			question: "What are your visiting hours?",
			answer: "We believe in an open-door policy for families. Friends and family are welcome to visit anytime between 9:00 AM and 7:00 PM. For visits outside these hours, simply coordinate with our staff to ensure the privacy and rest of all residents."
		},
		{
			question: "Do you offer Memory Care services?",
			answer: "Yes, our staff is specifically trained in dementia and Alzheimer's care. We provide a secure environment with specialized activities designed to support cognitive health and reduce anxiety for residents with memory challenges."
		},
		{
			question: "How is billing handled and do you accept insurance?",
			answer: "We accept private pay and Long-Term Care Insurance. While we do not typically accept Medicare for room and board (as is standard for AFHs), we can help coordinate with Medicaid services if applicable. Please contact us for a detailed breakdown of costs."
		},
		{
			question: "Can you accommodate specific dietary needs?",
			answer: "Absolutely. All meals are home-cooked, and we tailor menus to accommodate diabetic, low-sodium, pureed, or gluten-free diets based on physician orders and personal preferences."
		},
		{
			question: "Is there a nurse on site?",
			answer: "We have a Delegating Registered Nurse (RN) available on-call 24/7 who oversees all care plans, medication delegation, and health assessments. Our daily on-site staff are Certified Nursing Assistants (CNAs) or Home Care Aides (HCAs)."
		}
	]
};
export const careers: CareersContentConfig = {
	title: "Join Our Compassionate Team",
		subtitle: "We are always looking for dedicated individuals who share our passion for dignified senior care.",
		/**
		jobs: [
		{
			id: "cna-01",
			title: "Certified Nursing Assistant (CNA) - Night Shift",
			shortDescription: "Provide overnight care and monitoring for 6 residents in a home setting.",
			description: "We are seeking a reliable and compassionate CNA to join our night shift team. You will be responsible for ensuring the safety and comfort of our residents throughout the night.",
			responsibilities: [
				"Conduct hourly rounds to monitor resident safety.",
				"Assist with toileting and repositioning as needed.",
				"Prepare light breakfast for early risers.",
				"Maintain accurate documentation of night events."
			],
			qualifications: [
				"Current WA State CNA License.",
				"CPR/First Aid Certification.",
				"Dementia & Mental Health Specialty Training preferred.",
				"Ability to pass a background check."
			]
		},
		{
			id: "hca-02",
			title: "Home Care Aide (HCA) - Weekend Rotation",
			shortDescription: "Assist residents with activities of daily living and social engagement.",
			description: "Join our weekend team to help make our residents' days brighter. This role focuses on ADLs and facilitating weekend activities.",
			responsibilities: [
				"Assist with bathing, dressing, and grooming.",
				"Lead weekend recreational activities (puzzles, walks).",
				"Assist with meal preparation and feeding.",
				"Provide companionship and emotional support."
			],
			qualifications: [
				"Current WA State HCA or CNA Certification.",
				"Food Handler's Permit.",
				"Strong communication skills.",
				"Patience and empathy for the elderly."
			]
		}
	]
	* */
};
export const legal: LegalContentConfig = {
	privacy: {
		title: "Privacy Policy",
			lastUpdated: "January 15, 2024",
			sections: [
			{
				title: "Introduction",
				content: [
					"Seagam Adult Family Home ('we', 'us', or 'our') is committed to protecting your privacy and your personal health information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services."
				]
			},
			{
				title: "Information Collection",
				content: [
					"We collect information that you voluntarily provide to us when you fill out contact forms, schedule tours, or apply for employment. This may include your name, contact details (phone, email), and general inquiry details.",
					"As a healthcare provider, we may also receive Protected Health Information (PHI) during the admission process. This data is handled in strict compliance with HIPAA regulations and state laws."
				]
			},
			{
				title: "Use of Information",
				content: [
					"We use the information we collect to: Schedule and manage facility tours; Respond to your inquiries regarding our care services; Process employment applications; and Improve our website functionality.",
					"We do not sell, trade, or rent your personal identification information to others."
				]
			},
			{
				title: "Patient Privacy Rights",
				content: [
					"Residents and their families have specific rights regarding their health information under HIPAA. You have the right to inspect and copy your health records, request corrections, and request restrictions on how your information is used. For a full copy of our Notice of Privacy Practices, please contact our administrator."
				]
			}
		]
	},
	terms: {
		title: "Terms of Use",
			lastUpdated: "January 15, 2024",
			sections: [
			{
				title: "Acceptance of Terms",
				content: [
					"By accessing and using the Seagam Adult Family Home website, you accept and agree to be bound by the terms and provision of this agreement."
				]
			},
			{
				title: "Medical Disclaimer",
				content: [
					"CRITICAL DISCLAIMER: The content on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website."
				]
			},
			{
				title: "Use of Content",
				content: [
					"All content provided on this website including text, graphics, logos, and images is the property of Seagam AFH and is protected by copyright laws. You may not reproduce, distribute, or create derivative works from this content without express written consent."
				]
			},
			{
				title: "Limitation of Liability",
				content: [
					"Seagam AFH shall not be liable for any damages whatsoever, and in particular Seagam AFH shall not be liable for any special, indirect, consequential, or incidental damages, or damages for lost profits, loss of revenue, or loss of use, arising out of or related to this website or the information contained in it."
				]
			}
		]
	}
}
