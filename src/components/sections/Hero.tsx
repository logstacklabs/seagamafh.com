"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { hero } from '@/config/sections.config';

const Hero: React.FC = () => {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			}
		}
	};
	
	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
		}
	};
	
	return (
		<section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-primary">
			<div className="absolute inset-0 z-0">
				<motion.div
					initial={{ scale: 1.1 }}
					animate={{ scale: 1 }}
					transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
					className="w-full h-full"
				>
					<img
						src={hero.bgImage}
						alt="Hero Background"
						className="w-full h-full object-cover brightness-[0.60]"
					/>
				</motion.div>
				<div className="absolute inset-0 bg-gradient-to-b from-brand-primary/50 via-transparent to-canvas-page" />
			</div>
			
			<div className="relative z-10 text-center px-4 max-w-5xl">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.div variants={itemVariants}>
            <span className="inline-block bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-8 shadow-lg">
              {hero.badge}
            </span>
					</motion.div>
					
					<motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight drop-shadow-xl">
						{hero.title} <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-tertiary to-white">
              {hero.titleAccent}
            </span>
					</motion.h1>
					
					<motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
						{hero.description}
					</motion.p>
					
					<motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center">
						<a
							href={hero.ctaPrimary.href}
							className="group relative bg-btn-cta hover:bg-btn-cta-hover text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-medium hover:-translate-y-1 overflow-hidden"
						>
							<span className="relative z-10">{hero.ctaPrimary.text}</span>
							<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
						</a>
						
						<a
							href={hero.ctaSecondary.href}
							className="group bg-white/5 backdrop-blur-xl hover:bg-white/10 text-white border border-white/30 px-10 py-5 rounded-full text-lg font-bold transition-all hover:-translate-y-1 hover:border-white/50"
						>
							{hero.ctaSecondary.text}
						</a>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
