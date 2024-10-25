import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { easeIn } from 'framer-motion';

//Navbar
export const animateNavbar = (isOpen, onClose) => {
    if (isOpen) {
        gsap.to('.nav-link', {
            x: 400,   
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: onClose, 
        });
    } else {
        gsap.fromTo('.nav-link',
            { x: 400 },  
            { x: 0, duration: 0.8, ease: 'power2.inOut' }  
        );
    }
};

