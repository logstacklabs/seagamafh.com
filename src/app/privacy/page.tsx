import PrivacyPolicy from '@/components/pages/PrivacyPolicy'
import { constructMetadata } from '@/lib/seo';
import { legal } from '@/config/pages.config';
import type { LegalContentConfig } from '@/types/pages.types';

type Props = Pick <LegalContentConfig, 'privacy'>;

const { privacy }: Props = legal;

export const metadata = constructMetadata({
	title: privacy.title,
	description: privacy.sections[0].content[0],
	path: '/privacy',
});

export default function PrivacyPage() {
	return <PrivacyPolicy />
}
