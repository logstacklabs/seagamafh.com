"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BadgeCheck, Activity, Flame, ShieldCheck } from 'lucide-react';
import { trust } from '@/config/sections.config';

const TrustBar: React.FC = () => {
	const getIcon = (iconName: string, size = 32) => {
		const icons: Record<string, any> = { BadgeCheck, Activity, Flame, ShieldCheck };
		const IconComponent = icons[iconName] || BadgeCheck;
		return <IconComponent size={size} />;
	};
	
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.2 }
		}
	};
	
	const itemVariants: Variants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { type: 'spring', stiffness: 100 }
		}
	};
	
	return (
		<section className="bg-brand-primary py-16 px-4 overflow-hidden">
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 md:gap-24"
			>
				{trust.badges.map((badge, idx) => (
					<motion.div
						key={idx}
						variants={itemVariants}
						whileHover={{ scale: 1.05 }}
						className="flex flex-col items-center text-white gap-4 group cursor-default"
					>
						<div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-white/20 transition-all shadow-lg border border-white/10 group-hover:border-white/30">
							{getIcon(badge.icon)}
						</div>
						<span className="font-bold text-sm uppercase tracking-widest text-white/90 group-hover:text-white transition-colors">{badge.label}</span>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default TrustBar;
