import NotFound from '@/components/pages/NotFound'
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
	title: '404 Not Found'
});

export default function NotFoundPage() {
	return <NotFound />
}
