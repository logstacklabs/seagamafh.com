import Section from '@/components/layouts/Section';
import VirtualTour from '@/components/sections/VirtualTour';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import TrustBar from '@/components/sections/TrustBar';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata();

export default function Home() {
	return (
		<>
			<Hero />
			
			<About />
			
			<Section id="tour" className="bg-canvas-alt/40 py-32 rounded-[3rem] my-12">
				<VirtualTour />
			</Section>
			
			<Services />
			
			<TrustBar />
			
			<Team />
			
			<Testimonials />
			
			<Contact />
		</>
	);
}
