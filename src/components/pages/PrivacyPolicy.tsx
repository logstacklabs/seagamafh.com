'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock } from 'lucide-react';
import { legal } from '@/config/pages.config';

const PrivacyPolicy: React.FC = () => {
	useEffect(() => window.scrollTo(0, 0), []);
	
	return (
		<div className="pt-32 pb-20 px-4 min-h-screen bg-canvas-page">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center justify-center p-3 bg-brand-primary/10 rounded-full mb-6 text-brand-primary">
						<Shield size={32} />
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">{legal.privacy.title}</h1>
					<p className="text-text-muted">Last Updated: {legal.privacy.lastUpdated}</p>
				</motion.div>
				
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="bg-canvas-card p-8 md:p-12 rounded-[2rem] shadow-soft border border-canvas-alt space-y-12"
				>
					{legal.privacy.sections.map((section, idx) => (
						<div key={idx} className="space-y-4">
							<h2 className="text-2xl font-bold text-text-main flex items-center gap-3">
								<div className="w-2 h-8 bg-brand-secondary rounded-full" />
								{section.title}
							</h2>
							<div className="pl-5 space-y-4 text-text-muted leading-relaxed">
								{section.content.map((para, pIdx) => (
									<p key={pIdx}>{para}</p>
								))}
							</div>
						</div>
					))}
					
					<div className="bg-brand-primary/5 p-6 rounded-xl border border-brand-primary/10 mt-8 flex gap-4 items-start">
						<Lock className="text-brand-primary shrink-0 mt-1" />
						<p className="text-sm text-text-muted">
							Your trust is paramount. We implement industry-standard security measures to ensure that your personal information and any health-related data remain confidential and secure.
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
