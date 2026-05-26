import React from 'react';
import Link from 'next/link';
import { navigations, services, contact, footer } from '@/config/sections.config';
import { siteConfig } from '@/config/site.config';
import {
	LuMapPin, LuPhone, LuMail, LuClock, LuChevronRight, LuShieldCheck, LuActivity, LuFlame, LuAward, LuExternalLink
} from 'react-icons/lu';

const Footer: React.FC = () => {
	return (
		<footer className="bg-brand-primary text-white border-t border-white/10 pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
			{/* Decorative background element to match the serene premium brand aesthetic */}
			<div className="absolute right-0 bottom-0 w-96 h-96 bg-decorative-plant/5 rounded-full blur-3xl -z-10 pointer-events-none" />
			<div className="absolute left-1/3 top-0 w-80 h-80 bg-brand-tertiary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

			<div className="max-w-7xl mx-auto">
				{/* Main 4-Column Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 lg:gap-12 pb-12 border-b border-white/10">

					{/* Column 1: Brand & Philosophy */}
					<div className="lg:col-span-4 flex flex-col gap-5">
						<Link href="/" className="flex items-center gap-2 group w-fit">
							<img src={`/images/others/logo-footer.png`} alt="Seagam AFH Logo Image" className="w-10 h-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
							<span className="tracking-tight text-xl font-bold text-white transition-opacity group-hover:opacity-95">{siteConfig.name} <span className="font-light text-brand-tertiary">{siteConfig.subName}</span></span>
						</Link>

						<p className="text-white/75 text-sm leading-relaxed max-w-sm">{siteConfig.description}</p>

						{/* Licensure Badge (DSHS Licensed) */}
						<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-brand-tertiary font-medium w-fit">
							<LuShieldCheck className="w-4 h-4 text-brand-tertiary" />
							<span>Full DSHS License Compliant</span>
						</div>
					</div>

					{/* Column 2: Quick Links Navigation */}
					<div className="lg:col-span-2 flex flex-col gap-4">
						<h3 className="text-xs uppercase tracking-widest font-bold text-brand-tertiary">Quick Navigation</h3>
						<ul className="flex flex-col gap-2.5">
							{navigations.map((item) => (
								<li key={item.name}>
									<Link href={item.href} className="text-white/70 hover:text-white hover:translate-x-1 flex items-center gap-1.5 text-sm transition-all duration-200">
										<LuChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
										<span>{item.name}</span>
									</Link>
								</li>
							))}
							<li>
								<Link href="/careers" className="text-white/70 hover:text-white hover:translate-x-1 flex items-center gap-1.5 text-sm transition-all duration-200">
									<LuChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
									<span>Careers / Jobs</span>
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 3: Specialized Care Services */}
					<div className="lg:col-span-3 flex flex-col gap-4">
						<h3 className="text-xs uppercase tracking-widest font-bold text-brand-tertiary">Our Care Services</h3>
						<ul className="flex flex-col gap-2.5">
							{services.items.map((service) => (
								<li key={service.id} className="group">
									<Link href="/#services" className="text-white/70 hover:text-white flex flex-col transition-all duration-200">
										<span className="text-sm font-medium group-hover:text-white flex items-center gap-1.5">
											<span className="w-1.5 h-1.5 rounded-full bg-brand-tertiary/60 group-hover:bg-brand-tertiary transition-colors" />{service.title}</span>
										<span className="text-[11px] text-white/50 pl-3 leading-tight hidden sm:block">{service.description.split('.')[0]}.</span>
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Column 4: Location, Contact & Hours */}
					<div className="lg:col-span-3 flex flex-col gap-5">
						<h3 className="text-xs uppercase tracking-widest font-bold text-brand-tertiary">Get in Touch</h3>
						<ul className="flex flex-col gap-3.5 text-sm">
							<li className="flex gap-2.5 items-start">
								<LuMapPin className="w-4 h-4 text-brand-tertiary shrink-0 mt-0.5" />
								<a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`} target="_blank" rel="noreferrer" className="text-white/85 hover:text-white transition-colors hover:underline flex items-center gap-1">
									<span className="leading-snug">{contact.address}</span>
									<LuExternalLink className="w-3 h-3 opacity-65 shrink-0 inline" />
								</a>
							</li>

							<li className="flex gap-2.5 items-center">
								<LuPhone className="w-4 h-4 text-brand-tertiary shrink-0" />
								<a href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`} className="text-white/85 hover:text-white transition-colors hover:underline font-medium text-base">
									{contact.phone}
								</a>
							</li>

							<li className="flex gap-2.5 items-center">
								<LuMail className="w-4 h-4 text-brand-tertiary shrink-0" />
								<a href={`mailto:${contact.email}`} className="text-white/85 hover:text-white transition-colors hover:underline">
									{contact.email}
								</a>
							</li>

							<li className="flex gap-2.5 items-start pt-1 border-t border-white/5 mt-1">
								<LuClock className="w-4 h-4 text-brand-tertiary shrink-0 mt-0.5" />
								<div className="text-white/80 text-xs flex flex-col">
									<span className="font-medium text-white/90">Hours: Open 24/7</span>
									<span className="text-white/50 text-[10px] mt-0.5">Please coordinate in advance</span>
								</div>
							</li>
						</ul>

						{/* Interactive Call to Action button */}
						<Link href="/#contact" className="mt-2 w-full text-center bg-brand-tertiary hover:bg-brand-tertiary/95 text-brand-primary py-2.5 px-4 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg active:scale-95">
							Book a Facility Tour
						</Link>
					</div>

				</div>

				{/* Central Trust and Certification Ribbon */}
				<div className="py-8 flex flex-wrap justify-center md:justify-between items-center gap-6 border-b border-white/10">
					<div className="text-xs text-white/60 font-medium tracking-wide flex items-center gap-1.5 justify-center md:justify-start">
						<span className="w-2 h-2 rounded-full bg-status-success inline-block animate-pulse" />
						<span>Operational & Licensed Adult Care Facility</span>
					</div>

					{/* Trust badges row */}
					<div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-[11px] text-white/70">
						<div className="flex items-center gap-1.5" title="Accredited State License">
							<LuAward className="w-4 h-4 text-brand-tertiary shrink-0" />
							<span>State Licensed</span>
						</div>
						<div className="flex items-center gap-1.5" title="Certified Nursing Assistants and First Responders">
							<LuActivity className="w-4 h-4 text-brand-tertiary shrink-0" />
							<span>CPR & First Aid Certified</span>
						</div>
						<div className="flex items-center gap-1.5" title="Rigorous fire inspection standards met">
							<LuFlame className="w-4 h-4 text-brand-tertiary shrink-0" />
							<span>Fire Safety Compliant</span>
						</div>
						<div className="flex items-center gap-1.5" title="Fully bonded and liability insured">
							<LuShieldCheck className="w-4 h-4 text-brand-tertiary shrink-0" />
							<span>Insured & Bonded</span>
						</div>
					</div>
				</div>

				<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
					{/* Copyright notice and extra state compliance terms */}
					<div className="flex flex-col gap-1 text-center md:text-left">
						{footer.copy}
					</div>

					{/* Legal / Policy routing */}
					<div className="flex flex-wrap justify-center gap-5 sm:gap-6 font-medium">
						{footer.links.map((link, idx) => (
							<Link key={idx} href={link.href} className="hover:text-brand-tertiary border-b border-transparent hover:border-brand-tertiary transition-all duration-200 py-0.5">
								{link.text}
							</Link>
						))}
					</div>
				</div>

				{/* Bottom Metadata & Legal Column
				<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
					{/ Copyright notice and extra state compliance terms /}
					<div className="flex flex-col gap-1 text-center md:text-left">
						<p>{footer.copy}</p>
						<p className="opacity-70 text-[11px]">
							Recognized as a Premier Adult Family Provider by the Department of Social and Health Services (DSHS).
						</p>
					</div>

					{/ Legal / Policy routing /}
					<div className="flex flex-wrap justify-center gap-5 sm:gap-6 font-medium">
						{footer.links.map((link, idx) => (
							<Link
								key={idx}
								href={link.href}
								className="hover:text-brand-tertiary border-b border-transparent hover:border-brand-tertiary transition-all duration-200 py-0.5"
							>
								{link.text}
							</Link>
						))}
					</div>
				</div>
				*/}
			</div>
		</footer>
	);
};

export default Footer;
