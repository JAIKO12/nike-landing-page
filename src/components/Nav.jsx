import React, { useEffect, useState } from 'react';
import { headerLogo } from '../assets/images/';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constant';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 z-20 w-full transition-colors duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="flex justify-between items-center max-container padding-x py-4">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
