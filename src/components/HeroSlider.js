'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// All 5 images for the slider
const slides = [
    {
        image: "/hero_slider/image1.png",
        subtitle: "Project Management & Controls",
        title: "Integrating Controls for Project Success",
        link: "/services"
    },
    {
        image: "/hero_slider/image2.png",
        subtitle: "Project Management & Controls",
        title: "Energizing Your Success",
        link: "/services"
    },
    {
        image: "/hero_slider/image3.png",
        subtitle: "Project Management & Controls",
        title: "Advancing success one milestone at a time",
        link: "/services"
    },
    {
        image: "/hero_slider/image4.png",
        subtitle: "Project Management & Controls",
        title: "Sustaining Water Resources for Tomorrow",
        link: "/services"
    },
    {
        image: "/hero_slider/image5.png",
        subtitle: "Project Management & Controls",
        title: "Fueling Traditional and Alternative Energy Sources",
        link: "/services"
    }
];

const HeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
                setIsFading(false);
            }, 1200);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);
    const currentSlide = slides[currentIndex];

    return (
        <section className="relative h-screen text-white overflow-hidden">

            {/* Test with colored background first */}
            <div 
                className="absolute inset-0"
                style={{ 
                    zIndex: 1,
                    backgroundColor: 'red'
                }}
            />
            
            {/* Dynamic background image */}
            <img 
                src={currentSlide.image}
                alt="Hero background"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 2 }}
            />
            
            {/* Dark overlay for text readability - TEMPORARILY REMOVED FOR TESTING */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div> */}
           
            {/* Content layer */}
            <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-30">
                 <div className={`transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                    <h2 className="text-xl md:text-2xl font-light mb-4">{currentSlide.subtitle}</h2>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{currentSlide.title}</h1>
                    <Link href={currentSlide.link} className="font-semibold tracking-wider hover:underline flex items-center">
                        Learn More →
                    </Link>
                </div>
            </div>
             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-sm tracking-widest z-30">
                Solutions for Project Success
            </div>
        </section>
    );
};

export default HeroSlider;
