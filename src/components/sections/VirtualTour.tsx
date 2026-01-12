"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, Camera, Maximize2 } from 'lucide-react';
import { tour } from '@/config/sections.config';
import { RoomCategory } from '@/types/sections.types';

const VirtualTour: React.FC = () => {
	const [activeCategory, setActiveCategory] = useState<RoomCategory>(tour.rooms[0].category);
	const [imageIndex, setImageIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const [showHotspot, setShowHotspot] = useState<number | null>(null);
	
	const currentCategoryData = tour.rooms.find(c => c.category === activeCategory)!;
	const imgPath = currentCategoryData.imageRootPath;
	const currentImage = currentCategoryData.images[imageIndex];
	
	const handleNext = () => {
		setDirection(1);
		setImageIndex((prev) => (prev + 1) % currentCategoryData.images.length);
	};
	
	const handlePrev = () => {
		setDirection(-1);
		setImageIndex((prev) => (prev - 1 + currentCategoryData.images.length) % currentCategoryData.images.length);
	};
	
	const switchCategory = (cat: RoomCategory) => {
		if (cat === activeCategory) return;
		setDirection(0);
		setActiveCategory(cat);
		setImageIndex(0);
	};
	
	const onPanEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
		const swipeThreshold = 50;
		if (info.offset.x < -swipeThreshold) {
			handleNext();
		} else if (info.offset.x > swipeThreshold) {
			handlePrev();
		}
	};
	
	// Volumetric Camera-Driven Variants
	// Simulates a camera panning and dollying to focus on the next subject
	const volumetricVariants: Variants = {
		enter: (direction: number) => ({
			x: direction > 0 ? '60%' : '-60%',   // Start from the side
			z: -800,                              // Start deep in background
			rotateY: direction > 0 ? 45 : -45,    // Heavily angled
			opacity: 0,
			scale: 0.6,                           // Small due to "distance"
			filter: 'blur(20px) brightness(0.4)', // Extreme Bokeh/DoF
		}),
		center: {
			x: 0,
			z: 0,
			rotateY: 0,
			opacity: 1,
			scale: 1,
			filter: 'blur(0px) brightness(1)',    // Snap to focus
			transition: {
				// Complex orchestration for "Camera Move" feel
				x: { type: "spring", stiffness: 50, damping: 15, mass: 1.2 },
				z: { type: "spring", stiffness: 40, damping: 15, mass: 1 },
				rotateY: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
				filter: { duration: 0.8, ease: "easeOut" },
				scale: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
				opacity: { duration: 0.6 }
			}
		},
		exit: (direction: number) => ({
			x: direction < 0 ? '60%' : '-60%',    // Move to opposite side
			z: -600,                              // Retreat into background
			rotateY: direction < 0 ? 45 : -45,    // Rotate away
			opacity: 0,
			scale: 0.6,
			filter: 'blur(20px) brightness(0.4)', // Blur out as it leaves focus plane
			transition: {
				duration: 0.9,
				ease: [0.4, 0, 0.2, 1], // Standard curve for exit
			}
		})
	};
	
	return (
		<div className="space-y-12">
			<div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4 border border-brand-primary/20">
					<Camera size={14} /> {tour.badge}
				</div>
				<h2 className="text-4xl md:text-5xl font-bold text-text-main mb-4 tracking-tight">{tour.title}</h2>
				<p className="text-text-muted text-lg leading-relaxed">{tour.description}</p>
			</div>
			
			{/* Category Filter Tabs */}
			<div className="flex flex-wrap justify-center gap-3 px-4">
				{tour.rooms.map((cat) => (
					<button
						key={cat.category}
						onClick={() => switchCategory(cat.category)}
						className={`relative px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 overflow-hidden ${
							activeCategory === cat.category
								? 'text-white shadow-medium scale-105'
								: 'bg-canvas-card text-text-muted hover:text-brand-primary border border-divider-subtle hover:border-brand-primary/30'
						}`}
					>
						{activeCategory === cat.category && (
							<motion.div
								layoutId="activeTab"
								className="absolute inset-0 bg-brand-primary"
								transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
							/>
						)}
						<span className="relative z-10">{cat.category}</span>
					</button>
				))}
			</div>
			
			{/* 3D Stage Container */}
			<div className="w-full max-w-6xl mx-auto px-4">
				<motion.div
					onPanEnd={onPanEnd}
					className="relative aspect-[5/4] md:aspect-[16/9] w-full rounded-2xl md:rounded-[2.5rem] bg-zinc-900 shadow-2xl border-[3px] md:border-[6px] border-white/50 overflow-hidden group touch-pan-y"
					style={{ perspective: '2500px' }} // High perspective for volumetric feel
				>
					{/* Ambient Lighting / Vignette */}
					<div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
					
					{/* Main 3D Scene */}
					<div className="absolute inset-0 flex items-center justify-center transform-style-3d">
						<AnimatePresence initial={false} custom={direction} mode="popLayout">
							<motion.div
								key={`${activeCategory}-${imageIndex}`}
								custom={direction}
								variants={volumetricVariants}
								initial="enter"
								animate="center"
								exit="exit"
								className="absolute w-full h-full rounded-xl md:rounded-[2rem] overflow-hidden shadow-2xl origin-center will-change-transform"
								style={{
									transformStyle: "preserve-3d",
									backfaceVisibility: "hidden",
								}}
							>
								<img
									src={`${imgPath}/${currentImage.url}`}
								       alt={`${activeCategory} view`}
								       className="w-full h-full object-cover select-none"
								/>
								
								{/* Hotspot Overlay Layer - Only show when focused (center) */}
								<motion.div
									className="absolute inset-0"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1, transition: { delay: 0.5 } }}
									exit={{ opacity: 0 }}
								>
									<div className="absolute inset-0 bg-black/10" /> {/* Subtle dimming for text pop */}
									
									{currentImage.hotspots?.map((hs, i) => (
										<motion.div
											key={`hs-${i}`}
											initial={{ scale: 0, opacity: 0 }}
											animate={{ scale: 1, opacity: 1 }}
											transition={{
												delay: 0.8 + (i * 0.15),
												type: 'spring',
												stiffness: 200
											}}
											style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
											className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
										>
											<div className="relative group/hotspot">
												<button
													onMouseEnter={() => setShowHotspot(i)}
													onMouseLeave={() => setShowHotspot(null)}
													onClick={() => setShowHotspot(showHotspot === i ? null : i)} // Mobile toggle support
													className="relative w-10 h-10 flex items-center justify-center"
												>
													{/* Pulsing Rings */}
													<div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
													<div className="absolute inset-1 bg-white/90 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] border border-white flex items-center justify-center transition-transform duration-300 group-hover/hotspot:scale-110">
														<Maximize2 size={16} className="text-brand-primary" />
													</div>
												</button>
												
												<AnimatePresence>
													{showHotspot === i && (
														<motion.div
															initial={{ opacity: 0, y: 10, scale: 0.8 }}
															animate={{ opacity: 1, y: 0, scale: 1 }}
															exit={{ opacity: 0, y: 5, scale: 0.8 }}
															className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max max-w-[240px] px-5 py-3 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-white/40 text-center z-50"
														>
															<p className="text-sm font-bold text-brand-primary leading-snug">{hs.label}</p>
															{/* Arrow */}
															<div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white/95" />
														</motion.div>
													)}
												</AnimatePresence>
											</div>
										</motion.div>
									))}
								</motion.div>
							</motion.div>
						</AnimatePresence>
					</div>
					
					{/* Navigation Controls - Floating on top */}
					<div className="hidden md:flex absolute inset-0 items-center justify-between p-4 md:p-8 pointer-events-none z-50">
						<button
							onClick={handlePrev}
							className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/20 backdrop-blur-lg text-white flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-brand-primary/40 border border-white/20 hover:scale-105 group/nav"
							aria-label="Previous view"
						>
							<ChevronLeft size={28} className="group-hover/nav:-translate-x-0.5 transition-transform" />
						</button>
						<button
							onClick={handleNext}
							className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/20 backdrop-blur-lg text-white flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-brand-primary/40 border border-white/20 hover:scale-105 group/nav"
							aria-label="Next view"
						>
							<ChevronRight size={28} className="group-hover/nav:translate-x-0.5 transition-transform" />
						</button>
					</div>
					
					{/* Cinematic Progress Bar */}
					<div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 gap-3 z-50 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
						{currentCategoryData.images.map((_, idx) => (
							<button
								key={idx}
								onClick={() => {
									setDirection(idx > imageIndex ? 1 : -1);
									setImageIndex(idx);
								}}
								className={`transition-all duration-500 rounded-full shadow-sm ${
									idx === imageIndex
										? 'w-8 h-2 bg-white'
										: 'w-2 h-2 bg-white/40 hover:bg-white/70'
								}`}
								aria-label={`Go to image ${idx + 1}`}
							/>
						))}
					</div>
				
				</motion.div>
				
				{/* Gallery Caption/Context */}
				<motion.div
					key={`${activeCategory}-${imageIndex}-caption`}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="mt-6 text-center"
				>
					<p className="text-text-muted text-sm uppercase tracking-widest font-semibold">{activeCategory}</p>
					<p className="text-brand-primary font-medium mt-1">Image {imageIndex + 1} of {currentCategoryData.images.length}</p>
				</motion.div>
			</div>
		</div>
	);
};

export default VirtualTour;
