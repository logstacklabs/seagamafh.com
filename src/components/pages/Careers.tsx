'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, ChevronDown, CheckCircle2, SearchX, Sparkles } from 'lucide-react';
import { careers } from '@/config/pages.config';
import { contact } from '@/config/sections.config';

const Careers: React.FC = () => {
	const [expandedJob, setExpandedJob] = useState<string | null>(null);
	
	const jobs = careers?.jobs || [];
	const hasJobs = jobs.length > 0;
	
	useEffect(() => window.scrollTo(0, 0), []);
	
	return (
		<div className="pt-32 pb-20 px-4 min-h-screen bg-canvas-page">
			<div className="max-w-5xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center justify-center p-3 bg-brand-secondary/10 rounded-full mb-6 text-brand-secondary">
						<Briefcase size={32} />
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">{careers.title}</h1>
					<p className="text-xl text-text-muted max-w-2xl mx-auto">{careers.subtitle}</p>
				</motion.div>
				
				{!hasJobs ? (
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.1 }}
						className="relative overflow-hidden bg-canvas-card rounded-[2.5rem] border border-canvas-alt shadow-medium p-8 md:p-16 text-center max-w-3xl mx-auto"
					>
						{/* Decorative Elements */}
						<div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-primary via-brand-tertiary to-brand-primary" />
						<div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
						<div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" />
						
						<div className="relative z-10 flex flex-col items-center">
							<div className="w-24 h-24 bg-canvas-page rounded-full shadow-inner flex items-center justify-center mb-8 border border-canvas-alt">
								<SearchX size={40} className="text-text-muted/50" />
							</div>
							
							<h2 className="text-3xl font-bold text-text-main mb-4">No Current Openings</h2>
							
							<p className="text-lg text-text-muted leading-relaxed max-w-lg mb-8">
								We currently don't have any open positions at <span className="font-semibold text-brand-primary">Seagam AFH</span>.
								However, our family is always growing, and we love connecting with compassionate caregivers.
							</p>
							
							<div className="bg-brand-primary/5 rounded-2xl p-6 md:p-8 w-full max-w-md border border-brand-primary/10 hover:border-brand-primary/20 transition-colors">
								<div className="flex flex-col items-center gap-3">
									<Sparkles size={24} className="text-brand-tertiary mb-1" />
									<p className="font-medium text-text-main">Interested in future opportunities?</p>
									<p className="text-sm text-text-muted mb-4">Send us your resume and we'll keep it on file.</p>
									<a
										href={`mailto:${contact.email}?subject=Future Consideration - Caregiver Application`}
										className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg hover:-translate-y-0.5 w-full md:w-auto"
									>
										Email Your Resume
									</a>
								</div>
							</div>
						</div>
					</motion.div>
				) : (
					<div className="grid gap-6">
						{jobs.map((job, index) => (
							<motion.div
								key={job.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								className={`bg-canvas-card rounded-[2rem] border transition-all duration-300 overflow-hidden ${
									expandedJob === job.id
										? 'border-brand-primary shadow-medium ring-1 ring-brand-primary/20'
										: 'border-canvas-alt shadow-soft hover:border-brand-primary/30'
								}`}
							>
								<button
									onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
									className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
								>
									<div>
										<h3 className="text-2xl font-bold text-text-main mb-2">{job.title}</h3>
										<div className="flex flex-wrap gap-4 text-sm text-text-muted font-medium">
											<span className="flex items-center gap-1"><MapPin size={16} /> Kent, WA</span>
											<span className="flex items-center gap-1"><Clock size={16} /> Full-Time / Part-Time</span>
										</div>
										<p className="mt-3 text-text-muted md:hidden">{job.shortDescription}</p>
									</div>
									
									<div className="flex items-center gap-4 shrink-0">
										<p className="hidden md:block text-text-muted max-w-xs text-sm mr-4">{job.shortDescription}</p>
										<div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
											expandedJob === job.id ? 'bg-brand-primary text-white' : 'bg-canvas-alt text-brand-primary'
										}`}>
											<ChevronDown size={20} className={`transition-transform duration-300 ${expandedJob === job.id ? 'rotate-180' : ''}`} />
										</div>
									</div>
								</button>
								
								<AnimatePresence>
									{expandedJob === job.id && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: 'auto', opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3 }}
										>
											<div className="px-6 md:px-8 pb-8 pt-0 border-t border-canvas-alt/50 mt-2">
												<div className="grid md:grid-cols-2 gap-8 pt-6">
													<div>
														<h4 className="font-bold text-lg mb-3 text-brand-primary">About the Role</h4>
														<p className="text-text-muted leading-relaxed mb-6">{job.description}</p>
														
														<h4 className="font-bold text-lg mb-3 text-brand-primary">Responsibilities</h4>
														<ul className="space-y-2 mb-6">
															{job.responsibilities.map((req, i) => (
																<li key={i} className="flex items-start gap-2 text-text-muted">
																	<CheckCircle2 size={18} className="text-brand-secondary shrink-0 mt-0.5" />
																	<span className="text-sm">{req}</span>
																</li>
															))}
														</ul>
													</div>
													
													<div className="bg-canvas-alt/30 p-6 rounded-2xl h-fit">
														<h4 className="font-bold text-lg mb-3 text-brand-primary">Qualifications</h4>
														<ul className="space-y-2 mb-8">
															{job.qualifications.map((qual, i) => (
																<li key={i} className="flex items-start gap-2 text-text-muted">
																	<div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0" />
																	<span className="text-sm">{qual}</span>
																</li>
															))}
														</ul>
														
														<a
															href={`mailto:${contact.email}?subject=Application for ${job.title}`}
															className="block w-full text-center bg-btn-cta hover:bg-btn-cta-hover text-white py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
														>
															Apply Now
														</a>
														<p className="text-center text-xs text-text-muted mt-3">
															Please attach your resume and certifications.
														</p>
													</div>
												</div>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Careers;
