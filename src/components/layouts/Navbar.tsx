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
		<nav className="fixed top-0 left-0 right-0 z-50 bg-canvas-page shadow-soft py-4">
			<div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
				<a href="#home" className="flex items-center gap-2 text-2xl font-bold text-brand-primary">
					<img
						src={siteConfig.logo}
						alt="Seagam AFH Logo Image"
						className="w-11 h-11"
					/>
					<span className="tracking-tight text-text-main font-semibold">
            {siteConfig.name} <span className="font-medium text-brand-secondary">{siteConfig.subName}</span>
          </span>
				</a>
				
				{/* Desktop Menu */}
				<div className="hidden md:flex items-center gap-8">
					{navigations.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className={`text-sm font-bold transition-all px-3 py-1 rounded-full ${activeSection === link.id ? 'text-brand-primary bg-brand-primary/10' : 'text-text-muted hover:text-brand-primary hover:bg-canvas-alt'}`}
						>
							{link.name}
						</a>
					))}
					<a href="#contact" className="bg-btn-cta text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-btn-cta-hover transition-all transform hover:scale-105 active:scale-95 shadow-md">
						Book a Tour
					</a>
				</div>
				
				{/* Mobile Toggle */}
				<button className="md:hidden p-2 text-brand-primary" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
					{isOpen ? <X /> : <Menu />}
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
						<div className="flex flex-col p-4 gap-4">
							{navigations.map((link) => (
								<a
									key={link.name}
									href={link.href}
									className="text-lg font-medium text-text-main px-4 py-2 hover:bg-canvas-alt rounded-lg transition-colors"
									onClick={() => setIsOpen(false)}
								>
									{link.name}
								</a>
							))}
							<a
								href="#contact"
								className="bg-btn-cta text-white text-center py-3 rounded-lg font-bold shadow-md"
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
