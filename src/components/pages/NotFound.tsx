'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const NotFound: React.FC = () => {
	const router = useRouter();
	
	return (
		<div className="min-h-screen bg-brand-primary flex items-center justify-center p-4 relative overflow-hidden">
			{/* Background Art Elements */}
			<div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
				<div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-brand-tertiary blur-[100px]" />
				<div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-brand-secondary blur-[100px]" />
			</div>
			
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="relative z-10 bg-canvas-page p-8 md:p-16 rounded-[3rem] shadow-2xl text-center max-w-2xl w-full mx-auto border-[8px] border-white/10 backdrop-blur-sm"
			>
				<motion.div
					initial={{ y: -20 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.8, type: 'spring' }}
					className="text-9xl font-bold text-brand-secondary mb-2 opacity-20 select-none"
				>
					404
				</motion.div>
				
				<h1 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6 -mt-12 relative z-10">
					Wandered off the path?
				</h1>
				
				<p className="text-text-muted text-lg mb-10 leading-relaxed">
					It looks like the page you are looking for has been moved or doesn't exist.
					Like a peaceful garden walk, sometimes we take a wrong turn.
				</p>
				
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<button
						onClick={() => router.back()}
						className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-brand-primary text-brand-primary font-bold hover:bg-brand-primary/5 transition-colors"
					>
						<ArrowLeft size={20} />
						Go Back
					</button>
					
					<Link
						href="/"
						className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-brand-primary text-white font-bold hover:bg-brand-primary/90 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
					>
						<Home size={20} />
						Home Page
					</Link>
				</div>
			</motion.div>
		</div>
	);
};

export default NotFound;
