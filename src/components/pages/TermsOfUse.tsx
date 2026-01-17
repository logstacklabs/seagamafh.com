'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertTriangle } from 'lucide-react';
import { legal } from '@/config/pages.config';

const TermsOfUse: React.FC = () => {
	useEffect(() => window.scrollTo(0, 0), []);
	
	return (
		<div className="pt-32 pb-20 px-4 min-h-screen bg-canvas-page">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center justify-center p-3 bg-brand-secondary/10 rounded-full mb-6 text-brand-secondary">
						<FileText size={32} />
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">{legal.terms.title}</h1>
					<p className="text-text-muted">Last Updated: {legal.terms.lastUpdated}</p>
				</motion.div>
				
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="bg-canvas-card p-8 md:p-12 rounded-[2rem] shadow-soft border border-canvas-alt space-y-12"
				>
					{legal.terms.sections.map((section, idx) => (
						<div key={idx} className="space-y-4">
							<h2 className="text-2xl font-bold text-text-main border-b border-canvas-alt pb-2">
								{section.title}
							</h2>
							<div className="space-y-4 text-text-muted leading-relaxed">
								{section.content.map((para, pIdx) => (
									<p key={pIdx} className={section.title.includes('Disclaimer') ? 'font-medium text-text-main' : ''}>
										{para}
									</p>
								))}
							</div>
							{section.title.includes('Disclaimer') && (
								<div className="bg-status-error/50 border border-red-200 p-4 rounded-xl flex gap-3 items-center text-red-800 text-sm font-semibold">
									<AlertTriangle className="shrink-0" size={20} />
									<span>Not Medical Advice</span>
								</div>
							)}
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default TermsOfUse;
