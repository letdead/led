import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useScroll } from '../../../hooks/useScroll';
import Button from '../../ui/Button';
import { UI_TEXT, SECTION_IDS, SCROLL_THRESHOLD } from '../../../constants';
import { scrollToElement } from '../../../utils/helpers';
import './Header.css';

const Header = () => {
  const scrolled = useScroll(SCROLL_THRESHOLD);
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      // If not on home, go home first, then scroll
      navigate('/');
      setTimeout(() => scrollToElement(`#${sectionId}`), 100);
    } else {
      // If already on home, just scroll
      e.preventDefault();
      scrollToElement(`#${sectionId}`);
    }
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-container">
          {/* Logo now clicks back to Home */}
          <Link to="/" className="logo" onClick={handleLinkClick}>{UI_TEXT.HEADER.LOGO}</Link>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link to="/" onClick={handleLinkClick}>Home</Link>

            <a 
              href={`/#${SECTION_IDS.PRODUCTS}`} 
              onClick={(e) => handleNavClick(e, SECTION_IDS.PRODUCTS)}
            >
              {UI_TEXT.HEADER.NAV.PRODUCTS}
            </a>
            
            <Link to="/support" onClick={handleLinkClick}>{UI_TEXT.HEADER.NAV.SUPPORT}</Link>

            <Button variant="primary" size="small" onClick={(e) => handleNavClick(e, SECTION_IDS.PRODUCTS)}>
              {UI_TEXT.HEADER.NAV.SHOP}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;