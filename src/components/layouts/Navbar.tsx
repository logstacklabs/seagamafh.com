"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/site.config';
import {
	navigations
} from '@/config/sections.config';

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	
	useEffect(() => {
		const handleScroll = () => {
			const sections = navigations.map(n => n.id);
			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= 150 && rect.bottom >= 150) {
						setActiveSection(section);
					}
				}
			}
		};
		
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-canvas-page/90 backdrop-blur-md shadow-soft py-3 lg:py-4 transition-all duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
				{/* Logo Section - Prioritized Layout */}
				<a href="#home" className="flex items-center gap-2 font-bold text-brand-primary shrink-0 group">
					<img
						src={siteConfig.logo}
						alt="Seagam AFH Logo Image"
						className="w-8 h-8 lg:w-11 lg:h-11 transition-transform group-hover:scale-110"
					/>
					<span className="tracking-tight text-text-main text-lg lg:text-2xl whitespace-nowrap">
						{siteConfig.name} <span className="font-light">{siteConfig.subName}</span>
					</span>
				</a>
				
				{/* Desktop Menu - Optimized for Tablet (md) & Desktop (lg+) */}
				<div className="hidden md:flex items-center gap-1 lg:gap-6 xl:gap-8 shrink-1 min-w-0 justify-end flex-1">
					<div className="flex items-center bg-canvas-card/50 rounded-full px-1 py-1 border border-transparent lg:border-gray-100/50">
						{navigations.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className={`
                  text-[13px] lg:text-sm font-bold transition-all px-2.5 lg:px-3 py-1.5 rounded-full whitespace-nowrap
                  ${activeSection === link.id
									? 'text-brand-primary bg-brand-primary/10'
									: 'text-text-muted hover:text-brand-primary hover:bg-canvas-alt'}
                `}
							>
								{link.name}
							</a>
						))}
					</div>
					
					<a
						href="#contact"
						className="
              bg-btn-cta text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full
              text-[13px] lg:text-sm font-semibold whitespace-nowrap shrink-0
              hover:bg-btn-cta-hover transition-all transform hover:scale-105 active:scale-95 shadow-md
            "
					>
						Book a Tour
					</a>
				</div>
				
				{/* Mobile Toggle */}
				<button
					className="md:hidden p-2 text-brand-primary hover:bg-brand-primary/10 rounded-full transition-colors"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>
			
			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-canvas-page border-t border-gray-100 overflow-hidden shadow-xl"
					>
						<div className="flex flex-col p-4 gap-2">
							{navigations.map((link) => (
								<a
									key={link.name}
									href={link.href}
									className={`
                    text-base font-medium px-4 py-3 rounded-lg transition-colors flex items-center justify-between
                    ${activeSection === link.id ? 'bg-brand-primary/5 text-brand-primary' : 'text-text-main hover:bg-canvas-alt'}
                  `}
									onClick={() => setIsOpen(false)}
								>
									{link.name}
									{activeSection === link.id && <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />}
								</a>
							))}
							<div className="h-px bg-gray-100 my-2" />
							<a
								href="#contact"
								className="bg-btn-cta text-white text-center py-3 rounded-lg font-bold shadow-md hover:bg-btn-cta-hover transition-colors"
								onClick={() => setIsOpen(false)}
							>
								Schedule Tour
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
