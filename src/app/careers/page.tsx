import Careers from '@/components/pages/Careers'
import { constructMetadata } from '@/lib/seo';
import { careers } from '@/config/pages.config';

export const metadata = constructMetadata({
	title: careers.title,
	description: careers.subtitle,
	path: '/careers',
});

export default function CareersPage() {
	return <Careers />
}
