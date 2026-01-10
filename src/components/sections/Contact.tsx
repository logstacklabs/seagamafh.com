"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import useWeb3Forms from '@web3forms/react';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';

import { publicEnv } from "@/env/public";
import Section from '@/components/layouts/Section';
import { contact } from '@/config/sections.config';

type FormValues = {
	name: string;
	email: string;
	phone: string;
	date: string;
	message: string;
	botcheck: string;
};

const Contact: React.FC = () => {
	const encodedAddress = encodeURIComponent(contact.mapAddress);
	const mapEmbedUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodedAddress}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;
	
	//const { register } = useForm();
	
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>();
	
	const [status, setStatus] = useState<{
		type: "success" | "error" | null;
		message: string;
	}>({ type: null, message: "" });
	
	const { submit } = useWeb3Forms({
		access_key: publicEnv.WEB3FORMS_ACCESS_KEY,
		onSuccess: () => {
			setStatus({
				type: "success",
				message: "Thank you! Your message has been sent successfully.",
			});
			reset();
		},
		onError: (error) => {
			setStatus({
				type: "error",
				message: error || "Something went wrong. Please try again.",
			});
		},
	});
	
	const onSubmit = async (data: FormValues) => {
		setStatus({ type: null, message: "" });
		await submit(data);
	};
	
	return (
		<Section id="contact" className="mb-8">
			<div className="grid lg:grid-cols-2 gap-12 items-end">
				{/* Contact Form */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-canvas-card p-8 md:p-10 rounded-[2rem] shadow-soft border border-canvas-alt"
				>
					<h2 className="text-3xl font-bold mb-6 text-text-main">{contact.title}</h2>
					<form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
						<input
							type="checkbox"
							id=""
							className="hidden"
							style={{ display: "none" }}
							{...register("botcheck")}></input>
						<div className="grid sm:grid-cols-2 gap-5">
							<div className="space-y-1.5">
								<label htmlFor="name" className="text-xs font-bold text-text-muted ml-1 uppercase tracking-wider">Full Name</label>
								<input
									type="text"
									id="name"
									placeholder="John Doe"
									autoComplete="false"
									className="w-full px-5 py-3 bg-canvas-page rounded-xl border border-transparent focus:border-brand-secondary/50 focus:bg-canvas-card focus:ring-4 focus:ring-focus-ring/20 outline-none transition-all duration-300 text-text-main text-sm"
									{...register("name", {
										required: "Full name is required",
										maxLength: 118,
									})}
								/>
								{errors.name && <p className="error">{errors.name.message}</p>}
							</div>
							<div className="space-y-1.5">
								<label htmlFor="phone" className="text-xs font-bold text-text-muted ml-1 uppercase tracking-wider">Phone Number</label>
								<input
									id="phone"
									type="tel"
									placeholder="+1 (555) 000-0000"
									className="w-full px-5 py-3 bg-canvas-page rounded-xl border border-transparent focus:border-brand-secondary/50 focus:bg-canvas-card focus:ring-4 focus:ring-focus-ring/20 outline-none transition-all duration-300 text-text-main text-sm"
									{...register("phone", {
										required: "Enter your phone number",
										pattern: {
											value: /^\+?1?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
											message: "Please enter a valid phone number",
										},
									})}
								/>
								{errors.phone && <p className="error">{errors.phone.message}</p>}
							</div>
						</div>
						<div className="space-y-1.5">
							<label htmlFor="email" className="text-xs font-bold text-text-muted ml-1 uppercase tracking-wider">Email</label>
							<input
								type="email"
								id="email"
								placeholder="johndoe@example.com"
								className="w-full px-5 py-3 bg-canvas-page rounded-xl border border-transparent focus:border-brand-secondary/50 focus:bg-canvas-card focus:ring-4 focus:ring-focus-ring/20 outline-none transition-all duration-300 text-text-main text-sm"
								{...register("email", {
									required: "Enter your email",
									pattern: {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
										message: "Please enter a valid email",
									},
								})}
							/>
							{errors.email && <p className="error">{errors.email.message}</p>}
						</div>
						<div className="space-y-1.5">
							<label htmlFor="tour_date" className="text-xs font-bold text-text-muted ml-1 uppercase tracking-wider">Requested Tour Date</label>
							<div className="relative">
								<input
									id="tour_date"
									type="date"
									placeholder="MM/DD/YY"
									className="w-full px-5 py-3 bg-canvas-page rounded-xl border border-transparent focus:border-brand-secondary/50 focus:bg-canvas-card focus:ring-4 focus:ring-focus-ring/20 outline-none transition-all duration-300 text-text-main text-sm appearance-none"
									{...register("date", {
										required: "Pick a tour date",
										
									})}
								/>
								<Calendar className="absolute right-5 top-1/2 -translate-y-1/2 text-text-muted/60 pointer-events-none" size={18} />
								{errors.date && <p className="error">{errors.date.message}</p>}
							</div>
						</div>
						<div className="space-y-1.5">
							<label htmlFor="message" className="text-xs font-bold text-text-muted ml-1 uppercase tracking-wider">Message</label>
							<textarea
								rows={3}
								id="message"
								placeholder="How can we help you?"
								className="w-full px-5 py-3 bg-canvas-page rounded-xl border border-transparent focus:border-brand-secondary/50 focus:bg-canvas-card focus:ring-4 focus:ring-focus-ring/20 outline-none transition-all duration-300 text-text-main resize-none text-sm"
								{...register("message", {
									required: "How can we help you?",
								})}
							></textarea>
							{errors.message && <p className="error">{errors.message.message}</p>}
						</div>
						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full bg-btn-cta hover:bg-btn-cta-hover text-white py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg hover:shadow-medium hover:-translate-y-1 active:scale-[0.98]"
						>
							Send Request
						</button>
						{status.type && (
							<div
								className={`mt-4 rounded-xl px-4 py-3 text-sm ${
									status.type === "success"
										? "bg-green-100 text-green-700"
										: "bg-red-100 text-red-700"
								}`}
								role="alert"
							>
								{status.message}
							</div>
						)}
					</form>
				</motion.div>
				
				{/* Info & Map Column */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className="space-y-8"
				>
					<div className="space-y-2">
						<h2 className="text-3xl font-bold text-text-main">Find Us</h2>
						<p className="text-text-muted">We&#39;d love to welcome you for a visit.</p>
					</div>
					
					<div className="grid grid-cols-1 gap-4">
						<div className="flex items-center gap-4 p-4 bg-canvas-card rounded-2xl shadow-soft border border-canvas-alt hover:shadow-md transition-shadow">
							<div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary">
								<MapPin className="shrink-0 w-5 h-5" />
							</div>
							<div><h4 className="font-bold text-sm text-text-main">Location</h4><p className="text-text-muted text-sm">{contact.address}</p></div>
						</div>
						<div className="flex items-center gap-4 p-4 bg-canvas-card rounded-2xl shadow-soft border border-canvas-alt hover:shadow-md transition-shadow">
							<div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary">
								<Phone className="shrink-0 w-5 h-5" />
							</div>
							<div><h4 className="font-bold text-sm text-text-main">Call Us</h4><p className="text-text-muted text-sm">{contact.phone}</p></div>
						</div>
						<div className="flex items-center gap-4 p-4 bg-canvas-card rounded-2xl shadow-soft border border-canvas-alt hover:shadow-md transition-shadow">
							<div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary">
								<Mail className="shrink-0 w-5 h-5" />
							</div>
							<div><h4 className="font-bold text-sm text-text-main">Email</h4><p className="text-text-muted text-sm">{contact.email}</p></div>
						</div>
					</div>
					
					<div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl border-[4px] border-white ring-1 ring-black/5 transform hover:scale-[1.02] transition-transform duration-500">
						<iframe
							width="100%"
							height="100%"
							style={{ border: 0 }}
							loading="lazy"
							allowFullScreen
							src={mapEmbedUrl}
							className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
						/>
					</div>
				</motion.div>
			</div>
		</Section>
	);
};

export default Contact;
