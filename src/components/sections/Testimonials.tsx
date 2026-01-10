"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/layouts/Section';
import { testimonials } from '@/config/sections.config';

const Testimonials: React.FC = () => {
	// Duplicate items to ensure seamless loop
	const duplicatedItems = [...testimonials.items, ...testimonials.items];
	
	return (
		<Section id="testimonials" className="bg-canvas-alt/50 overflow-hidden !py-16 rounded-[3rem] my-8">
			<div className="flex flex-col items-center mb-12">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-text-main">{testimonials.title}</h2>
			</div>
			
			{/* Container to hide overflow */}
			<div className="relative w-full overflow-hidden mask-gradient">
				<motion.div
					className="flex gap-6 py-4 w-fit px-4"
					animate={{ x: ["0%", "-50%"] }}
					transition={{
						ease: "linear",
						duration: 60,
						repeat: Infinity
					}}
				>
					{duplicatedItems.map((t, idx) => (
						<div
							key={idx}
							className="flex-shrink-0 w-[400px] h-[266px] bg-canvas-card p-8 rounded-3xl shadow-soft border border-white hover:border-brand-primary/20 hover:shadow-medium transition-all duration-300 flex flex-col justify-between"
						>
							<div className="relative overflow-hidden">
								<span className="absolute -top-2 -left-1 text-4xl text-brand-tertiary/40 font-serif leading-none">“</span>
								<p className="text-base text-text-main/80 italic leading-relaxed relative z-10 pt-3 pl-2 line-clamp-4">
									{t.content}
								</p>
							</div>
							<div className="flex items-center gap-3 pt-4 border-t border-canvas-alt">
								<div className="w-10 h-10 rounded-full bg-canvas-alt text-brand-secondary flex items-center justify-center font-bold text-lg">
									{t.name.charAt(0)}
								</div>
								<div>
									<p className="font-bold text-text-main text-sm">{t.name}</p>
									<p className="text-brand-secondary text-xs font-bold uppercase tracking-wide">{t.relation}</p>
								</div>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</Section>
	);
};

export default Testimonials;
