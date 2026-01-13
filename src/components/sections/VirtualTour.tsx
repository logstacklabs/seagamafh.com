"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, Camera, Maximize2, X, ZoomIn } from 'lucide-react';
import { tour } from '@/config/sections.config';
import { RoomCategory } from '@/types/sections.types';

const VirtualTour: React.FC = () => {
	const [activeCategory, setActiveCategory] = useState<RoomCategory>(tour.rooms[0].category);
	const [imageIndex, setImageIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const [showHotspot, setShowHotspot] = useState<number | null>(null);
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);
	
	const currentCategoryData = tour.rooms.find(c => c.category === activeCategory)!;
	const imgPath = currentCategoryData.imageRootPath;
	const currentImage = currentCategoryData.images[imageIndex];
	
	// Wrap navigation in useCallback for stable dependencies in effects
	const handleNext = useCallback(() => {
		setDirection(1);
		setImageIndex((prev) => (prev + 1) % currentCategoryData.images.length);
	}, [currentCategoryData.images.length]);
	
	const handlePrev = useCallback(() => {
		setDirection(-1);
		setImageIndex((prev) => (prev - 1 + currentCategoryData.images.length) % currentCategoryData.images.length);
	}, [currentCategoryData.images.length]);
	
	const switchCategory = (cat: RoomCategory) => {
		if (cat === activeCategory) return;
		setDirection(0);
		setActiveCategory(cat);
		setImageIndex(0);
	};
	
	// Gallery Swipe Logic
	const onPanEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
		const swipeThreshold = 50;
		if (info.offset.x < -swipeThreshold) {
			handleNext();
		} else if (info.offset.x > swipeThreshold) {
			handlePrev();
		}
	};
	
	// Keyboard Navigation & Scroll Locking for Lightbox
	useEffect(() => {
		if (isLightboxOpen) {
			document.body.style.overflow = 'hidden';
			const handleKeyDown = (e: KeyboardEvent) => {
				if (e.key === 'Escape') setIsLightboxOpen(false);
				if (e.key === 'ArrowRight') handleNext();
				if (e.key === 'ArrowLeft') handlePrev();
			};
			window.addEventListener('keydown', handleKeyDown);
			return () => {
				document.body.style.overflow = '';
				window.removeEventListener('keydown', handleKeyDown);
			};
		}
	}, [isLightboxOpen, handleNext, handlePrev]);
	
	// 3D Volumetric Camera-Driven Variants (Background Gallery)
	const volumetricVariants: Variants = {
		enter: (direction: number) => ({
			x: direction > 0 ? '60%' : '-60%',
			z: -800,
			rotateY: direction > 0 ? 45 : -45,
			opacity: 0,
			scale: 0.6,
			filter: 'blur(20px) brightness(0.4)',
		}),
		center: {
			x: 0,
			z: 0,
			rotateY: 0,
			opacity: 1,
			scale: 1,
			filter: 'blur(0px) brightness(1)',
			transition: {
				x: { type: "spring", stiffness: 50, damping: 15, mass: 1.2 },
				z: { type: "spring", stiffness: 40, damping: 15, mass: 1 },
				rotateY: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
				filter: { duration: 0.8, ease: "easeOut" },
				scale: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
				opacity: { duration: 0.6 }
			}
		},
		exit: (direction: number) => ({
			x: direction < 0 ? '60%' : '-60%',
			z: -600,
			rotateY: direction < 0 ? 45 : -45,
			opacity: 0,
			scale: 0.6,
			filter: 'blur(20px) brightness(0.4)',
			transition: {
				duration: 0.9,
				ease: [0.4, 0, 0.2, 1],
			}
		})
	};
	
	// Lightbox Slide Variants (Simpler, cleaner transition for full view)
	const lightboxVariants: Variants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
			scale: 0.9
		}),
		center: {
			x: 0,
			opacity: 1,
			scale: 1,
			transition: {
				x: { type: "spring", stiffness: 300, damping: 30 },
				opacity: { duration: 0.2 }
			}
		},
		exit: (direction: number) => ({
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
			scale: 0.9,
			transition: {
				x: { type: "spring", stiffness: 300, damping: 30 },
				opacity: { duration: 0.2 }
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
			<div className="w-full max-w-6xl mx-auto px-0 md:px-4">
				<motion.div
					onPanEnd={onPanEnd}
					className="relative aspect-[5/4] md:aspect-[16/9] w-full rounded-2xl md:rounded-[2.5rem] bg-zinc-900 shadow-2xl border-[3px] md:border-[6px] border-white/50 overflow-hidden group touch-pan-y"
					style={{ perspective: '2500px' }}
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
								onClick={() => setIsLightboxOpen(true)}
								className="absolute w-full h-full rounded-xl md:rounded-[2rem] overflow-hidden shadow-2xl origin-center will-change-transform cursor-zoom-in"
								style={{
									transformStyle: "preserve-3d",
									backfaceVisibility: "hidden",
								}}
							>
								<img
									src={`${imgPath}/${currentImage.url}`}
									alt={`${activeCategory} view`}
									className="w-full h-full object-cover select-none pointer-events-none"
								/>
								
								{/* Hotspot Overlay Layer - Only show when focused (center) */}
								<motion.div
									className="absolute inset-0"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1, transition: { delay: 0.5 } }}
									exit={{ opacity: 0 }}
								>
									<div className="absolute inset-0 bg-black/10" />
									
									{/* View Indicator Badge */}
									<div className="absolute top-4 right-4 md:top-8 md:right-8 bg-black/40 backdrop-blur-md text-white/90 text-xs px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2">
										<ZoomIn size={12} /> Click to Expand
									</div>
									
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
											onClick={(e) => e.stopPropagation()} // Prevent lightbox open when clicking hotspot
										>
											<div className="relative group/hotspot">
												<button
													onMouseEnter={() => setShowHotspot(i)}
													onMouseLeave={() => setShowHotspot(null)}
													onClick={() => setShowHotspot(showHotspot === i ? null : i)}
													className="relative w-10 h-10 flex items-center justify-center cursor-pointer"
												>
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
															className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max max-w-[240px] px-5 py-3 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-white/40 text-center z-50 pointer-events-none"
														>
															<p className="text-sm font-bold text-brand-primary leading-snug">{hs.label}</p>
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
					
					{/* Background Navigation Controls */}
					<div className="hidden md:flex absolute inset-0 items-center justify-between p-8 pointer-events-none z-50">
						<button
							onClick={handlePrev}
							className="pointer-events-auto w-16 h-16 rounded-full bg-black/20 backdrop-blur-lg text-white flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-brand-primary/40 border border-white/20 hover:scale-105 group/nav"
							aria-label="Previous view"
						>
							<ChevronLeft size={28} className="group-hover/nav:-translate-x-0.5 transition-transform" />
						</button>
						<button
							onClick={handleNext}
							className="pointer-events-auto w-16 h-16 rounded-full bg-black/20 backdrop-blur-lg text-white flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-brand-primary/40 border border-white/20 hover:scale-105 group/nav"
							aria-label="Next view"
						>
							<ChevronRight size={28} className="group-hover/nav:translate-x-0.5 transition-transform" />
						</button>
					</div>
					
					{/* Background Progress Bar */}
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
				
				{/* Caption */}
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
			
			{/* Lightbox Modal */}
			<AnimatePresence>
				{isLightboxOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
						onClick={() => setIsLightboxOpen(false)}
						role="dialog"
						aria-modal="true"
					>
						{/* Close Button */}
						<button
							onClick={() => setIsLightboxOpen(false)}
							className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
							aria-label="Close lightbox"
						>
							<X size={32} />
						</button>
						
						{/* Lightbox Content Container */}
						<div
							className="relative w-full h-full max-w-7xl flex items-center justify-center"
							onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content area
						>
							<AnimatePresence initial={false} custom={direction} mode="popLayout">
								<motion.img
									key={`lightbox-${imageIndex}`}
									src={`${imgPath}/${currentImage.url}`}
									alt={`${activeCategory} full view`}
									custom={direction}
									variants={lightboxVariants}
									initial="enter"
									animate="center"
									exit="exit"
									drag="x"
									dragConstraints={{ left: 0, right: 0 }}
									dragElastic={1}
									onDragEnd={(e, { offset, velocity }) => {
										const swipe = Math.abs(offset.x) * velocity.x;
										if (swipe < -10000 || offset.x < -100) {
											handleNext();
										} else if (swipe > 10000 || offset.x > 100) {
											handlePrev();
										}
									}}
									className="max-w-full max-h-[85vh] object-contain shadow-2xl select-none cursor-grab active:cursor-grabbing rounded-lg"
								/>
							</AnimatePresence>
							
							{/* Lightbox Nav Buttons (Desktop) */}
							<button
								onClick={handlePrev}
								className="hidden md:flex absolute left-0 p-4 text-white/50 hover:text-white hover:scale-110 transition-all"
							>
								<ChevronLeft size={48} />
							</button>
							<button
								onClick={handleNext}
								className="hidden md:flex absolute right-0 p-4 text-white/50 hover:text-white hover:scale-110 transition-all"
							>
								<ChevronRight size={48} />
							</button>
							
							{/* Lightbox Footer Info */}
							<div className="absolute bottom-0 left-0 right-0 text-center pb-4 md:pb-0 pointer-events-none">
								<p className="text-white/80 text-lg font-medium tracking-wide">{activeCategory}</p>
								<p className="text-white/40 text-sm">{imageIndex + 1} / {currentCategoryData.images.length}</p>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default VirtualTour;
