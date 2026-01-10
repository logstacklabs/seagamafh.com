"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
	id: string;
	className?: string;
	children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
	return (
		<motion.section
			id={id}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-10%" }}
			variants={{
				hidden: { opacity: 0, y: 30 },
				visible: {
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.8,
						ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for "luxurious" feel
						staggerChildren: 0.1
					}
				}
			}}
			className={`py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden ${className}`}
		>
			{children}
		</motion.section>
	);
};

export default Section;
