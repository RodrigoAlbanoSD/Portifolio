import { useState, useEffect } from 'react';
import './navbar.css'; 

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "home", label: "Início" },
    { id: "sobre", label: "Sobre" },
    { id: "habilidades", label: "Habilidades" },
    { id: "experiencias", label: "Experiência" },
    { id: "contato", label: "Contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>

      <div className="navbar-inner">
        <div className="brand">
          <span className="brand-title">Rodrigo Dev</span>
        </div>

        {/* Desktop Menu */}
        <div className="menu-desktop">
          <div className="menu-items">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="menu-link"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
    </nav>
  );
}

export default Navbar;




