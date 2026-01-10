"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Clock, HeartPulse, Utensils, Accessibility } from 'lucide-react';
import Section from '@/components/layouts/Section';
import { services } from '@/config/sections.config';

const Services: React.FC = () => {
	const getIcon = (iconName: string, size = 32) => {
		const icons: Record<string, any> = { Clock, HeartPulse, Utensils, Accessibility };
		const IconComponent = icons[iconName] || Clock;
		return <IconComponent size={size} />;
	};
	
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15
			}
		}
	};
	
	const cardVariants: Variants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 50, damping: 20 }
		}
	};
	
	return (
		<Section id="services" className="bg-canvas-alt/70 rounded-[3rem] my-8 !py-16">
			<div className="text-center mb-16 max-w-3xl mx-auto">
				<h2 className="text-4xl font-bold mb-4 text-text-main tracking-tight">{services.title}</h2>
				<p className="text-lg text-text-muted">{services.description}</p>
			</div>
			
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
			>
				{services.items.map((service) => (
					<motion.div
						key={service.id}
						variants={cardVariants}
						whileHover={{ y: -8, transition: { duration: 0.3 } }}
						className="bg-canvas-card p-8 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300 border border-transparent hover:border-brand-primary/20 flex flex-col items-center text-center group"
					>
						<div className="w-16 h-16 rounded-2xl bg-canvas-alt flex items-center justify-center mb-6 group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300 shadow-inner group-hover:shadow-md text-brand-secondary">
							{getIcon(service.icon, 28)}
						</div>
						<h3 className="text-xl font-bold mb-3 text-text-main group-hover:text-brand-secondary transition-colors">{service.title}</h3>
						<p className="text-text-muted leading-relaxed text-sm">{service.description}</p>
					</motion.div>
				))}
			</motion.div>
		</Section>
	);
};

export default Services;
