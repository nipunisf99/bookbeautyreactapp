import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { easeIn } from 'framer-motion';



//Navbar
export const animateNavbar = (isOpen, onClose) => {
    if (isOpen) {
        // Animate to close (slide out)
        gsap.to('.nav-link', {
            x: 400,   // Slide out of the viewport
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: onClose,  // Call the onClose function when animation completes
        });
    } else {
        // Animate to open (slide in)
        gsap.fromTo('.nav-link',
            { x: 400 },  // Start off-screen
            { x: 0, duration: 0.8, ease: 'power2.inOut' }  // Slide into view
        );
    }
};

