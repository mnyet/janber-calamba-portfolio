import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const stickyNav = () => {
        if (window.scrollY >= 120) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', stickyNav);

    return (
        <div className={`w-full flex z-50 bg-darkGray justify-between items-center p-10 md:px-16 md:py-10 ${navbar ? 'fixed' : 'block'}`}>
            <a href='/#' className='text-4xl font-bold hover:text-darkGreen'><span className='text-darkGreen'>Bear</span>Portfolio</a>

            <div className={menuOpen ? "" : "hidden md:block"}>
                <ul className={`absolute text-lg font-semibold text-left left-0 pl-10 mt-10 md:mt-0 flex flex-col md:flex-row gap-5 md:gap-x-7 md:static ${menuOpen ? " border-b-4 bg-darkGray border-darkGreen md:border-b-0 w-full pb-7" : ""}`}>
                    <li>
                        <a href='/#' className='hover:text-darkGreen'>Home</a>
                    </li>
                    <li>
                        <a href='/#about' className='hover:text-darkGreen'>About</a>
                    </li>
                    <li>
                        <a href='/#projects' className='hover:text-darkGreen'>Projects</a>
                    </li>
                    <li>
                        <a href='/#contact' className='hover:text-darkGreen'>Contact</a>
                    </li>
                </ul>
            </div>

            <span className='md:hidden'>
                <FontAwesomeIcon className='text-2xl cursor-pointer' onClick={() => setMenuOpen(prevState => !prevState)} icon={faBars} />
            </span>
        </div>
    )
}

export default Navbar