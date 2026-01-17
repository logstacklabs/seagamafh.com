import TermsOfUse from '@/components/pages/TermsOfUse'
import { constructMetadata } from '@/lib/seo';
import { legal } from '@/config/pages.config';
import type { LegalContentConfig } from '@/types/pages.types';

type Props = Pick <LegalContentConfig, 'terms'>;

const { terms }: Props = legal;

export const metadata = constructMetadata({
	title: terms.title,
	description: terms.sections[0].content[0],
	//keywords: [],
	path: '/terms',
});

export default function TermsPage() {
	return <TermsOfUse />
}
