import Careers from '@/components/pages/Careers'
import { constructMetadata } from '@/lib/seo';
import { careers } from '@/config/pages.config';
import { type Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
	title: careers.title,
	description: careers.subtitle,
	path: '/careers',
});

export default function CareersPage() {
	return <Careers />
}
