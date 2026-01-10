"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Section from '@/components/layouts/Section';
import { about } from '@/config/sections.config';

const About: React.FC = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1 }
		}
	};
	
	const itemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5 }
		}
	};
	
	return (
		<Section id="about">
			<div className="grid md:grid-cols-2 gap-16 items-center">
				<div className="space-y-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-4xl md:text-5xl font-bold text-text-main leading-[1.2] mb-6">
							{about.title} <br />
							<span className="text-brand-secondary">{about.titleAccent}</span>
						</h2>
						<p className="text-lg text-text-muted leading-relaxed">
							{about.description}
						</p>
					</motion.div>
					
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						className="grid grid-cols-1 sm:grid-cols-2 gap-5"
					>
						{about.features.map((item, idx) => (
							<motion.div key={idx} variants={itemVariants} className="flex items-center gap-3 p-3 rounded-xl hover:bg-canvas-card transition-colors duration-300">
								<div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
									<CheckCircle2 className="w-5 h-5" />
								</div>
								<span className="font-medium text-text-main/90">{item}</span>
							</motion.div>
						))}
					</motion.div>
					
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
						className="bg-canvas-card p-6 rounded-2xl shadow-soft border border-brand-primary/5"
					>
						<p className="italic text-text-muted font-medium">
							{about.quote}
						</p>
					</motion.div>
				</div>
				
				<motion.div
					initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
					whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="relative group"
				>
					<div className="absolute -inset-4 bg-decorative-plant/20 rounded-[2.5rem] -rotate-3 z-0 transition-transform duration-500 group-hover:-rotate-6" />
					<div className="absolute -inset-4 bg-brand-primary/5 rounded-[2.5rem] rotate-2 z-0 transition-transform duration-500 group-hover:rotate-4" />
					<img
						src={about.image}
						alt="About Section Image"
						className="relative z-10 rounded-[2rem] shadow-medium w-full h-[600px] object-cover transition-transform duration-700 hover:scale-[1.01]"
					/>
				</motion.div>
			</div>
		</Section>
	);
};

export default About;
