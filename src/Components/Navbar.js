import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { animateNavbar } from './gsapAnimation';
import logo from '../assets/images/Logo.svg';
import { ReactComponent as Logo } from '../assets/images/Logo.svg';

function Navbar2() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => {
        if (isOpen) {
            animateNavbar(isOpen, () => setIsOpen(false));
        }
        else {
            setIsOpen(true);
            animateNavbar(isOpen);
        }
    };

    // Handle click outside to close menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                if (isOpen) {
                    animateNavbar(isOpen, () => setIsOpen(false));
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    },
        [navRef, isOpen]);

    return (
        <header>
            <main>
                <div className=' nav-container' ref={navRef}>
                    <nav>
                        <ul className={isOpen ? 'nav-link active' : 'nav-link'}>
                            <Icon icon="material-symbols:close" className='close-icon' onClick={toggleMenu} />
                            <div className='two-links d-flex'>
                                <li>
                                    <Link to="/Appointments">Appointments</Link>
                                </li>
                                <li>
                                    <Link to="/Services">Services</Link>
                                </li>
                                <li>
                                    <Link to="/Contact Us">Contact Us</Link>
                                </li>
                            </div>

                            {isOpen && (
                                <form className="d-flex searchbar mt-2">
                                    <input type="search" placeholder="Search by name or area.." />
                                    <button className="btn searchbtn" type="submit">
                                        <Icon icon="simple-line-icons:magnifier" />
                                    </button>
                                </form>
                            )}
                        </ul>

                        <div >
                            <Link to="/"><Logo className='logo' /></Link>
                        </div>

                        <ul className='searchbar-ul'>
                            <form class="d-flex searchbar mt-2">
                                <input type="search" placeholder="Search by name or area.." />
                                <button class="btn searchbtn" type="submit"><Icon icon="simple-line-icons:magnifier" /></button>
                            </form>
                        </ul>

                        <Icon icon="iconamoon:menu-burger-horizontal" className="menu-icon" onClick={toggleMenu} />
                    </nav>
                </div>
            </main>
        </header>
    )
}

export default Navbar2;
