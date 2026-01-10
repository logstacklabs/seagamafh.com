import React from 'react';
import { footer } from '@/config/sections.config';
import { siteConfig } from '@/config/site.config';

const Footer: React.FC = () => {
	return (
		<footer className="bg-brand-primary text-white py-12 px-4">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
				<div className="flex items-center gap-2 text-2xl font-bold">
					<img
						src={`/images/others/logo-footer.png`}
						alt="Seagam AFH Logo Image"
						className="w-10 h-10"
					/>
					<span className="font-semibold">{siteConfig.name} <span className="font-medium text-brand-secondary">{siteConfig.subName}</span></span>
				</div>
				<p className="text-white/50 text-sm">{footer.copy}</p>
				<div className="flex gap-6">
					{footer.links.map((link, idx) => (
						<a key={idx} href={link.href} className="text-white/70 hover:text-brand-tertiary transition-colors">{link.text}</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
