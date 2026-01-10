"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Quote } from 'lucide-react';
import Section from '@/components/layouts/Section';
import { team } from '@/config/sections.config';

const Team: React.FC = () => {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2 }
		}
	};
	
	const cardVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 60 }
		}
	};
	
	return (
		<Section id="caregivers">
			<div className="text-center mb-12 max-w-3xl mx-auto">
				<h2 className="text-4xl font-bold mb-4 text-text-main tracking-tight">{team.title}</h2>
				<p className="text-lg text-text-muted">{team.description}</p>
			</div>
			
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				className="grid md:grid-cols-3 gap-8 md:gap-12"
			>
				{team.members.map((person, idx) => (
					<motion.div
						key={idx}
						variants={cardVariants}
						className="group flex flex-col items-center text-center p-6 rounded-3xl hover:bg-canvas-card hover:shadow-medium transition-all duration-300"
					>
						<div className="relative mb-6">
							<div className="absolute inset-0 bg-brand-primary rounded-full opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
							<img
								src={person.image}
								alt={person.name}
								className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500"
							/>
						</div>
						
						<h3 className="text-xl font-bold text-text-main mb-1">{person.name}</h3>
						<p className="text-brand-primary font-bold uppercase tracking-wider text-[10px] bg-brand-primary/10 px-3 py-1 rounded-full">{person.role}</p>
					</motion.div>
				))}
			</motion.div>
			
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.2 }}
				className="mt-16 text-center max-w-3xl mx-auto bg-canvas-card p-10 rounded-[2rem] shadow-soft border border-canvas-alt relative overflow-hidden"
			>
				<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />
				<Quote className="text-brand-primary/20 w-12 h-12 mx-auto mb-4" />
				<p className="text-xl md:text-2xl font-light text-text-main/80 leading-relaxed font-serif italic">
					{team.missionQuote}
				</p>
			</motion.div>
		</Section>
	);
};

export default Team;
