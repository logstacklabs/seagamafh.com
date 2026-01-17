'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import Link from 'next/link'
import { faq } from '@/config/pages.config';

const FAQ: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);
	
	useEffect(() => window.scrollTo(0, 0), []);
	
	return (
		<div className="pt-32 pb-20 px-4 min-h-screen bg-canvas-page">
			<div className="max-w-3xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center justify-center p-3 bg-brand-tertiary/20 rounded-full mb-6 text-brand-primary">
						<HelpCircle size={32} />
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">{faq.title}</h1>
					<p className="text-xl text-text-muted max-w-xl mx-auto">{faq.subtitle}</p>
				</motion.div>
				
				<div className="space-y-4">
					{faq.items.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className="bg-canvas-card rounded-2xl border border-canvas-alt shadow-sm overflow-hidden"
						>
							<button
								onClick={() => setOpenIndex(openIndex === index ? null : index)}
								className="w-full flex items-center justify-between p-6 text-left hover:bg-canvas-alt/30 transition-colors"
							>
								<span className="font-bold text-lg text-text-main pr-8">{item.question}</span>
								<span className={`shrink-0 p-2 rounded-full ${openIndex === index ? 'bg-brand-primary text-white' : 'bg-canvas-alt text-brand-primary'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
							</button>
							
							<AnimatePresence>
								{openIndex === index && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3, ease: 'easeInOut' }}
									>
										<div className="px-6 pb-6 text-text-muted leading-relaxed border-t border-canvas-alt/50 pt-4">
											{item.answer}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
				
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="mt-16 text-center bg-brand-primary text-white p-10 rounded-3xl"
				>
					<h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
					<p className="mb-8 text-white/80">We're here to help you navigate this important decision.</p>
					<Link href="/#contact" className="inline-block bg-white text-brand-primary px-8 py-3 rounded-full font-bold hover:bg-brand-tertiary transition-colors shadow-lg">
						Contact Us Today
					</Link>
				</motion.div>
			</div>
		</div>
	);
};

export default FAQ;
