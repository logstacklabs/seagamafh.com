import FAQ from '@/components/pages/FAQ'
import { constructMetadata } from '@/lib/seo';
import { faq } from '@/config/pages.config';

export const metadata = constructMetadata({
	title: faq.title,
	description: faq.subtitle,
	path: '/faq',
});

export default function FAQPage() {
	return <FAQ />
}
